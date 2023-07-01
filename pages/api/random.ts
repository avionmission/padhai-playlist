import { NextApiRequest, NextApiResponse } from "next";

import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != 'GET') {
        return res.status(405).end();
    }

    try {
        await serverAuth(req);

        const courseCount = await prismadb.course.count();
        const randomIndex = Math.floor(Math.random() * courseCount);

        const randomCourse = await prismadb.course.findMany({
            take: 1,
            skip: randomIndex
        });

        return res.status(200).json(randomCourse[0])

    } catch (error) {
        console.log(error)
        return res.status(400).end()
    }
}