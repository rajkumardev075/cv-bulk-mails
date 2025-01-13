class Logger {
  static log(message) {
    console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
  }

  static error(message, error) {
    console.error(`[ERROR] ${new Date().toISOString()}: ${message}`, error);
  }
}

module.exports = Logger;
