import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StartUpFormDTO } from "../dto/startup-form.dto";
import GridBox from "../components/GridBox";
import styled from "styled-components";
import { Title1 } from "../components/GlobalComponents";
import PageMainTitle from "../components/PageMainTitle";
interface BoxItem {
    step: string,
    procedure: string,
}

const BoxItems: BoxItem[] = [
    {
        step: "Step.01",
        procedure: "전화 및 방문상담",
    },
    {
        step: "Step.02",
        procedure: "전화 및 방문상담",
    },
    {
        step: "Step.03",
        procedure: "전화 및 방문상담",
    },
    {
        step: "Step.04",
        procedure: "전화 및 방문상담",
    },
    {
        step: "Step.05",
        procedure: "전화 및 방문상담",
    },
    {
        step: "Step.06",
        procedure: "전화 및 방문상담",
    },
    {
        step: "Step.07",
        procedure: "전화 및 방문상담",
    },
    {
        step: "Step.08",
        procedure: "전화 및 방문상담",
    }

]
const Business = () => {
    const [isFormClick, setIsFormClick] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<StartUpFormDTO>();

    const onSubmit = async (data: StartUpFormDTO) => {
        console.log(data);
        const res = await fetch("http://localhost:3000/api/startup-form/create", {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    return (
        <div>
            <PageMainTitle title="창업안내" description="비오키친과 함께 하실 점주님을 모집합니다. 세계적인 브랜드의 성공 철학을 공유합니다." />
            <Grid>
                <GridBox boxItems={BoxItems} col={4} mdCol={3} smCol={2} height="100px" />
            </Grid>
            <Grid>
                <Table>
                    <caption>예상 투자비용 테이블</caption>
                    <colgroup>
                        <col width="270px" />
                        <col width="270px" />
                        <col width="*" />
                    </colgroup>
                    <thead>
                        <Tr>
                            <Th scope="col">항목</Th>
                            <Th scope="col">금액</Th>
                            <Th scope="col">내용</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        <Tr>
                            <Th scope="row">가맹비</Th>
                            <Td>14,889,000원</Td>
                            <Td>소멸성</Td>
                        </Tr>
                        <Tr>
                            <Th scope="row">교육비</Th>
                            <Td>없음</Td>
                            <Td>교육에 대한 추가 비용 없음</Td>
                        </Tr>
                        <Tr>
                            <Th scope="row">장비 및 기자재</Th>
                            <Td>12,000만원</Td>
                            <Td>샌드위치 유니트, 브래드 오븐, 스피드 오븐, 전자레인지, 냉장냉동시설, 주방설비 및 집기, 커피머신, CCTV, 음향장비, 가구 및 인테리어 소품 등</Td>
                        </Tr>
                        <Tr>
                            <Th scope="row">인테리어<br />(간판 및 철거비용 제외)</Th>
                            <Td>200만원~210만원/평당</Td>
                            <Td>가설, 전기, 바닥, 벽체, 천정, 설비, 출입문 철거 및 조성, 장비세팅, 기본덕트, 스프링쿨러 등</Td>
                        </Tr>
                        <Tr>
                            <Th scope="row">간판</Th>
                            <Td>410만원</Td>
                            <Td>H:450mm / 1면 기준, 어닝 포함</Td>
                        </Tr>
                        <Tr>
                            <Th scope="row">전기증설</Th>
                            <Td>150만원</Td>
                            <Td>10KW증설</Td>
                        </Tr>
                        <Tr>
                            <Th scope="row">냉난방</Th>
                            <Td>450만원</Td>
                            <Td>32평형 시스템1, 벽걸이(냉난방)1, 배관비</Td>
                        </Tr>
                    </tbody>
                    <Tfoot>
                        <Tr>
                            <Th scope="row">합계</Th>
                            <Td>약 2억 원~2억 1천만원</Td>
                            <Td>총 비용은 경우에 따라 변동 될 수 있습니다.</Td>
                        </Tr>
                    </Tfoot>
                </Table>
            </Grid>
            <Button onClick={() => setIsFormClick(true)}>상담 신청하기</Button>
            {
                isFormClick ?
                <Modal>
                    <ModalContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <button onClick={() => setIsFormClick(false)}>닫기</button>
                    <label>성함</label>
                    <input placeholder="성항을 입력해주세요" {...register("name")} />
                    <label>전화번호</label>
                    <input type="number" placeholder="성항을 입력해주세요" {...register("phonenumber")} />
                    <label>오픈 희망지역</label>
                    <input type="text" placeholder="성항을 입력해주세요" {...register("area")} />
                    <label>점포 유무</label>
                    <input type="radio" value="유" id="True" {...register("experience")} />
                    <input type="radio" value="무" id="false" {...register("experience")} />
                    <label>오픈 희망일</label>
                    <select {...register("openday")}>
                        <option value="now">즉시</option>
                        <option value="soon">3개월 이내</option>
                        <option value="later">3개월 이후</option>
                    </select>
                    <label>사업 예산</label>
                    <select {...register("money")}>
                        <option value="money1">5천만원 미만</option>
                        <option value="money2">5천만원 미만</option>
                        <option value="money3">5천만원 미만</option>
                    </select>
                    <button type="submit">제출</button>
                    </form>
                    </ModalContent>
                    </Modal>
                    : null
            }
        </div>
    );
};

const Grid = styled.div`
    text-align: center;
    margin: 0 auto;
    @media only screen and (max-widTh: 768px) {
        widTh: auto;
    }
    @media only screen and (min-widTh: 1200px) {
        widTh: 1200px;
    }
`

const Tr = styled.tr`
height: 69px;
`;

const Th = styled.th`
    text-align: left;
    padding: 0 30px;
    color: #292929;
    line-height: 22px;
    font-weight: normal;
    border-bottom: 1px solid #dddddd;
`;

const Td = styled.td`
    padding: 0 30px;
    text-align: left;
    color: #666;
    line-height: 22px;
    font-size: 16px;
    letter-spacing: -0.05em;
    border-bottom: 1px solid #dddddd;
`;

const Table = styled.table`
clear: both;
    border-top: 4px solid #009223;
`

const Tfoot = styled.tfoot`
background-color: #f6f6f6;
`

const Modal = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`
const ModalContent = styled.div`
    background-color: #fefefe;
    margin: 5% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    height:70%;
    width: 50%; /* Could be more or less, depending on screen size */
`

const Button = styled.button`
border: 0px;
border-radius: 5px;
width:120px;
height: 50px;
color: white;
font-size: ${props => props.theme.fontSizes.lg};
background-color: black;
`
export default Business;