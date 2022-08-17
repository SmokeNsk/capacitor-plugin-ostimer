export interface OsTimerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
