import type { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import SimpleImageSlider from "react-simple-image-slider";
import styled from 'styled-components';
import { BannerListDTO } from "../dto/banner-create.dto";

interface Props {
  BannerList: BannerListDTO[]
}

const Home: NextPage<Props> = ({ BannerList }) => {
  const images = BannerList.map(item => {
    return { url: item.url }
  });

  return (
    <ContentBox>
      <SimpleImageSlider width="100%" height="100%" images={images} showNavs={true} showBullets={true} />
    </ContentBox>
  )
}

const ContentBox = styled.div`
    display: block;
    position: relative;
    box-sizing: border-box;
    @media only screen and (max-width: 600px) {
      margin-top:50px;
      width: 100%;
      height: 200px;
    }
    @media only screen and (min-width: 600px) {
      width: 100%;
      margin-top:50px;
      height: 200px;
    }
    @media only screen and (min-width: 768px) {
      width: 100%;
      margin-top:60px;
      height: 300px;
    }
    @media only screen and (min-width: 992px) {
      width: 100%;
      height: 400px;
      margin-top:0px;
    }
    @media only screen and (min-width: 1200px) {
        height: 600px;
        width: 100%;
        margin-top:0px;
    }
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/banner");
  const BannerList: BannerListDTO[] = await res.json();

  if (!BannerList) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      BannerList
    }
  }
}

export default Home
