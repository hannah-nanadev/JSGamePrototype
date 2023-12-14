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
    }

}

export default Shootable;