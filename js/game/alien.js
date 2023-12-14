// Enemy class
import GameObject from "../engine/gameobject.js";
import Renderer from "../engine/renderer.js";
import Physics from "../engine/physics.js";
import { Images } from "../engine/resources.js";

import Player from "./player.js";
import Shootable from "./shootable.js";

class Alien extends Shootable{

    constructor(x, y, target)
    {
        super(x, y, Images.enemy);
        this.target = target;        
    }

    update(deltaTime){
        let px = this.target.getX();
        let py = this.target.getY();
    }

}

export default Alien;