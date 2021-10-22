import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StartUpFormDTO } from "../../dto/startup-form.dto";
import GridBox from "../../components/GridBox";
import { Title1, Button } from "../../components/GlobalComponents";
import PageMainTitle from "../../components/PageMainTitle";
import Style from "./startup.style";
import {InputForm, Form, ButtonForm, SelectForm} from '../../components/Form';

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
const StartUpPage = () => {
    const [isFormClick, setIsFormClick] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<StartUpFormDTO>();

    const onSubmit = async (data: StartUpFormDTO) => {
        const res = await fetch("http://localhost:3000/api/startup-form/create", {
            method: 'POST',
            body: JSON.stringify(data)
        });
        if(res){
            alert("상담 신청이 완료되었습니다");
            setIsFormClick(false);
        }
    }

    return (
        <div>
            <PageMainTitle title="창업안내" description="비오키친과 함께 하실 점주님을 모집합니다. 세계적인 브랜드의 성공 철학을 공유합니다." />
            <Style.ContentBox></Style.ContentBox>
            <Style.ContentBox>
                    <PageMainTitle title="창업절차"/>
                    <Style.Grid>
                        <GridBox boxItems={BoxItems} col={4} mdCol={3} smCol={2} height="100px" />
                    </Style.Grid>
            </Style.ContentBox>
            <Style.ContentBox>
            <Style.Grid>
            <PageMainTitle title="예상 투자비용"/>
                <Style.Table>
                    <colgroup>
                        <col width="270px" />
                        <col width="270px" />
                        <col width="*" />
                    </colgroup>
                    <Style.Thead>
                        <Style.Tr>
                            <Style.Th scope="col">항목</Style.Th>
                            <Style.Th scope="col">금액</Style.Th>
                            <Style.Th scope="col">내용</Style.Th>
                        </Style.Tr>
                    </Style.Thead>
                    <tbody>
                        <Style.Tr>
                            <Style.Th scope="row">가맹비</Style.Th>
                            <Style.Td>14,889,000원</Style.Td>
                            <Style.Td>소멸성</Style.Td>
                        </Style.Tr>
                        <Style.Tr>
                            <Style.Th scope="row">교육비</Style.Th>
                            <Style.Td>없음</Style.Td>
                            <Style.Td>교육에 대한 추가 비용 없음</Style.Td>
                        </Style.Tr>
                        <Style.Tr>
                            <Style.Th scope="row">장비 및 기자재</Style.Th>
                            <Style.Td>12,000만원</Style.Td>
                            <Style.Td>샌드위치 유니트, 브래드 오븐, 스피드 오븐, 전자레인지, 냉장냉동시설, 주방설비 및 집기, 커피머신, CCTV, 음향장비, 가구 및 인테리어 소품 등</Style.Td>
                        </Style.Tr>
                        <Style.Tr>
                            <Style.Th scope="row">인테리어<br />(간판 및 철거비용 제외)</Style.Th>
                            <Style.Td>200만원~210만원/평당</Style.Td>
                            <Style.Td>가설, 전기, 바닥, 벽체, 천정, 설비, 출입문 철거 및 조성, 장비세팅, 기본덕트, 스프링쿨러 등</Style.Td>
                        </Style.Tr>
                        <Style.Tr>
                            <Style.Th scope="row">간판</Style.Th>
                            <Style.Td>410만원</Style.Td>
                            <Style.Td>H:450mm / 1면 기준, 어닝 포함</Style.Td>
                        </Style.Tr>
                        <Style.Tr>
                            <Style.Th scope="row">전기증설</Style.Th>
                            <Style.Td>150만원</Style.Td>
                            <Style.Td>10KW증설</Style.Td>
                        </Style.Tr>
                        <Style.Tr>
                            <Style.Th scope="row">냉난방</Style.Th>
                            <Style.Td>450만원</Style.Td>
                            <Style.Td>32평형 시스템1, 벽걸이(냉난방)1, 배관비</Style.Td>
                        </Style.Tr>
                    </tbody>
                    <Style.Tfoot>
                        <Style.Tr>
                            <Style.Th scope="row">합계</Style.Th>
                            <Style.Td>약 2억 원~2억 1천만원</Style.Td>
                            <Style.Td>총 비용은 경우에 따라 변동 될 수 있습니다.</Style.Td>
                        </Style.Tr>
                    </Style.Tfoot>
                </Style.Table>
            </Style.Grid>
            <Button width="180px" onClick={() => setIsFormClick(true)}>상담 신청하기</Button>
            </Style.ContentBox>

            {
                isFormClick ?
                    <Style.Modal>
                        <Style.ModalContent>
                            <Style.ModalWrap>
                            <Form onSubmit={onSubmit}>
                            <Button onClick={() => setIsFormClick(false)} width="70px">닫기</Button>
                                <InputForm label="성함*" name="name" placeholder="성항을 입력해주세요"/>
                                <InputForm label="전화번호*" name="phonenumber" placeholder="전화번호를 입력해주세요"/>
                                <InputForm label="오픈 희망지역*" name="area" placeholder="오픈지역 입력해주세요"/>
                                <InputForm type="radio" label="점포 유*" value="유" name="experience"/>
                                <InputForm type="radio" label="점포 무*" value="무" name="experience"/>
                                <SelectForm name="openday" label="오픈 희망일*" options={[{value:"즉시"},{value:"3개월 이내"},{value:"3개월 이후"}]}/>
                                <SelectForm name="money" label="사업 예산*" options={[{value:"5천만원 미만"},{value:"5천만원 미만"},{value:"5천만원 미만"}]}/>
                                <Button type="submit" width="150px">제출</Button>
                            </Form>
                            </Style.ModalWrap>
                        </Style.ModalContent>
                    </Style.Modal>
                    : null
            }
        </div>
    );
};


export default StartUpPage;