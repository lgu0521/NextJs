import React from "react";
import { useForm } from "react-hook-form";
import { StartUpFormDTO } from "../dto/startup-form.dto";

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

export default Business;