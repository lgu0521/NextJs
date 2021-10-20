import { useForm } from "react-hook-form";
import { GetSingleDownloadUrl } from '../../../components/GetDownloadUrl';

interface BannerCreateDTO {
    tmpUrl: File,
    url: string,
    order: number
}
const AdminCreateBanner = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<BannerCreateDTO>();
    const onSubmit = async (data: BannerCreateDTO) => {
        const url = await GetSingleDownloadUrl(data.tmpUrl);
        data.url = url;
        const res = await fetch("http://localhost:3000/api/banner/create", {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>이미지</label>
                <input type="file" {...register("tmpUrl", { required: true })} />
                <label>순서</label>
                <input type="number" {...register("order", { required: true })} />
                <button type="submit">제출</button>
            </form>
        </div>
    );
};

export default AdminCreateBanner;