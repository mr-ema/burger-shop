import { ICustomer } from '@/types/yup';
import * as yup from 'yup';

const CustomerSchema: yup.SchemaOf<ICustomer> = yup.object({

  firstName: yup.string().min(3).max(20)
  .transform(function(value) {
    return this.isType(value) && value !== null ? value.toLowerCase() : value;
  }).required(),

  lastName: yup.string().min(3).max(20)
  .transform(function(value) {
    return this.isType(value) && value !== null ? value.toLowerCase() : value;
  }).required(),

  email: yup.string().email().required(),

  direction: yup.string().required(),

  step: yup.number().default(() => 1),

})

export default CustomerSchema;