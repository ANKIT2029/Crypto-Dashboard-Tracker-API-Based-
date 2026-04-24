# 🚀 Crypto Price Tracker Dashboard

A sleek, real-time cryptocurrency price tracking dashboard built with **vanilla HTML, CSS, and JavaScript** — no frameworks, no dependencies. Powered by the free [CoinGecko API](https://www.coingecko.com/en/api).

---

## ✨ Features

- 📈 **Live Prices** — Fetches the top 20 cryptocurrencies by market cap in real time
- 🔄 **Auto-Refresh** — Data updates automatically every 60 seconds
- 🔍 **Search & Filter** — Instantly filter coins by name or ticker symbol
- 🌙 **Dark / Light Mode** — One-click theme toggle with smooth transitions
- 💎 **Glassmorphism UI** — Modern frosted-glass cards with hover glow effects
- 📱 **Responsive Layout** — Adapts cleanly to any screen size via CSS Grid
- ⚡ **Zero Dependencies** — Pure HTML, CSS, and JS — no npm, no bundler needed

---

## 📸 Preview

> Light Mode  
> ![Light Mode](https://via.placeholder.com/800x400?text=Light+Mode+Preview)

> Dark Mode  
> ![Dark Mode](https://via.placeholder.com/800x400?text=Dark+Mode+Preview)


---

## 🛠️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Markup     | HTML5                             |
| Styling    | CSS3 (Custom Properties, Grid, Animations) |
| Logic      | Vanilla JavaScript (ES6+)        |
| Data       | CoinGecko Public API (free, no key required) |

---

## 🚀 Getting Started

No installation or build step needed.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/Crypto-Dashboard-Tracker.git
cd Crypto-Dashboard-Tracker
```

### 2. Open in browser

Simply open `index.html` directly in your browser:

```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or serve it with any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000` in your browser.

---

## 📁 Project Structure

```
Crypto-Dashboard-Tracker/
│
├── index.html      # App shell and markup
├── styles.css      # All styling, themes, and animations
└── script.js       # API calls, search logic, and DOM rendering
```

---

## 🔌 API Reference

This project uses the **CoinGecko v3 public API** — no API key required.

**Endpoint used:**

```
GET https://api.coingecko.com/api/v3/coins/markets
    ?vs_currency=usd
    &order=market_cap_desc
    &per_page=20
    &page=1
    &sparkline=false
```

**Data displayed per coin:**
- Name & ticker symbol
- Current USD price
- 24-hour price change percentage (green for positive, red for negative)

> ⚠️ **Note:** The free CoinGecko API has a rate limit of ~10–30 calls/minute. The 60-second auto-refresh is intentionally conservative to stay within this limit.

---

## 🎨 Customization

| What to change | Where to look |
|---|---|
| Number of coins shown | `per_page` param in `fetchData()` inside `script.js` |
| Refresh interval | `setInterval(fetchData, 60000)` at the bottom of `script.js` |
| Color theme / gradients | CSS variables in `:root` and `.dark-theme` in `styles.css` |
| Currency (USD → EUR etc.) | `vs_currency=usd` param in the API URL |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repo
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [CoinGecko](https://www.coingecko.com/) for the free crypto market API
- Glassmorphism design inspiration from the UI community
