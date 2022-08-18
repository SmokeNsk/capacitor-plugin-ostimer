declare module '@capacitor/cli' {
    interface PluginsConfig {
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
export declare type CallbackID = string;
export declare const EVENT_NAME = "OsTimerTick";
export interface OsTimerOptions {
    delay?: number;
    period?: number;
}
export interface OsTimerPlugin {
    start(options?: OsTimerOptions): void;
    stop(): void;
}
