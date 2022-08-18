import {registerPlugin} from '@capacitor/core';

import type {OsTimerPlugin} from './definitions';

const OsTimer = registerPlugin<OsTimerPlugin>('OsTimer', {
  web: () => import('./web').then(m => new m.OsTimerWeb()),
});

export * from './definitions';
export { OsTimer };
