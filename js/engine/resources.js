// Create an Images object to hold the Image instances for the player and the enemy.
const Images = {
  player: new Image(), // The Image instance for the player.
  enemy: new Image(), // The Image instance for the enemy.
  meteor: new Image() // Image instance for a meteorite
};

// Create an AudioFiles object to hold the file paths of the audio resources.
const AudioFiles = {
 hurt: './resources/sfx/hurt.wav',
 explode: './resources/sfx/explode.wav'
};

// Set the source of the player image.
Images.player.src = './resources/images/rocket.png';

// Set the source of the enemy image.
Images.enemy.src = './resources/images/alien.png';

// Export the Images and AudioFiles objects so they can be imported and used in other modules.
export { Images, AudioFiles };
