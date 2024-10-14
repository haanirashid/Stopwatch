console.log("Testing");

var [hours, minutes, seconds, msec] = [0, 0, 0, 0];
var interval = null;
var statuss = "stop";    // 0 === stops 1 === play

var hour_target = document.getElementById("hour_target");
var min_target = document.getElementById("min_target");
var sec_target = document.getElementById("sec_target");
var ms_target = document.getElementById("ms_target");

console.log("starting Value" , statuss);

const start = () => {
    if (statuss == "stop" || statuss == "pause") {
        statuss = "start";
        interval = setInterval(stopWatchFunc, 10);
        console.log("Start Function",statuss);
    }

};

const pause = () => {
    if (statuss == "start") {
        statuss = "pause";
        interval && clearInterval(interval);
        console.log("Pause Function",statuss);

    };
};

const reset = () => {
    if (statuss == "start" || statuss == "pause") {
        statuss = "stop";
        interval && clearInterval(interval);
        [hours, minutes, seconds, msec] = [0, 0, 0, 0];
        display(hours, minutes, seconds, msec);
        console.log("Stop Function",statuss);

    };
};

const stopWatchFunc = () => {
    msec++;
    if (msec >= 100) {
        msec = 0;
        seconds++
    };
    if (seconds >= 60) {
        seconds = 0;
        minutes++
    };
    if (minutes >= 60) {
        minutes = 0;
        hours++
    };

    display(hours, minutes, seconds, msec);
};

const display = (h, m, s, ms) => {
    hour_target.innerText = h;
    min_target.innerText = m;
    sec_target.innerText = s;
    ms_target.innerText = ms;
}