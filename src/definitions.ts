// <reference types="@capacitor/cli" />
// @ts-ignore

declare module '@capacitor/cli' {
    export interface PluginsConfig {
        OsTimerPlugin?: {
            /**
             * Delay before start Timer.
             *
             * @since 1.0.0
             * @default 2000
             * @example "2000"
             */
            delay?: number;

            /**
             * Period of Timer ticks
             *
             * @since 1.0.0
             * @default 1500
             * @example "2000"
             */
            period?: number;
        };
    }
}


export type CallbackID = string;

export const EVENT_NAME = "OsTimerTick";

export interface OsTimerOptions {
    delay?:number;
    period?:number;
}

export interface OsTimerEventResult{
    tick:number
}
export interface OsTimerPlugin {

    start(options?:OsTimerOptions): void;
    stop():void;
}

