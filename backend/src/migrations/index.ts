import * as migration_20260324_051040 from './20260324_051040';

export const migrations = [
  {
    up: migration_20260324_051040.up,
    down: migration_20260324_051040.down,
    name: '20260324_051040'
  },
];
