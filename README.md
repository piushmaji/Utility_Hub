# ⌘ Utility Hub

A premium, developer-focused, offline-first dashboard of essential utilities built with React 19, Vite, and Tailwind CSS v4. Designed for zero-latency operations, clean structural footprint, and complete local privacy.

Developed with 💙 by **[Piush Maji](https://github.com/piushmaji)**.

---

## 🚀 Core Features

### 1. Text Translator
- **RapidAPI Engine**: Instant translation support between English and 10 global languages.
- **Language Swapping**: Fast, single-button direction toggle.
- **Persistent Caching**: Auto-saves your target language to the browser's local storage.
- **Mock Sandbox Fallback**: Works offline or without an API key using simulation responses.

### 2. Generator Suite (Dual-Tab)
- **Password Generator**: Standard parameters (uppercase, lowercase, numbers, symbols) with length sliders and dynamic strength meter analysis.
- **Developer Key Generator**: Generates cryptographically secure identifiers entirely inside local closures:
  - **API Keys**: Customizable prefixes (e.g. `sk_live_`) and suffixes.
  - **UUID v4**: Compliant universally unique 128-bit identifiers.
  - **Cryptographic Hex Keys**: Key character strings (8 to 128-char).
  - **Base64 Tokens**: High-entropy tokens created directly from WebCrypto byte buffers.

---

## 🛠️ Technology Stack
- **Framework**: React 19 (Hooks, Context)
- **Bundler**: Vite 6
- **Styling**: Tailwind CSS v4 (Vanilla CSS variables)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **HTTP Client**: Axios

---

## 🔒 Security & Privacy Model
- **Zero Server Logging**: 100% local computations. Sensitive inputs, generated passwords, tokens, and keys are calculated inside sandboxed client closures.
- **No Databases**: Keys and secrets never leave the client's memory stack and are wiped immediately upon closing the browser tab.

---

## ⚙️ Setup & Installation

### 1. Clone & Install
```bash
git clone https://github.com/piushmaji/Utility_Hub.git
cd Utility_Hub
npm install
```

### 2. Configure Environment Variables
Create a local `.env` file in the root directory (this is ignored by Git to secure your API tokens):
```env
# RapidAPI Translation Configuration
VITE_RAPIDAPI_KEY=your_rapidapi_key_here
```
*Note: If no API key is specified, the application automatically boots into sandboxed mock translation mode.*

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

---

## 👨‍💻 Developed By

**Piush Maji**  
A passionate software engineer focused on building premium, high-fidelity developer suites and clean, responsive user interfaces.

### Connect with me:
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/piushmaji)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/piushmaji)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:piushmaji.dev@gmail.com)

---

## 📄 License
This project is open-source and available under the MIT License.
