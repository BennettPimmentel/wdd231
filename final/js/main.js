import { getGames } from "./dataModule.js";

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("games-container");

    const games = await getGames();

    games.forEach(game => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p><strong>Genre:</strong> ${game.genre}</p>
            <p><strong>Rating:</strong> ⭐ ${game.rating}</p>
        `;

        container.appendChild(card);
    });
});
