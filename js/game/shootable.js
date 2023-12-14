//  Superclass for enemies or otherwise shootable obstacles
import GameObject from "../engine/gameobject.js";
import Renderer from "../engine/renderer.js";
import Physics from "../engine/physics.js";

import Player from "./player.js";

class Shootable extends GameObject {

    constructor(x, y, imageId)
    {
        super(x, y);

        this.addComponent(new Renderer('white', 50, 50, imageId));
        this.addComponent(new Physics({x: 50, y: 50}, {x: 0, y: 0}, {x: 0, y: 0}));

    }

}

export default Shootable;