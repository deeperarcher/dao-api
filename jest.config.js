module.exports = {
  preset: '@shelf/jest-mongodb',
  setupFilesAfterEnv: ['./test/setup.js'],
  watchPathIgnorePatterns: ['globalConfig'],
};
