// <reference types="@capacitor/cli" />
// @ts-ignore

declare module '@capacitor/cli' {
    export interface PluginsConfig {
        OsTimerPlugin?: {
            /**
             * Override the cool theme style if your app doesn't support light/dark theme changes.
             *
             * @since 1.0.0
             * @example "light"
             */
            delay?: number;

            /**
             * Color of the cool icon in hex format, #RRGGBB or #RRGGBBAA.
             *
             * @since 1.0.0
             * @default #ffffff
             * @example "#FF9900"
             */
            period?: number;
        };
    }
}


export type CallbackID = string;

export type OsTimerCallback = (tick: number | null, err?: any) => void;


export interface OsTimerPlugin {

    tick(callback: OsTimerCallback): Promise<CallbackID>;
}

