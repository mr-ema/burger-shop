import { handler } from '@/lib/api/apiHandler';
import { NextApiRequest, NextApiResponse } from 'next';

const handleCase = {
  GET: async function(req: NextApiRequest, res: NextApiResponse) {
    const bypass = req.cookies['bypass'];
    if (!bypass) throw new Error("Can't get bypass")

    res.status(200).json('bypassed');
  },

  POST: async function(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader("set-cookie", `bypass=GODMODE; path=/; samesite=lax; httponly;`);

    res.status(200).json('bypassed');
  }
}

export default handler(handleCase);