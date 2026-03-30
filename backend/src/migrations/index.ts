import * as migration_20260330_130402 from './20260330_130402';

export const migrations = [
  {
    up: migration_20260330_130402.up,
    down: migration_20260330_130402.down,
    name: '20260330_130402'
  },
];
