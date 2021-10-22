import React from 'react';
import { GetServerSideProps, GetStaticPaths, InferGetServerSidePropsType } from 'next';
import { Params } from 'next/dist/server/router';
import styled from 'styled-components';

type Data = {
    title: string,
    content: string,
    datetime: string
}

type Id = {
    id: string
}

const NoticeDetailPage = (Props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const noticeData: Data = Props.resJson;
    return (
        <div>
            <p>{noticeData.title}</p>
            <p>{noticeData.content}</p>
            <p>{noticeData.datetime}</p>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }: Params) => {
    const { id } = params;
    const res = await fetch(`http://localhost:3000/api/notice/${id}`);
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



export default NoticeDetailPage;