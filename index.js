require('./style.css');
var template = require("jade!./app/file.jade")
require(['./app/signal.js'], function (signal) {
    document.body.appendChild(signal);
});
document.body.appendChild(template);