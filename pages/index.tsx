import type { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import SimpleImageSlider from "react-simple-image-slider";
import { BannerListDTO } from "../dto/banner-create.dto";

interface Props {
  BannerList: BannerListDTO[]
}

const Home: NextPage<Props> = ({ BannerList }) => {
  const images = BannerList.map(item => {
    return { url: item.url }
  })
  return (
    <div>
      <SimpleImageSlider width={1920} height={600} images={images} showNavs={true} showBullets={true} />
    </div>
  )
}

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
