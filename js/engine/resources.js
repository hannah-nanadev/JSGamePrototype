// Create an Images object to hold the Image instances for the player and the enemy.
const Images = {
  player: new Image(), // The Image instance for the player.
  enemy: new Image(), // The Image instance for the enemy.
  meteor: new Image() // Image instance for a meteorite
};

// Create an AudioFiles object to hold the file paths of the audio resources.
const AudioFiles = {
  /*jump: './resources/audio/jump.mp3', // The file path of the jump sound.
  collect: './resources/audio/collect.mp3', // The file path of the collect sound.
  // Add more audio file paths as needed
  */
};

// Set the source of the player image.
Images.player.src = './resources/rocket.png';

// Set the source of the enemy image.
Images.enemy.src = './resources/alien.png';

// Export the Images and AudioFiles objects so they can be imported and used in other modules.
export { Images/*, AudioFiles */};
