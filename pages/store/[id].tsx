import React from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Params } from 'next/dist/server/router';

type Data = {
    name: string,
    location: string,
    operation: string,
    phonenumber: string,
    url: []
}

type Id = {
    storeId: string
}

const StoreDetailPage = (Props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const storeData: Data = Props.resJson;
    return (
        <div>
            <p>{storeData.name}</p>
            <p>{storeData.location}</p>
            <p>{storeData.operation}</p>
            <p>{storeData.phonenumber}</p>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/store/getlist");
    const resJson: Id[] = await res.json();

    const paths = resJson.map((item) => ({
        params: { id: item.storeId },
    }));
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
    const { id } = params;
    const res = await fetch(`http://localhost:3000/api/store/${id}`);
    const resJson = await res.json();

    if (!resJson) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            resJson
        }
    }
}

export default StoreDetailPage;