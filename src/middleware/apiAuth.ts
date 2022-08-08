import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export function apiAuth(handler: NextApiHandler) 
{
  return async function (req: NextApiRequest, res: NextApiResponse) {
    const token = await getToken({ req, secret });
    const bypass = req.cookies['bypass'];
    
    if (!token && !bypass) return res.status(401).json('Access Denied');

    await handler(req, res);
  }
}