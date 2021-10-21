import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import styled from 'styled-components';
import Link from 'next/link';
import PageNationView from '../../components/PageNationView';
import AccordionListView from '../../components/AccordionListView';
import PageMainTitle from '../../components/PageMainTitle';
import { useState } from "react";

type PropsData = {
    id: string,
    title: string,
    content: string,
    datetime: string
}

const Brand = (Props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const noticeList: PropsData[] = Props.noticeList;
    const [isFaq, setIsFaq] = useState(true);
    const [isNotice, setIsNotice] = useState(false);
    console.log(noticeList);
    return (
        <Container>
            <PageMainTitle title="게시판" description="비오키친과 함께 하실 점주님을 모집합니다. 세계적인 브랜드의 성공 철학을 공유합니다." />
            <button onClick={() => { setIsFaq(true); setIsNotice(false) }}>FAQ</button>
            <button onClick={() => { setIsFaq(false); setIsNotice(true) }}>공지사항</button>
            {
                isFaq ? <>
                    {
                        noticeList.map(item => (
                            <AccordionListView {...item} />
                        ))}
                </> : null
            }
            {
                isNotice ? <><PageNationView itemList={noticeList} pageSize={3} /></> : null
            }

        </Container>
    );
};
const Container = styled.div`
display: inline-block;
`
export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch('http://localhost:3000/api/notice/');
    const noticeList: PropsData[] = await res.json();

    if (!noticeList) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            noticeList
        }

    }

}
export default Brand;