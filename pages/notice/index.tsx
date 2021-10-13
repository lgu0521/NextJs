import { GetStaticProps, InferGetStaticPropsType } from "next";
import styled from 'styled-components';
import Link from 'next/link';

type PropsData = {
    id: string,
    title: string,
    content: string,
    datetime: string
}

const Brand = (Props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const noticeList: PropsData[] = Props.noticeList;
    console.log(noticeList);
    return (
        <Container>
            {
                noticeList.map((item, key) => {
                    return (<div key={key}>
                        <Link href={`/notice/${item.id}`}>
                            <a>
                                <p>{item.title}</p>
                                <p>{item.content}</p>
                                <p>{item.datetime}</p>
                            </a>
                        </Link>
                    </div>)
                })
            }
        </Container>
    );
};
const Container = styled.div`
display: inline-block;
`
export const getStaticProps: GetStaticProps = async (context) => {
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