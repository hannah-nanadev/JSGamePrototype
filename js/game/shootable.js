//  Class for enemies or otherwise shootable obstacles
import GameObject from "../engine/gameobject.js";
import Renderer from "../engine/renderer.js";
import Physics from "../engine/physics.js";
import {Images} from "../engine/resources.js";

import Player from "./player.js";

class Shootable extends GameObject {

    constructor(x, y, imageId)
    {
        super(x, y);

        this.addComponent(new Renderer('white', 50, 50, imageId));
        this.addComponent(new Physics({x: 50, y: 50}, {x: 0, y: 0}));

        this.movementDistance = 0;
        this.movementLimit = 100;
        this.movingRight = true;
        this.movingUp = true;
        this.movingHorizontal = true;
    }

    update(deltaTime)
    {
        const physics = this.getComponent(Physics);

        //Checks for directions
        if(this.movingHorizontal)
        { //Check if moving horizontally
            if(this.movingRight)
            { //Move right if not at limit when initially moving right
                if(this.movementDistance < this.movementLimit)
                {
                    physics.velocity.x = 100;
                    this.movementDistance += Math.abs(physics.velocity.x) * deltaTime;
                }
                else
                { //Otherwise, turn left
                    this.movingRight = false;
                    this.movementDistance = 0;
                }
            }
            else
            { //Move left if not at limit when initially moving left
                if(this.movementDistance < this.movementLimit)
                {
                    physics.velocity.x = -100;
                    this.movementDistance += Math.abs(physics.velocity.x) * deltaTime;
                }
                else
                { //Otherwise, turn right
                    this.movingRight = true;
                    this.movementDistance = 0;
                }
            }
        }
        else
        { //If moving vertically...
            if(this.movingUp)
            { //Move up if not at limit when initially moving up
                if(this.movementDistance < this.movementLimit)
                {
                    physics.velocity.y = 100;
                    this.movementDistance += Math.abs(physics.velocity.y) * deltaTime;
                }
                else
                { //Otherwise, turn downwards
                    this.movingUp = false;
                    this.movementDistance = 0;
                }
            }
            else
            { //Move down if not at limit when initially moving down
                if(this.movementDistance < this.movementLimit)
                {
                    physics.velocity.y = -100;
                    this.movementDistance += Math.abs(physics.velocity.y) * deltaTime;
                }
                else
                { //Otherwise, turn upwards
                    this.movingUp = true;
                    this.movementDistance = 0;
                }
            }
        }
    

        
    }

}

export default Shootable;