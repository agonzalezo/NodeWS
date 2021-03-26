// Vars and const
const express = require('express');
const morgan = require('morgan');
const port = process.argv[2] || 3000;
const app = express();
const Logger = require('./mylogger')
const mylogger = new Logger();
const path = require('path');

// Configs
app.use(morgan('short'));
app.use("/",express.static(path.join(__dirname,"resource")));

// Start server
app.listen(port, "0.0.0.0", () => {
mylogger.writeInfo(`Server started on port ${port},
This server is created for test your frontend applications
Put on the "resource" directory your statics files and open a browser on http://localhost:${port}`)
})