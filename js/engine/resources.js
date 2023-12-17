//Format from Naoise's engine
// Create an Images object to hold the Image instances for the player and the enemy.
const Images = {
  player: new Image(), // The Image instance for the player.
  enemy: new Image(), // The Image instance for the enemy.
  nothing: new Image() // Image instance for nothingness
};

// Create an AudioFiles object to hold the file paths of the audio resources.
const AudioFiles = {
  hurt: new Audio(),
  explode: new Audio()
}

// Setting image/audio sources
Images.player.src = './resources/images/rocket.png';
Images.enemy.src = './resources/images/alien.png';
Images.nothing.src = './resources/images/nothing.png';

AudioFiles.hurt.src = './resources/sfx/hurt.wav';
AudioFiles.explode.src = './resources/sfx/explode.wav';

// Export the Images and AudioFiles objects so they can be imported and used in other modules.
export { Images, AudioFiles };
