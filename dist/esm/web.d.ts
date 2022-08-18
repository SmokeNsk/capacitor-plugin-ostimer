/// <reference types="node" />
import { WebPlugin } from '@capacitor/core';
import type { OsTimerPlugin } from './definitions';
export declare class OsTimerWeb extends WebPlugin implements OsTimerPlugin {
    timerCnt: number;
    tmr: string | number | NodeJS.Timeout | undefined;
    startd: (period: number) => NodeJS.Timeout;
    start(delay?: number, period?: number): void;
    stop(): void;
}
