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
    const { title, image } = req.body;

            if (!title || !image) {
                res.status(402).json({ messege: "Please Fill All The Feild" });
            } else {
                await connectToDb()

                const findpreviousdata = await prisma.skilldata.findFirst({ where: { title: title } })

                if (findpreviousdata) {
                    res.status(401).json({ messege: "Feild Already Exist" });
                    await prisma.$disconnect()
                } else {
                    const skilldatacreate = await prisma.skilldata.create({
                        data: {
                            title, image
                        }
                    })

                    if (skilldatacreate) {
                        res.status(200).json({ messege: "Created Successfully" });
                    }
                }
            }
  }else{
   res.status(201).json({ messege: "You Are Bad" });
  }
}
