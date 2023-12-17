// Enemy class
import GameObject from "../engine/gameobject.js";
import Renderer from "../engine/renderer.js";
import Physics from "../engine/physics.js";
import { Images } from "../engine/resources.js";

import Player from "./player.js";

class Alien extends GameObject{

    constructor(x, y, speed, target)
    {
        super(x, y);
        this.speed = speed
        this.target = target;
        
        this.addComponent(new Physics({x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}));
        this.addComponent(new Renderer('white', 40, 45, Images.enemy));
    }

    update(deltaTime){
        let px = this.target.getX();
        let py = this.target.getY();

        let dx = px-this.x;
        let dy = py-this.y;

        const physics = this.getComponent(Physics);

        let dis = Math.sqrt(dx*dx+dy*dy);

        this.x += dx/dis*this.speed;
        this.y += dy/dis*this.speed;

        super.update(deltaTime);
    }

}

export default Alien;