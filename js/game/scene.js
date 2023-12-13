//Class for building game area

// Necessary imports
import Game from "../engine/game.js";
import Player from "./player.js";

class Scene extends Game
{
    constructor(canvasId)
    {
        super(canvasId);

        //Create GameObjects
        const player = new Player(this.canvas.width / 2 - 25, this.canvas.height / 2 - 25);
        this.addGameObject(player);
    }
}

export default Scene;