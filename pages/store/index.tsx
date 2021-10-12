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
            {
                stroeList.map((item, key) => (
                    <BoxWrap key={key}>
                        <Box>
                            <Link href={`/store/${item.storeId}`}>
                                <a>
                                    <Image src={item.url} alt="" width="100%" height="60px" layout="responsive" objectFit="cover" />
                                    <Wrap>
                                        <Name>{item.name}</Name>
                                        <Location>{item.location}</Location>
                                        <Operation>{item.operation}</Operation>
                                        <Phonenumber>{item.phonenumber}</Phonenumber>
                                    </Wrap>
                                </a>
                            </Link>
                        </Box>

                    </BoxWrap>
                ))
            }
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
    justify-content: center;
    text-align: center;
    margin: 70px auto 100px;
`

const BoxWrap = styled.div`
    display: inline-block;
    vertical-align: top;
    padding: 12px;
    text-align: left;
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
    @media only screen and (min-width: 600px) {
        width: 100%;
    }
    @media only screen and (min-width: 768px) {
        width: 50%;
    }
    @media only screen and (min-width: 992px) {
        width: 33%;
    }
    @media only screen and (min-width: 1200px) {
        width: 33%;
    }
`

const Box = styled.div`
    border: 1px solid #ddd;
`

const Wrap = styled.div`
    padding: 25px 25px;
    height: 190px;
`

const Name = styled.p`
font-size:${props => props.theme.fontSizes.xxl};
color: #494949;
letter-spacing: -0.025em;
margin-bottom: 15px;
@media only screen and (max-width: 320px) {
    font-size:${props => props.theme.fontSizes.xl} !important;
    }
`

const Location = styled.p`
font-size:${props => props.theme.fontSizes.xl};
color:#7e7e7e;
letter-spacing: -0.025em;
margin-bottom: 5px;
@media only screen and (max-width: 320px) {
    font-size:${props => props.theme.fontSizes.lg} !important;
    }
`

const Operation = styled.p`
font-size:${props => props.theme.fontSizes.lg};
color:#a68537;
letter-spacing: -0.025em;
margin-bottom: 15px;
@media only screen and (max-width: 320px) {
    font-size:${props => props.theme.fontSizes.md} !important;
    }
`

const Phonenumber = styled.p`
font-size:${props => props.theme.fontSizes.xxl};
color:#666;
letter-spacing: -0.025em;
@media only screen and (max-width: 320px) {
    font-size:${props => props.theme.fontSizes.xl} !important;
    }
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