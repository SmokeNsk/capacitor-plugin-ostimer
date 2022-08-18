import { WebPlugin } from '@capacitor/core';

import type { CallbackID, OsTimerCallback, OsTimerPlugin } from './definitions';

export class OsTimerWeb extends WebPlugin implements OsTimerPlugin {
  timerCnt = 0;
  tmr: string | number | NodeJS.Timeout | undefined;
  tick(callback: OsTimerCallback): Promise<CallbackID> {
    clearInterval(this.tmr);
    this.tmr = setInterval(() => callback(this.timerCnt++), 1000);
    return Promise.resolve(this.timerCnt.toString());
  }
  // async tick(options: OsTimerOptions): Promise<{ value: number }> {
  //   console.log('ECHO', options);
  //   return options;
  // }
}
