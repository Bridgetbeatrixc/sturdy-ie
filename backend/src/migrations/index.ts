import * as migration_20260308_122040 from './20260308_122040';
import * as migration_20260321_171152 from './20260321_171152';
import * as migration_20260321_172100 from './20260321_172100';
import * as migration_20260321_172627 from './20260321_172627';
import * as migration_20260321_173520 from './20260321_173520';

export const migrations = [
  {
    up: migration_20260308_122040.up,
    down: migration_20260308_122040.down,
    name: '20260308_122040',
  },
  {
    up: migration_20260321_171152.up,
    down: migration_20260321_171152.down,
    name: '20260321_171152',
  },
  {
    up: migration_20260321_172100.up,
    down: migration_20260321_172100.down,
    name: '20260321_172100',
  },
  {
    up: migration_20260321_172627.up,
    down: migration_20260321_172627.down,
    name: '20260321_172627',
  },
  {
    up: migration_20260321_173520.up,
    down: migration_20260321_173520.down,
    name: '20260321_173520'
  },
];
