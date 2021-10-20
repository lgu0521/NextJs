import React from "react";
import { useForm } from "react-hook-form";
import { StoreCreateDTO } from "../../dto/store-create.dto";

const Business = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<StoreCreateDTO>();

    const onSubmit = async (data: StoreCreateDTO) => {
        console.log(data);
        const res = await fetch("http://localhost:3000/api/store/image-create", {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>매장 이름</label>
                <input placeholder="매장이름을 입력해주세요" {...register("name")} />
                <label>매장 위치</label>
                <input placeholder="매장 위치" {...register("location")} />
                <label>매장 전화번호</label>
                <input type="number" placeholder="전화번호를 입력해주세요" {...register("phonenumber")} />
                <label>매장 운영시간</label>
                <input  placeholder="매장 운영시간정보를 입력해주세요" {...register("operation")} />
                <label>이미지</label>
                <input type="file" {...register("url")} multiple/>
                <button type="submit">제출</button>
            </form>
        </div>
    );
};

export default Business;