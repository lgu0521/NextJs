import { GetStaticProps, InferGetStaticPropsType } from "next";
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

type PropsData = {
    storeId: string,
    name: string,
    location: string,
    operation: string,
    phonenumber: string,
    url: string
}


const Brand = (Props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const stroeList: PropsData[] = Props.stroeList;
    return (
        <Container>
            <BoxWrap>
                {
                    stroeList.map((item, key) => (
                        <Box key={key}>
                            <Item>
                                <Link href={`/store/${item.storeId}`}>
                                    <a>
                                        <Image src={item.url} alt="" width="100%" height="60px" layout="responsive" objectFit="cover" />
                                        <Text>
                                            <Name>{item.name}</Name>
                                            <Location>{item.location}</Location>
                                            <Operation>{item.operation}</Operation>
                                            <Phonenumber>{item.phonenumber}</Phonenumber>
                                        </Text>
                                    </a>
                                </Link>
                            </Item>

                        </Box>
                    ))
                }
            </BoxWrap>
        </Container>
    );
};

const Container = styled.div`
    @media only screen and (max-width: 768px) {
        width: auto;
    }
    @media only screen and (min-width: 1200px) {
        width: 1200px;
    }
    position: relative;
    margin: 70px auto 100px;
`
const BoxWrap = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 50px -12px 0;
`
const Text = styled.div`
    padding: 25px 25px;
    height: 190px;
`

const Box = styled.div`
    width: 33%;
    position: relative;
    display: inline-block;
    vertical-align: top;
    padding: 12px;
`

const Item = styled.div`
    border: 1px solid #ddd;
    box-sizing: border-box;
`

const Name = styled.p`
font-size:${props => props.theme.fontSizes.xxl};
color: #494949;
letter-spacing: -0.025em;
margin-bottom: 15px;
`

const Location = styled.p`
font-size:${props => props.theme.fontSizes.xl};
color:#7e7e7e;
letter-spacing: -0.025em;
margin-bottom: 5px;
`

const Operation = styled.p`
font-size:${props => props.theme.fontSizes.lg};
color:#a68537;
letter-spacing: -0.025em;
margin-bottom: 15px;
`

const Phonenumber = styled.p`
font-size:${props => props.theme.fontSizes.xxl};
color:#666;
letter-spacing: -0.025em;
`
export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch('http://localhost:3000/api/store');
    const stroeList: PropsData[] = await res.json();

    if (!stroeList) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            stroeList
        }

    }

}
export default Brand;