module.exports = {
  mongodbMemoryServerOptions: {
    autoStart: false,
    binary: {
      skipMD5: true,
      version: '4.0.3',
    },
    instance: {
      dbName: 'jest',
    },
  },
};
