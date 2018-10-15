const math = require('mathjs');

exports.convertToTime = function(milliseconds) {
    var toSeconds = math.floor(milliseconds / 1000);
    var seconds = toSeconds % 60;
    toSeconds = toSeconds - seconds;
    var toMinutes = toSeconds / 60;
    var minutes = toMinutes % 60;
    toMinutes = toMinutes - minutes;
    var hours = toMinutes / 60;
    return padTime(hours.toString()) + ':' + padTime(minutes.toString()) + ':' + padTime(seconds.toString());
}

// This padding will always be of length 2
function padTime(time) {
    if (time.length === 1) {
        return '0' + time;
    }
    return time;
}