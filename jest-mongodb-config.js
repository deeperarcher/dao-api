module.exports = {
  mongodbMemoryServerOptions: {
    autoStart: false,
    binary: {
      skipMD5: true,
      version: 'latest',
    },
    instance: {
      dbName: 'jest',
    },
  },
};
