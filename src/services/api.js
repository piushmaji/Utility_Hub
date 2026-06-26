
import axios from 'axios';

const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const API_HOST = import.meta.env.VITE_RAPIDAPI_HOST || 'google-translate1.p.rapidapi.com';
const API_URL = import.meta.env.VITE_RAPIDAPI_URL || 'https://google-translate1.p.rapidapi.com/language/translate/v2';

// Standard mapping of language names for our mock translator
const LANGUAGE_MOCK_NAMES = {
  hi: 'Hindi',
  bn: 'Bengali',
  es: 'Spanish',
  fr: 'French',
  de: 'German',
  ja: 'Japanese',
  zh: 'Chinese',
  ru: 'Russian',
  ar: 'Arabic',
  ur: 'Urdu'
};

/**
 * Translates English text to a destination language using Google Translate API on RapidAPI.
 * Auto-detects configuration properties based on the VITE_RAPIDAPI_HOST.
 */
export async function translateText(text, targetLang, sourceLang = 'en') {
  if (!text || !text.trim()) {
    throw new Error('Please enter some text to translate.');
  }

  // Treat default template names as mock mode indicators
  const mockKeys = ['your_rapidapi_key_here', '9ZFQOpyxq9QL3MbZ', 'IuMVfV13yTAPmzZq'];
  const isMockMode = !API_KEY || API_KEY.trim() === '' || mockKeys.includes(API_KEY.trim());

  if (isMockMode) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    
    const langName = LANGUAGE_MOCK_NAMES[targetLang] || targetLang;
    
    const mockPrefixes = {
      hi: 'नमस्ते',
      bn: 'নমস্কার',
      es: 'Hola',
      fr: 'Bonjour',
      de: 'Hallo',
      ja: 'こんにちは',
      zh: '你好',
      ru: 'Привет',
      ar: 'مرحبا',
      ur: 'السلام علیکم'
    };

    const prefix = mockPrefixes[targetLang] || 'Hello';
    return `[Mock ${langName}] ${prefix}! This is a local simulation since no active RapidAPI key is defined in your .env file.\n\nOriginal Text: "${text}"`;
  }

  try {
    const isGoogleTranslate113 = API_HOST.includes('google-translate113');

    if (isGoogleTranslate113) {
      // 1. JSON Request for google-translate113 (expects application/json payload)
      const url = API_URL.includes('/language/translate/v2')
        ? 'https://google-translate113.p.rapidapi.com/api/v1/translator/text'
        : API_URL;

      const response = await axios.post(
        url,
        {
          from: sourceLang,
          to: targetLang,
          text: text
        },
        {
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST
          }
        }
      );

      // google-translate113 returns result inside 'trans' key
      if (response.data && response.data.trans) {
        return response.data.trans;
      }
      
      if (response.data && response.data.translatedText) {
        return response.data.translatedText;
      }

      throw new Error('Unexpected response format from google-translate113 API.');
    } else {
      // 2. URLSearchParams for google-translate1 (expects form-encoded payload)
      const params = new URLSearchParams();
      params.append('q', text);
      params.append('target', targetLang);
      params.append('source', sourceLang);

      const response = await axios.post(API_URL, params, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': API_HOST
        }
      });

      if (response.data && response.data.data && response.data.data.translations) {
        return response.data.data.translations[0].translatedText;
      }

      if (response.data && response.data.translatedText) {
        return response.data.translatedText;
      }

      throw new Error('Unexpected response format from translation service.');
    }
  } catch (error) {
    console.error('Translation API error:', error);
    
    if (error.response) {
      const status = error.response.status;
      if (status === 400) {
        throw new Error('Bad Request (400): Please check the input text parameters.');
      } else if (status === 401) {
        throw new Error('Unauthorized (401): Invalid RapidAPI Key. Please check the key in your .env file.');
      } else if (status === 403) {
        throw new Error('Forbidden (403): Your RapidAPI Key is invalid or you are not subscribed to this API plan.');
      } else if (status === 429) {
        throw new Error('Too Many Requests (429): API rate limit exceeded. Please try again later.');
      } else if (status === 500) {
        throw new Error('Server Error (500): The translation server returned an internal error.');
      }
    }
    
    throw new Error(error.message || 'Failed to connect to the translation API.');
  }
}
