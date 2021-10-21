import styled from 'styled-components';
import { Title1, Content } from '../components/GlobalComponents';

interface Props {
    title: string,
    description: string
}

const PageMainTitle = ({ title, description }: Props) => {

    return (
        <>
            <ContentBox>
                <ContentWrap>
                    <Title1>{title}</Title1>
                    <Wrap>
                        <Content>{description}</Content>
                    </Wrap>
                </ContentWrap>
            </ContentBox>
        </>
    );
};

const ContentBox = styled.div`
    width: 100%;
    height: 150px;
    text-align: center;
    display: table;
`;

const ContentWrap = styled.div`
    height: 100%;
    vertical-align: middle;
    display: table-cell;
`;

const Wrap = styled.div`
    color: #666;
    margin-top: 10px;
`
export default PageMainTitle;