module.exports = {
  preset: '@shelf/jest-mongodb',
  setupFilesAfterEnv: ['./server/test/setup.js'],
  watchPathIgnorePatterns: ['globalConfig'],
};
