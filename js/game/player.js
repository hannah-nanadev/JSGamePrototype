// Class for player ship
import GameObject from "../engine/gameobject.js";
import Renderer from "../engine/renderer.js";
import Physics from "../engine/physics.js";
import Input from "../engine/input.js";
import {Images} from "../engine/resources.js";

class Player extends GameObject
{
    //Constructor
    constructor(x, y)
    {
        super(x, y);
        this.Renderer = new Renderer("white", 45, 75, Images.player);
        this.addComponent(this.Renderer);
        this.addComponent(new Physics({ x: 0, y: 0 }, { x: 0, y: 0 })); // Add physics
        this.addComponent(new Input());
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


        super.update(deltaTime);
    }
    
}

export default Player;