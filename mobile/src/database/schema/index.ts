import { appSchema } from '@nozbe/watermelondb';

import { userSchema } from './userSchema';
import { carSchema } from './carSchema';

const schemas = appSchema({
  version: 12,
  tables: [
    userSchema,
    carSchema
  ]
});

export { schemas }