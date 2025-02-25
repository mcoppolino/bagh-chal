// app.js - Main entry point

document.addEventListener("DOMContentLoaded", async function () {
    const app = document.getElementById("app");
    if (app) {
        const { Game } = await import("./game/game.js");
        const game = new Game();
        game.render(app);
    }
});
