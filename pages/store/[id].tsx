import React from 'react';
import { GetServerSideProps, GetStaticPaths, InferGetServerSidePropsType } from 'next';
import { Params } from 'next/dist/server/router';
import SimpleImageSlider from "react-simple-image-slider";
import styled from 'styled-components';

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

const StoreDetailPage = (Props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const storeData: Data = Props.resJson;
    console.log(storeData.url);
    const ImageUrl = storeData.url.map((item, key) => {
        return { "url": item }
    });

    console.log(ImageUrl);
    return (
        <Container>
            <BoxWrap>
                <Box>
                    <SimpleImageSlider width={550} height={400} images={ImageUrl} showNavs={true} showBullets={true} />
                    <Wrap>
                        <Name>{storeData.name}</Name>
                        <Location>{storeData.location}</Location>
                        <Operation>{storeData.operation}</Operation>
                        <Phonenumber>{storeData.phonenumber}</Phonenumber>
                    </Wrap>
                </Box>
            </BoxWrap>
        </Container>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }: Params) => {
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

// export const getStaticPaths: GetStaticPaths = async () => {
//     const res = await fetch("http://localhost:3000/api/store/getlist");
//     const resJson: Id[] = await res.json();

//     const paths = resJson.map((item) => ({
//         params: { id: item.storeId },
//     }));
//     return { paths, fallback: false }
// }



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
border: 1px solid #ddd;
`

const Box = styled.div`
display: flex;
`
const Wrap = styled.div`
padding: 50px 35px;
text-align: left;
`

const Name = styled.p`
font-size:${props => props.theme.fontSizes.titleSize};
color: #494949;
letter-spacing: -0.025em;
margin-bottom: 30px;
@media only screen and (max-width: 320px) {
    font-size:${props => props.theme.fontSizes.xxl} !important;
    }
`

const Location = styled.p`
font-size:${props => props.theme.fontSizes.xl};
color:#7e7e7e;
letter-spacing: -0.025em;
margin-bottom: 10px;
@media only screen and (max-width: 320px) {
    font-size:${props => props.theme.fontSizes.lg} !important;
    }
`

const Operation = styled.p`
font-size:${props => props.theme.fontSizes.xl};
color:#a68537;
letter-spacing: -0.025em;
margin-bottom: 30px;
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

export default StoreDetailPage;