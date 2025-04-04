const darkModeButton = document.getElementById("darkModeButton");
let isDarkMode = false;

darkModeButton.addEventListener("click", () => {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        darkModeButton.textContent = "Light Mode";
    } else {
        document.body.classList.remove("dark-mode");
        darkModeButton.textContent = "Dark Mode";
    }
});

async function fetchCountries() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries = await response.json();

        const container = document.getElementById("countries-container");
        container.innerHTML = "";

        countries.forEach(country => {
            const card = document.createElement("div");
            card.className = "country-card";
            card.innerHTML = `
                <img src="${country.flags.png}" alt="${country.name.common} bayrog‘i">
                <h3>${country.name.common}</h3>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
    }
}

fetchCountries();