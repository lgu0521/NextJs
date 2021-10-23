import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Style from './board.style';
import Link from 'next/link';
import PageNationView from '../../components/PageNationView';
import AccordionListView from '../../components/AccordionListView';
import PageMainTitle from '../../components/PageMainTitle';
import { useState } from "react";
import { NoticeListDTO } from '../../dto/notice-create.dto';
import { FaqListDTO } from '../../dto/faq-create.dto';
import { PageLayout } from '../../components/GlobalComponents';
interface Props {
    noticeList: NoticeListDTO[],
    faqList: FaqListDTO[]
}

const BrandPage: NextPage<Props> = ({ noticeList, faqList }) => {
    const [isFaq, setIsFaq] = useState(true);
    const [isNotice, setIsNotice] = useState(false);
    return (
        <>
            <PageMainTitle title="게시판" description="비오키친과 함께 하실 점주님을 모집합니다. 세계적인 브랜드의 성공 철학을 공유합니다." />
            <PageLayout>
                <Style.TabButton onClick={() => { setIsFaq(true); setIsNotice(false) }}>FAQ</Style.TabButton>
                <Style.TabButton onClick={() => { setIsFaq(false); setIsNotice(true) }}>공지사항</Style.TabButton>
            </PageLayout>
            <PageLayout>
                    {
                        isFaq ? <>
                            {
                                noticeList.map(item => (
                                    <AccordionListView {...item} />
                                ))}
                        </> : null
                    }
                    {
                        isNotice ? <PageNationView itemList={noticeList} pageSize={10} /> : null
                    }
            </PageLayout>
        </>
    );
};


export const getServerSideProps: GetServerSideProps = async (context) => {
    const resNotice = await fetch('http://localhost:3000/api/notice/');
    const resFaq = await fetch('http://localhost:3000/api/faq/');
    const noticeList: NoticeListDTO[] = await resNotice.json();
    const faqList: FaqListDTO[] = await resFaq.json();

    if (!noticeList && !faqList) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            noticeList,
            faqList
        }

    }

}
export default BrandPage;