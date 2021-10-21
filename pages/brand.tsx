import { Title1, Title2, Content } from '../components/GlobalComponents';
import styled from 'styled-components';
import React from 'react';
import PageMainTitle from '../components/PageMainTitle';

const Brand = () => {
    const CONTENT_BOX_STYLE = {
        height: "400px",
        backgroundColor: "white"
    }

    const CONTENT_TITLE_STYLE = {
        marginBottom: "20px",
        display: "block",
        color: "white"
    }

    const FONT_STYLE = {
        color: "white"
    }

    return (
        <>
            <PageMainTitle title="브랜드" description="비오키친과 함께 하실 점주님을 모집합니다. 세계적인 브랜드의 성공 철학을 공유합니다." />
            <ContentBox style={{ ...CONTENT_BOX_STYLE, backgroundImage: "url('http://www.saladykorea.com/images/fran-infobox-bg1.jpg')" }}>
                <ContentWrap>
                    <Title2 style={CONTENT_TITLE_STYLE}>회사소개</Title2>
                    <Content style={FONT_STYLE}>
                        <ContentUnit>
                            비오키친은 저탄고지 키토김밥과 고단백 저칼로리 다이어트 도시락, 한끼 샐러드 및 0칼로리 이온음료등을 판매하는 다이어트 푸드 전문점입니다.
                        </ContentUnit>
                        <ContentUnit>
                            “건강한 식습관”을 슬로건으로 산지에서 직접 구매한 질 좋은 농산물들과 정확한 개량을 통한 조리법으로 항시 청결하게 운영하고 있습니다. 다이어트와 건강관리는 결국 식습관에 달려있습니다. 식단 관리가 괴로운 것이 아닌 나를 위한 선물이 될 수 있도록 도와드리고 싶습니다. 더 나아가 국민건강에 이바지하고 싶습니다.
                        </ContentUnit>
                    </Content>
                </ContentWrap>
            </ContentBox>
            <ContentBox style={{ ...CONTENT_BOX_STYLE, backgroundImage: "url('http://www.saladykorea.com/images/fran-infobox-bg2.jpg')" }}>
                <ContentWrap>
                    <Title2 style={CONTENT_TITLE_STYLE}>식자재</Title2>
                    <Content style={FONT_STYLE}>
                        <ContentUnit>
                            매일 재료를 직접 눈으로 보고 관리합니다. 도시락에 들어가는 현미는 철원 산지에서, 호박고구마는 당진에서, 사과는 청송에서등 최대한 산지직송 식자재를 사용합니다. 내 가족이 먹는다는 마음으로 꼼꼼하게 관리 및 조리하고 있습니다.
                        </ContentUnit>
                    </Content>
                </ContentWrap>
            </ContentBox>
            <ContentBox style={{ ...CONTENT_BOX_STYLE, backgroundImage: "url('http://www.saladykorea.com/images/fran-infobox-bg3.jpg')", height: "500px" }}>
                <ContentWrap>
                    <Title2 style={CONTENT_TITLE_STYLE}>가능성</Title2>
                    <Content style={FONT_STYLE}>
                        <StepList>
                            <StepListItem>
                                adffd
                            </StepListItem>
                            <StepListItem>
                                adffd
                            </StepListItem>
                            <StepListItem>
                                adffd
                            </StepListItem>
                        </StepList>
                    </Content>
                </ContentWrap>
            </ContentBox>
        </>
    );
};

const ContentBox = styled.div`
    width: 100%;
    text-align: center;
    display: table;
    color: white;
`;

const ContentWrap = styled.div`
    height: 100%;
    vertical-align: middle;
    display: table-cell;
`;

const ContentUnit = styled.p`
    @media only screen and (max-width: 600px) {
        padding: 0px 50px;
    }
    @media only screen and (min-width: 600px) {
        padding: 0px 100px;
    }
    @media only screen and (min-width: 992px) {
        padding: 0px 200px;
    }
    @media only screen and (min-width: 1200px) {
        padding: 0px 300px;
    }
`

const StepList = styled.ul`
    list-style: none;
`;

const StepListItem = styled.li`
    float: left;
`;

export default Brand;