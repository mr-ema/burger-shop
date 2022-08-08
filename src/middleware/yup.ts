
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { ValidationError } from 'yup';
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';

export function validate(
  squema: OptionalObjectSchema<ObjectShape>,
  handler: NextApiHandler
) 
{
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (['POST', 'PUT'].includes(req.method as string) ) {
      try {
        req.body = await squema.camelCase().validate(req.body, { abortEarly: false });
      }
      catch(error) {
        if (error instanceof ValidationError) {
          return res.status(400).json(error.errors);
        }
      }
    }

    await handler(req, res);
  }
}