import { WebPlugin } from '@capacitor/core';
export class OsTimerWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map