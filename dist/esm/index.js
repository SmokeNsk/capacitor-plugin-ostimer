import { registerPlugin } from '@capacitor/core';
const OsTimer = registerPlugin('OsTimer', {
    web: () => import('./web').then(m => new m.OsTimerWeb()),
});
export * from './definitions';
export { OsTimer };
//# sourceMappingURL=index.js.map