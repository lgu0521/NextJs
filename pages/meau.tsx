import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import seasonal from '../public/meau/seasonal_bot_img.jpeg'

//import Grid from '@mui/material/Grid';

const WarmImg = [
    {
        imgNum: 1,
        title: '바질 파스타 BASIL PASTA',
        description: '바질페스토, 파스타, 모짜렐라 펄, 견과류, 올리브 *오리엔탈',
    },
    {
        imgNum: 2,
        title: '바질 치킨 BASIL CHICKEN',
        description: '바질페스토, 치킨, 크랜베리 *시저',
    },
    {
        imgNum: 1,
        title: '바질 파스타 BASIL PASTA',
        description: '바질페스토, 파스타, 모짜렐라 펄, 견과류, 올리브 *오리엔탈',
    },
    {
        imgNum: 2,
        title: '바질 치킨 BASIL CHICKEN',
        description: '바질페스토, 치킨, 크랜베리 *시저',
    },
];
const Topping = [
    {
        Kname: '치킨',
        Ename: 'CHICKEN',
    },
    {
        Kname: '연어',
        Ename: 'SALMON',
    },
    {
        Kname: '에그',
        Ename: 'EGG',
    },
    {
        Kname: '치킨소시지',
        Ename: 'CHICKEN SAUSAGE',
    },
    {
        Kname: "치킨",
        Ename: 'CHICKEN',
    },
    {
        Kname: '연어',
        Ename: 'SALMON',
    },
    {
        Kname: '에그',
        Ename: 'EGG',
    },
    {
        Kname: '치킨소시지',
        Ename: 'CHICKEN SAUSAGE',
    },
];

type Data = {
    image: string,
    title: string,
    description: string
};

const Meau = (Props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const Gimbabs: Data[] = Props.GimbabList;
    return (
        <>
            <Title>메뉴</Title>
            <GridWrap>
                <TitleWrap>
                    <SubTitle>시즈널 메뉴<strong><br />Seasonal Menu</strong></SubTitle>
                    <p>*시즈널 메뉴는 계절 한정으로 판매됩니다.</p>
                </TitleWrap>
                <Grid>
                    {Gimbabs.map((item, key) => (
                        <Item key={key}>
                            <Image src={item.image} alt="" height={340}
                                width={380} layout="intrinsic" />
                            <span>
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </span>
                        </Item>
                    ))}
                </Grid>
            </GridWrap>
            <GridWrap>
                <TitleWrap>
                    <SubTitle>시즈널 메뉴<strong><br />Seasonal Menu</strong></SubTitle>
                    <p>*시즈널 메뉴는 계절 한정으로 판매됩니다.</p>
                </TitleWrap>
                <Grid>
                    {WarmImg.map((item, key) => (
                        <Item key={key}>
                            <Image src={require('../public/meau/meau' + item.imgNum + '.png')} alt="" />
                            <span>
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </span>
                        </Item>
                    ))}
                </Grid>
            </GridWrap>
            <Image src={seasonal} alt="" />
            <GridWrap>
                <TitleWrap>
                    <SubTitle>Make Your Own Salady</SubTitle>
                    <p>*기본 베이스인 '채소볼' 또는 '곡물볼'을 선택하여 기호에 맞게 커스터마이징(customizing) 해서 즐기세요!</p>
                </TitleWrap>
                <Grid>
                    {Topping.map((item, key) => (
                        <TextItem key={key}>
                            <span>
                                <h5>{item.Kname}</h5>
                                <p>{item.Ename}</p>
                            </span>
                        </TextItem>
                    ))}
                </Grid>
            </GridWrap>
            <GridWrap>
                <TitleWrap>
                    <SubTitle>서브 토핑 Sub Topping</SubTitle>
                    <p>*토핑 추가는 메인토핑과 서브토핑 포함 최대 5개까지 가능합니다.</p>
                </TitleWrap>
                <Grid>
                    {Topping.map((item, key) => (
                        <TextItem key={key}>
                            <span>
                                <h5>{item.Kname}</h5>
                                <p>{item.Ename}</p>
                            </span>
                        </TextItem>
                    ))}
                </Grid>
            </GridWrap>
            <GridWrap>
                <TitleWrap>
                    <SubTitle>드레싱 Dressing</SubTitle>
                    <p>*드레싱은 모두 샐러디만의 레시피로 만들어졌으며, 주문 시 변경이 가능합니다.</p>
                </TitleWrap>
                <Grid>
                    {Topping.map((item, key) => (
                        <TextItem key={key}>
                            <span>
                                <h5>{item.Kname}</h5>
                                <p>{item.Ename}</p>
                            </span>
                        </TextItem>
                    ))}
                </Grid>
            </GridWrap>
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch("http://localhost:3000/api/meau/gimbab");
    const GimbabList: Data[] = await res.json();

    if (!GimbabList) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            GimbabList
        }
    }
}

const Title = styled.span`
    text-align: center;
    font-weight: 300;
    font-size: 42px;
    line-height: 1.1em;
    letter-spacing: -0.02em;
    color: #333;
    padding-bottom: 20px;
    padding-top: 20px;
    text-align: center;
    font-weight: normal;
    display: block;
`

const GridWrap = styled.section`
  margin: 0 1em;
`

const Grid = styled.div`
    text-align: center;
    margin: 0 auto;
    @media only screen and (max-width: 768px) {
        width: auto;
    }
    @media only screen and (min-width: 1200px) {
        width: 1200px;
    }
`

const Item = styled.span`
    width:50%;
    display: inline-block;
`

const TextItem = styled.span`
    align-items: center;
    text-align: center;
    
    display:inline-block;
    text-align: left;
    margin: 10px;
    padding: 10px 30px;
    box-sizing: border-box;
    background: #f7f7f7;
    @media only screen and (max-width: 1190px) {
        width: calc(50% - 23px);
    }
    @media only screen and (min-width: 1200px) {
        width: calc(25% - 23px);
    }
`

const SubTitle = styled.div`
    font-weight: 300;
    font-size: 42px;
    line-height: 50px;
    color: #333;
    text-align: center;
`

const TitleWrap = styled.div`
text-align: center;
padding-bottom: 20px;
`
export default Meau;