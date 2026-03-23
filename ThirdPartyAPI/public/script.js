async function searchGame() {
    const appId = document.getElementById('appIdInput').value;
    const card = document.getElementById('game-card');

    if (!appId) return alert("Please enter an AppID");

    try {
        const response = await fetch(`/api/game/${appId}`);
        const data = await response.json();

        if (data.error) {
            alert("Game not found. Try AppID 440 or 730.");
            card.style.display = 'none';
            return;
        }

        // Update UI with Data
        document.getElementById('title').innerText = data.name;
        document.getElementById('banner').src = data.header_image;
        document.getElementById('description').innerHTML = data.short_description;

        // Handle Free vs Paid games
        const priceText = data.is_free ? "Free to Play" : (data.price_overview ? data.price_overview.final_formatted : "N/A");
        document.getElementById('price').innerText = priceText;

        card.style.display = 'block';

    } catch (error) {
        console.error("Fetch error:", error);
        alert("Could not connect to the server.");
    }
}