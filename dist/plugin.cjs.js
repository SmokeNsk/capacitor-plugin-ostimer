'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

// <reference types="@capacitor/cli" />
// @ts-ignore
const EVENT_NAME = "OsTimerTick";

const OsTimer = core.registerPlugin('OsTimer', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.OsTimerWeb()),
});

class OsTimerWeb extends core.WebPlugin {
    constructor() {
        super(...arguments);
        this.timerCnt = 0;
        this.startd = (period) => this.tmr = setInterval(() => this.notifyListeners(EVENT_NAME, { tick: this.timerCnt++ }), period);
        // async tick(options: OsTimerOptions): Promise<{ value: number }> {
        //   console.log('ECHO', options);
        //   return options;
        // }
    }
    start(delay = 1500, period = 1500) {
        clearInterval(this.tmr);
        this.startd(period);
        //return Promise.resolve(this.timerCnt.toString());
    }
    stop() {
        clearInterval(this.tmr);
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OsTimerWeb: OsTimerWeb
});

exports.EVENT_NAME = EVENT_NAME;
exports.OsTimer = OsTimer;
//# sourceMappingURL=plugin.cjs.js.map
