let game;

document.addEventListener("DOMContentLoaded", async () => {
    const { Game } = await import("./game/game.js");

    game = new Game();
    game.initialize();
    game.render();
});