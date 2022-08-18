import {WebPlugin} from '@capacitor/core';

import type {   OsTimerPlugin} from './definitions';
import {EVENT_NAME} from "./definitions";

export class OsTimerWeb extends WebPlugin implements OsTimerPlugin {
  timerCnt = 0;
  tmr: string | number | NodeJS.Timeout | undefined;

  startd=(period:number)=>this.tmr = setInterval(() => this.notifyListeners(EVENT_NAME, {tick: this.timerCnt++}), period);

  start(options:{delay:1500, period:1500}): void {
    clearInterval(this.tmr);
    if (options.delay) {
      //setTimeout(()=>this.startd(period),delay);
      void 0;
    }
    this.startd(options.period);
    //return Promise.resolve(this.timerCnt.toString());
  }

  stop(): void {
    clearInterval(this.tmr);
  }
  // async tick(options: OsTimerOptions): Promise<{ value: number }> {
  //   console.log('ECHO', options);
  //   return options;
  // }
}
