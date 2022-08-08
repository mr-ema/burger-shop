import type { NextApiRequest, NextApiResponse } from 'next'

// Methods
type ResponseFunc = (req: NextApiRequest, res: NextApiResponse) => Promise<void | Error>;

export interface ResponseFuncs {
  GET?: ResponseFunc,
  POST?: ResponseFunc,
  PUT?: ResponseFunc,
  DELETE?: ResponseFunc
}

