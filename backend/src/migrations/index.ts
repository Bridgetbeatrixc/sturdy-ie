import * as migration_20260330_160802 from './20260330_160802';

export const migrations = [
  {
    up: migration_20260330_160802.up,
    down: migration_20260330_160802.down,
    name: '20260330_160802'
  },
];
