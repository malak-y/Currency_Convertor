function convertCurrency() {
    var amount = document.getElementById("amount").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;

    // Fetch exchange rate data from an API (e.g., Fixer.io, Open Exchange Rates)
    // Replace 'YOUR_API_KEY' with your actual API key or use a free API
    var apiKey = 'YOUR_API_KEY';
    var url = 'https://api.exchangerate-api.com/v4/latest/' + from;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var rate = data.rates[to];
            var convertedAmount = amount * rate;
            document.getElementById("result").innerHTML = amount + ' ' + from + ' = ' + convertedAmount.toFixed(2) + ' ' + to;
        })
        .catch(error => console.error('Error:', error));
}
