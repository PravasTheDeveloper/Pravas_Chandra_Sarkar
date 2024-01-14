// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  messege: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST"){
    if (!title || !image) {
      res.status(402).json({ messege: "Please Fill All The Feild" });
    } else {
       res.status(200).json({ messege: "Good Man" });
    }
  }else{
   res.status(201).json({ messege: "You Are Bad" });
  }
}
