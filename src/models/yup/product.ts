import { IProduct } from '@/types/yup';
import * as yup from 'yup';

const ProductSchema: yup.SchemaOf<IProduct> = yup.object({

  name: yup.string().min(3).max(20)
    .transform(function(value) {
      return this.isType(value) && value !== null ? value.toLowerCase() : value;
    }).required(),

  stock: yup.number()
    .transform(value => (isNaN(value) ? undefined : value))
      .min(-1).max(5000).nullable(),

  price: yup.number()
    .transform(value => (isNaN(value) ? undefined : value))
      .positive().min(100).max(100000).required(),

  description: yup.string().min(6).max(200)
    .transform(function (value) {
      return this.isType(value) && value !== null ? value.toLowerCase() : value;
    }).required(),

})

export default ProductSchema;