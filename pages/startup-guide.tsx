import React from "react";
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
            <PageMainTitle title="창업안내" description="비오키친과 함께 하실 점주님을 모집합니다. 세계적인 브랜드의 성공 철학을 공유합니다."/>
            <Grid>
                <GridBox boxItems={BoxItems} col={4} mdCol={3} smCol={2} height="100px" />
            </Grid>
            <Grid>
                <table>
                    <caption>예상 투자비용 테이블</caption>
                    <thead>
                        <tr>
                            <th scope="col">항목</th>
                            <th scope="col">금액</th>
                            <th scope="col">내용</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">가맹비</th>
                            <td>14,889,000원</td>
                            <td>소멸성</td>
                        </tr>
                        <tr>
                            <th scope="row">교육비</th>
                            <td>없음</td>
                            <td>교육에 대한 추가 비용 없음</td>
                        </tr>
                        <tr>
                            <th scope="row">장비 및 기자재</th>
                            <td>12,000만원</td>
                            <td>샌드위치 유니트, 브래드 오븐, 스피드 오븐, 전자레인지, 냉장냉동시설, 주방설비 및 집기, 커피머신, CCTV, 음향장비, 가구 및 인테리어 소품 등</td>
                        </tr>
                        <tr>
                            <th scope="row">인테리어<br />(간판 및 철거비용 제외)</th>
                            <td>200만원~210만원/평당</td>
                            <td>가설, 전기, 바닥, 벽체, 천정, 설비, 출입문 철거 및 조성, 장비세팅, 기본덕트, 스프링쿨러 등</td>
                        </tr>
                        <tr>
                            <th scope="row">간판</th>
                            <td>410만원</td>
                            <td>H:450mm / 1면 기준, 어닝 포함</td>
                        </tr>
                        <tr>
                            <th scope="row">전기증설</th>
                            <td>150만원</td>
                            <td>10KW증설</td>
                        </tr>
                        <tr>
                            <th scope="row">냉난방</th>
                            <td>450만원</td>
                            <td>32평형 시스템1, 벽걸이(냉난방)1, 배관비</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row">합계</th>
                            <td>약 2억 원~2억 1천만원</td>
                            <td>총 비용은 경우에 따라 변동 될 수 있습니다.</td>
                        </tr>
                    </tfoot>
                </table>
            </Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>성함</label>
                <input placeholder="성항을 입력해주세요" {...register("name")} />
                <label>전화번호</label>
                <input type="number" placeholder="성항을 입력해주세요" {...register("phonenumber")} />
                <label>오픈 희망지역</label>
                <input type="text" placeholder="성항을 입력해주세요" {...register("area")} />
                <label>점포 유무</label>
                <input type="radio" value="유" id="true" {...register("experience")} />
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
        </div>
    );
};

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


export default Business;