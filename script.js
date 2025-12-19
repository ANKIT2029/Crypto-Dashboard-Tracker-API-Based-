// Get DOM elements
const container = document.getElementById('cryptoContainer');
const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById('searchInput');

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggle.textContent = document.body.classList.contains('dark-theme') 
        ? '☀️ Light Mode' 
        : '🌙 Dark Mode';
});

// Store all crypto data for filtering
let allCryptoData = [];

// Search functionality
searchInput.addEventListener('input', () => {
    const value = searchInput.value.toLowerCase();
    const filteredData = allCryptoData.filter(coin => 
        coin.name.toLowerCase().includes(value) || 
        coin.symbol.toLowerCase().includes(value)
    );
    displayData(filteredData);
});

// Fetch data from CoinGecko API
async function fetchData() {
    try {
        container.innerHTML = '<div class="loading">Loading cryptocurrency data...</div>';
        
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false');
        
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        
        const data = await res.json();
        allCryptoData = data;
        displayData(data);
    } catch (err) {
        container.innerHTML = '<div class="loading">⚠️ Error loading data. Please try again later.</div>';
        console.error('Error:', err);
    }
}

// Display cryptocurrency data
function displayData(coins) {
    if (coins.length === 0) {
        container.innerHTML = '<div class="loading">No cryptocurrencies found.</div>';
        return;
    }
    
    container.innerHTML = '';
    
    coins.forEach((coin, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const changeClass = coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative';
        const changeSymbol = coin.price_change_percentage_24h >= 0 ? '+' : '';
        
        card.innerHTML = `
            <h3>${coin.name} (${coin.symbol.toUpperCase()})</h3>
            <p class="price">$${coin.current_price.toLocaleString()}</p>
            <p class="change ${changeClass}">
                ${changeSymbol}${coin.price_change_percentage_24h.toFixed(2)}%
            </p>
        `;
        
        container.appendChild(card);
    });
}

// Initialize - fetch data on page load
fetchData();

// Optional: Auto-refresh data every 60 seconds
setInterval(fetchData, 60000);