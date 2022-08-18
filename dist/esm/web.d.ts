/// <reference types="node" />
import { WebPlugin } from '@capacitor/core';
import type { CallbackID, OsTimerCallback, OsTimerPlugin } from './definitions';
export declare class OsTimerWeb extends WebPlugin implements OsTimerPlugin {
    timerCnt: number;
    tmr: string | number | NodeJS.Timeout | undefined;
    tick(callback: OsTimerCallback): Promise<CallbackID>;
}
