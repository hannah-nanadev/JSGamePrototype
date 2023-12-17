//Class for building game area

// Necessary imports
import Game from "../engine/game.js";
import Player from "./player.js";
import Alien from "./alien.js";

class Scene extends Game
{
    constructor(canvasId)
    {
        //Initialise game variables
        super(canvasId);
        this.canSpawn = true;
        this.score = -1;
        this.canAddScore = true;
        this.announcedScore = false;

        //Create GameObjects
        const player = new Player(this.canvas.width / 2 - 25, this.canvas.height / 2 - 25);
        this.player = player;

        this.addGameObject(player);
        
        //Set camera target to player
        this.camera.target = player;
    }

    gameLoop(currentFrameTime){
        super.gameLoop(currentFrameTime);
        
        //Checks if player is dead before doing anything else
        if(!this.player.areTheyDead())
        {
            if(this.canSpawn) //Enemy spawner
            {
                //Get and randomize necessary variables
                const pX = this.player.getX();
                const pY = this.player.getY();

                let thing = 200;

                const factor = Math.random(); //Randomizes direction of spawning a little (poorly)
                if(factor<0.5)
                {
                    thing = thing*-1;
                }

                const aX = (Math.random() * ((this.canvas.width)+pX))+thing;
                const aY = (Math.random() * ((this.canvas.height)+pY))+thing;

                const aspeed = Math.random()*3;

                //Add randomized alien to game
                this.addGameObject(new Alien(aX, aY, aspeed, this.player));

                //Temporarily disable spawning
                this.canSpawn = false;
                setTimeout(() => {
                    this.canSpawn = true;
                }, 500);
            }

            if(this.canAddScore)
            {
                //Adds score every 0.25 secs
                this.score++;
                this.canAddScore = false;

                setTimeout(() => {
                    this.canAddScore = true;
                }, 250);
            }
        }
        else{
            if(!this.announcedScore)
            {
                //Announces score in console upon death
                console.log("Game over! " + this.score + " points");
                this.announcedScore = true;
            }
        }

    }
}

export default Scene;