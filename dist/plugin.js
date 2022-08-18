var capacitorOsTimer = (function (exports, core) {
    'use strict';

    const OsTimer = core.registerPlugin('OsTimer', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.OsTimerWeb()),
    });

    class OsTimerWeb extends core.WebPlugin {
        constructor() {
            super(...arguments);
            this.timerCnt = 0;
            // async tick(options: OsTimerOptions): Promise<{ value: number }> {
            //   console.log('ECHO', options);
            //   return options;
            // }
        }
        tick(callback) {
            clearInterval(this.tmr);
            this.tmr = setInterval(() => callback(this.timerCnt++), 1000);
            return Promise.resolve(this.timerCnt.toString());
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OsTimerWeb: OsTimerWeb
    });

    exports.OsTimer = OsTimer;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
