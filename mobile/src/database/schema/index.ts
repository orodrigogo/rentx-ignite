import { appSchema } from '@nozbe/watermelondb';
import { carSchema } from './carSchema';
import { userSchema } from './userSchema';


const schemas = appSchema({
  version: 13,
  tables: [
    userSchema,
    carSchema
  ]
});

export { schemas };
