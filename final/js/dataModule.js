export async function getGames() {
    const response = await fetch("data/games.json");
    return await response.json();
}
