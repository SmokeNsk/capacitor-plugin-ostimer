import { WebPlugin } from '@capacitor/core';

import type { OsTimerPlugin } from './definitions';

export class OsTimerWeb extends WebPlugin implements OsTimerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
