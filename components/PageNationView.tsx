import styled from 'styled-components';
import Link from 'next/link';
import PageNationButton from '../components/PageNationButton';
import GetPageNationViewList from '../components/GetPageNationViewList'
import { useState } from 'react';

type Item = {
    id: string,
    title: string,
    content: string,
    datetime: string
}

interface Props {
    itemList: Item[],
    pageSize: number
}


const PageNationView = ({ itemList, pageSize }: Props) => {
    const itemCount = itemList.length;
    const [currentCount, setCurrentCount] = useState(1);

    const viewItemList = GetPageNationViewList({ itemList, pageSize, currentCount });

    const handlePageChange = (page:number) => {
        setCurrentCount(page);
    }

    return (
        <>
            <ContentBox>
                <Table>
                    <caption>뉴스ㆍ공지사항 테이블</caption>
                    <colgroup>
                        <col width="50px" />
                        <col width="*" />
                        <col width="200px" />
                    </colgroup>
                    <tbody>
                        {
                            viewItemList.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <Td>{key}</Td>
                                        <Td><Link href={`/notice/${item.id}`}><a>{item.title}</a></Link></Td>
                                        <Td>{item.datetime}</Td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </Table>
                <PageNationButton itemCount={itemCount} pageSize={pageSize} currentCount={currentCount} onPageChange={handlePageChange} />
            </ContentBox>
        </>
    );
};

const ContentBox = styled.div`
display: table;
width: 100%100px;
`

const Td = styled.td`
    height: 69px;
    border-bottom: 1px solid #dddddd;
    text-align: center;
    color: #292929;
    font-size: 16px;
    text-align: left;
    letter-spacing: -0.04em;
    `

const Table = styled.table`
    border-top: 4px solid #009223;
`
export default PageNationView;