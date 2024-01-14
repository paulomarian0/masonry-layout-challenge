import { photos } from '@/utils/data';
import type { NextApiRequest, NextApiResponse } from 'next'

interface IPhoto {
    _id: string;
    index: number;
    name: string;
    src: string;
}

export interface IPhotoResponseData {
    message: string;
    data: IPhoto[]
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IPhotoResponseData>
) {
    const data = photos;

    return res.status(200).json({ message: 'Success', data });
}