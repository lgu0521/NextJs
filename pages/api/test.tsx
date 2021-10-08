import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    image: string,
    title: string,
    description: string
}

const MeauList = async (req: NextApiRequest, res: NextApiResponse<Array<Data>>) => {
    res.status(200).json([{
        title: '키토김밥',
        image: 'https://firebasestorage.googleapis.com/v0/b/beeokitchen-env.appspot.com/o/meau1.png?alt=media&token=742645d6-d01a-4cac-8f10-d3e70e817f0c',
        description: '계란지단, 당근, 양배추, 우엉, 비오키친 대체당 특제소스'
    },
    {
        title: '참치김밥',
        image: 'https://firebasestorage.googleapis.com/v0/b/beeokitchen-env.appspot.com/o/meau1.png?alt=media&token=742645d6-d01a-4cac-8f10-d3e70e817f0c',
        description: '계란지단, 당근, 양배추, 우엉, 비오키친 대체당 특제소스'
    }])
}

export default MeauList;
