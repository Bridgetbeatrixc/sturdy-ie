import * as migration_20260321_185512 from './20260321_185512';

export const migrations = [
  {
    up: migration_20260321_185512.up,
    down: migration_20260321_185512.down,
    name: '20260321_185512'
  },
];
