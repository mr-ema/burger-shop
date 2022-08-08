import { handler } from '@/lib/api/apiHandler';
import type { NextApiRequest, NextApiResponse } from 'next';

const handleCase = {
  GET: async (req: NextApiRequest, res: NextApiResponse) => {
    // Logic
  }
}

export default handler(handleCase);