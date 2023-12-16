//Class for building game area

// Necessary imports
import Game from "../engine/game.js";
import Player from "./player.js";
import Alien from "./alien.js";
import {Images} from "../engine/resources.js";

class Scene extends Game
{
    constructor(canvasId)
    {
        super(canvasId);

        //Create GameObjects
        const player = new Player(this.canvas.width / 2 - 25, this.canvas.height / 2 - 25);
        const alien = new Alien(this.canvas.width / 2 - 100, this.canvas.height / 2 - 100, player, 1, Images.enemy);

        this.addGameObject(player);
        this.addGameObject(alien);

        //Set camera target to player
        this.camera.target = player;
    }
}

export default Scene;