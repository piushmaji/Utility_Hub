/**
 * Generates a random string based on selected options.
 * @param {number} length - Length of the generated string.
 * @param {Object} options - Configuration options for string characters.
 * @param {boolean} options.uppercase - Include uppercase letters.
 * @param {boolean} options.lowercase - Include lowercase letters.
 * @param {boolean} options.numbers - Include numbers.
 * @param {boolean} options.symbols - Include symbols.
 * @returns {string} The generated random string.
 */
export function generateRandomString(length, { uppercase, lowercase, numbers, symbols }) {
  const charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
  };

  let charPool = '';
  let guaranteedChars = [];

  // Add selected character sets to pool and guarantee at least one character from each selected set
  if (lowercase) {
    charPool += charSets.lowercase;
    guaranteedChars.push(charSets.lowercase[Math.floor(Math.random() * charSets.lowercase.length)]);
  }
  if (uppercase) {
    charPool += charSets.uppercase;
    guaranteedChars.push(charSets.uppercase[Math.floor(Math.random() * charSets.uppercase.length)]);
  }
  if (numbers) {
    charPool += charSets.numbers;
    guaranteedChars.push(charSets.numbers[Math.floor(Math.random() * charSets.numbers.length)]);
  }
  if (symbols) {
    charPool += charSets.symbols;
    guaranteedChars.push(charSets.symbols[Math.floor(Math.random() * charSets.symbols.length)]);
  }

  // If no sets selected, return empty string
  if (charPool === '') return '';

  let generatedString = '';
  // Fill the remaining length with random selections from the pool
  const remainingLength = length - guaranteedChars.length;
  
  for (let i = 0; i < remainingLength; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    generatedString += charPool[randomIndex];
  }

  // Combine guaranteed characters and the remaining random string, then shuffle them
  const combinedArray = [...guaranteedChars, ...generatedString.split('')];
  
  // Fisher-Yates Shuffle for better randomness
  for (let i = combinedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [combinedArray[i], combinedArray[j]] = [combinedArray[j], combinedArray[i]];
  }

  return combinedArray.join('');
}

/**
 * Calculates the strength of a generated string.
 * Returns: { score: number, label: 'Weak' | 'Medium' | 'Strong', color: string }
 */
export function calculateStrength(length, { uppercase, lowercase, numbers, symbols }) {
  let score = 0;
  
  // Calculate variety of character pools
  const optionsCount = [uppercase, lowercase, numbers, symbols].filter(Boolean).length;
  
  if (length >= 4) score += 1;
  if (length >= 8) score += 1;
  if (length >= 12) score += 1;
  if (length >= 16) score += 1;
  
  score += optionsCount; // up to +4 points

  // Total possible score: 8 points
  if (score <= 3 || optionsCount === 0 || length < 6) {
    return { score, label: 'Weak', color: 'bg-red-500 text-red-500' };
  } else if (score <= 5 || length < 10) {
    return { score, label: 'Medium', color: 'bg-amber-500 text-amber-500' };
  } else {
    return { score, label: 'Strong', color: 'bg-emerald-500 text-emerald-500' };
  }
}

export function generateUUID() {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.randomUUID) {
    try {
      return window.crypto.randomUUID();
    } catch (e) {
      console.warn('randomUUID failed, falling back to bytes:', e);
    }
  }
  if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    const buf = new Uint8Array(16);
    window.crypto.getRandomValues(buf);
    buf[6] = (buf[6] & 0x0f) | 0x40;
    buf[8] = (buf[8] & 0x3f) | 0x80;
    const hex = Array.from(buf).map(b => b.toString(16).padStart(2, '0')).join('');
    return `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}`;
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function generateHexKey(length) {
  const chars = '0123456789abcdef';
  let result = '';
  if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    const byteLength = Math.ceil(length / 2);
    const array = new Uint8Array(byteLength);
    window.crypto.getRandomValues(array);
    for (let i = 0; i < array.length; i++) {
      result += array[i].toString(16).padStart(2, '0');
    }
    return result.substring(0, length);
  }
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * 16)];
  }
  return result;
}

export function generateBase64Token(byteLength) {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    const array = new Uint8Array(byteLength);
    window.crypto.getRandomValues(array);
    let binary = '';
    const len = array.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(array[i]);
    }
    return window.btoa(binary);
  }
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let result = '';
  const charLength = Math.ceil(byteLength * 1.35);
  for (let i = 0; i < charLength; i++) {
    result += chars[Math.floor(Math.random() * 64)];
  }
  return result.substring(0, charLength);
}

export function generateApiKey(prefix, suffixLength = 32) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let suffix = '';
  if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    const array = new Uint8Array(suffixLength);
    window.crypto.getRandomValues(array);
    for (let i = 0; i < array.length; i++) {
      suffix += characters[array[i] % characters.length];
    }
  } else {
    for (let i = 0; i < suffixLength; i++) {
      suffix += characters[Math.floor(Math.random() * characters.length)];
    }
  }
  return `${prefix}${suffix}`;
}
