const colors = require('colors');
const moment = require('moment');

colors.setTheme({
  info: 'cyan',
  help: 'magenta',
  warn: 'yellow',
  success: 'green',
  error: 'red'
});

class Logger {

  constructor() {
    this.format = 'DD/MM/YYYY hh:mm:ss';
  }

  writeError(message) {
    console.log(
      'ERROR:   '.error +
      moment().format(this.format) +
      '    ' +
      message.error
    );
  }

  writeInfo(message) {
    console.log(
      'INFO:    '.info +
      moment().format(this.format) +
      '    ' +
      message.info
    );
  }

  writeSuccess(message) {
    console.log(
      'SUCCESS: '.success +
      moment().format(this.format) +
      '    ' +
      message.success
    );
  }
}

// mylogger.writeSucess("hola todo bien");

module.exports = Logger;