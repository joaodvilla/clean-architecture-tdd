module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest',
      auth: false
    },
    binary: {
      version: '5.0.3',
      skipMD5: true
    },
    autoStart: false
  }
}
