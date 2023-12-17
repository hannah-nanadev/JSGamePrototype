//Class for building game area

// Necessary imports
import Game from "../engine/game.js";
import Player from "./player.js";
import Alien from "./alien.js";

class Scene extends Game
{
    constructor(canvasId)
    {
        super(canvasId);
        this.canSpawn = true;

        //Create GameObjects
        const player = new Player(this.canvas.width / 2 - 25, this.canvas.height / 2 - 25);

        this.addGameObject(player);
        
        //Set camera target to player
        this.camera.target = player;
    }

    gameLoop(currentFrameTime){
        super.gameLoop(currentFrameTime);
        const player = this.getGameObject(0);
        
        if(this.canSpawn&&(!player.areTheyDead()))
        {

            //Get and randomize necessary variables
            const pX = player.getX();
            const pY = player.getY();

            const aX = (Math.random() * 200) + ((this.canvas.width/2)+pX);
            const aY = (Math.random() * 200) + ((this.canvas.height/2)+pY);

            const aspeed = Math.random()*3;

            this.addGameObject(new Alien(aX, aY, aspeed, player));

            //Temporarily disable spawning
            this.canSpawn = false;
            setTimeout(() => {
                this.canSpawn = true;
            }, 1000);
        }
    }
}

export default Scene;