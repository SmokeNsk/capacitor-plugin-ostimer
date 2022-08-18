import { WebPlugin } from '@capacitor/core';
import { EVENT_NAME } from "./definitions";
export class OsTimerWeb extends WebPlugin {
    constructor() {
        super(...arguments);
        this.timerCnt = 0;
        this.startd = (period) => this.tmr = setInterval(() => this.notifyListeners(EVENT_NAME, { tick: this.timerCnt++ }), period);
        // async tick(options: OsTimerOptions): Promise<{ value: number }> {
        //   console.log('ECHO', options);
        //   return options;
        // }
    }
    start(options) {
        clearInterval(this.tmr);
        if (options.delay) {
            //setTimeout(()=>this.startd(period),delay);
            void 0;
        }
        this.startd(options.period);
        //return Promise.resolve(this.timerCnt.toString());
    }
    stop() {
        clearInterval(this.tmr);
    }
}
//# sourceMappingURL=web.js.map