import type { NextApiRequest, NextApiResponse } from 'next';
import { ResponseFuncs } from '@/types/api';

export function handler(handleCase: ResponseFuncs
  ): (req: NextApiRequest, res: NextApiResponse) => Promise<void>
{
  return async (req: NextApiRequest, res: NextApiResponse) => { 
    // Capture request method, we type it as a key of ResponseFunc to reduce typing later
    const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

    //function for catch errors
    const catcher = (error: Error) => res.status(400).json(error.message);

    // Check if there is a response for the particular method.
    // if so invoke it, otherwise response with an error.
    const response = handleCase[method];
    if (response) {
      response(req, res)
        .catch((err: Error) => catcher(err));
    }else {
      res.status(400).json('No Response for This Request');
    }
  }
}
