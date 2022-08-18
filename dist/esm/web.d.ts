/// <reference types="node" />
import { WebPlugin } from '@capacitor/core';
import type { OsTimerPlugin } from './definitions';
export declare class OsTimerWeb extends WebPlugin implements OsTimerPlugin {
    timerCnt: number;
    tmr: string | number | NodeJS.Timeout | undefined;
    startd: (period: number) => NodeJS.Timeout;
    start(options: {
        delay: 1500;
        period: 1500;
    }): void;
    stop(): void;
}
