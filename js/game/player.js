// Class for player ship
import GameObject from "../engine/gameobject.js";
import Renderer from "../engine/renderer.js";
import Physics from "../engine/physics.js";
import Input from "../engine/input.js";
import {Images, AudioFiles} from "../engine/resources.js";

import Alien from "./alien.js"

class Player extends GameObject
{
    //Constructor
    constructor(x, y)
    {
        super(x, y);
        this.renderer = new Renderer("white", 45, 75, Images.player);
        this.addComponent(this.renderer);
        this.addComponent(new Physics({ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 })); // Add physics
        this.addComponent(new Input());

        this.lives = 3;
        this.isInvulnerable = false;
    }

    //Update function - Runs every frame, does game logic
    update(deltaTime)
    {
        const physics = this.getComponent(Physics);
        const input = this.getComponent(Input);

        //Movement
        if(input.isKeyDown("ArrowRight"))
        {
            physics.velocity.x = 750;
        }
        else if(input.isKeyDown("ArrowLeft"))
        {
            physics.velocity.x = -750;
        }
        else if(input.isKeyDown("ArrowUp"))
        {
            physics.velocity.y = -750;
        }
        else if(input.isKeyDown("ArrowDown"))
        {
            physics.velocity.y = 750;
        }
        else
        {
            physics.velocity.x = 0;
            physics.velocity.y = 0;
        }

        //Enemy collisions - taken and adapted from Naoise's code
        const enemies = this.game.gameObjects.filter((obj) => obj instanceof Alien);
        for(const enemy of enemies) {
            if(physics.isColliding(enemy.getComponent(Physics)))
            {
                this.hitByEnemy();
            }
        }


        super.update(deltaTime);
    }

    hitByEnemy(){
        //Method to be ran when hit by an enemy - controls life loss and iframes
        if(!this.isInvulnerable){
            //Take away lifes and give iframes
            this.lives--;
            this.isInvulnerable = true;

            //Wait until end of iframes then make vulnerable
            setTimeout(() => {
                this.isInvulnerable = false;
            }, 2000);
        }
    }
    
}

export default Player;