import styled from 'styled-components';
import Link from 'next/link';
import PageNationButton from '../components/PageNationButton';
import GetPageNationViewList from '../components/GetPageNationViewList'
import { useState } from 'react';
import { Title2 } from '../components/GlobalComponents';

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

    const handlePageChange = (page: number) => {
        setCurrentCount(page);
    }

    return (
        <>
            <ContentBox>
                <Title2>총: {itemCount}</Title2>
                <Table>
                    <colgroup>
                        <col width="50px" />
                        <col width="900px"/>
                        <col width="200px" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            viewItemList.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <Td>{key + 1}</Td>
                                        <Th><Link href={`/board/notice/${item.id}`}><a>{item.title}</a></Link></Th>
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
display: inline-block;
`

const Td = styled.td`
    height: 60px;
    border-bottom: 1px solid #dddddd;
    text-align: center;
    color: #292929;
    font-size: 16px;
    letter-spacing: -0.04em;
    text-align: center;
    padding: 10px;
    
`

const Th = styled.th`
    height: 60px;
    padding: 10px;
    border-bottom: 1px solid #dddddd;
    text-align: center;
    color: #292929;
    font-size: 16px;
    text-align: left;
    letter-spacing: -0.04em;
    text-align: left;
    `
const Table = styled.table`
    border-top: 4px solid #009223;
    display: inline-block;
    border-spacing: 0;
`
export default PageNationView;