import type { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import SimpleImageSlider from "react-simple-image-slider";

type Data = {
  url: string
}

const Home: NextPage = ({ bannerImg }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <SimpleImageSlider width={1920} height={600} images={bannerImg} showNavs={true} showBullets={true} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/banner");
  const bannerImg: Data[] = await res.json();

  if (!bannerImg) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      bannerImg
    }
  }
}

export default Home
