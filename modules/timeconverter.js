const math = require('mathjs');

exports.convertToTime = function(milliseconds) {
    var toSeconds = math.floor(milliseconds / 1000);
    var seconds = milliseconds % 60;
    toSeconds = toSeconds - seconds;
    var toMinutes = toSeconds / 60;
    var minutes = toMinutes % 60;
    toMinutes = toMinutes - minutes;
    var hours = toMinutes / 60;
    return hours.toString() + ':' + minutes.toString() + ':' + seconds.toString();
}