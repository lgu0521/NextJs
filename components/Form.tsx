import React from "react";
import {useForm} from "react-hook-form";
import styled from "styled-components";

const Label = styled.label `
font-size: 15px;
`
const Input = styled.input `
height: 100%;
width: 250px;
border: 0px;
border-bottom:2px solid #009223;
padding: 0px 10px;
font-size: 15px;
&:focus{
    outline: none;
}
`

const Select = styled.select`
height: 100%;
width: 300px;
font-size: 15px;
padding: 10px;
background: url("https://eggdrop.co.kr/assets/images/common/icon_select.svg") no-repeat right 15px center/20px auto;;
-webkit-appearance: none;
border:0px;
border-bottom:2px solid #009223;
`


const Option = styled.option`
`

const InputDIV = styled.div `
display:table;
vertical-align: middle;
height: 30px;
margin: 30px;
&:focus{
    outline: none;
}
`

const Button = styled.button `
`
const FormStyle = styled.form `
    display: inline-block;
    width: 100%;
    overflow: scroll;
`

const Form = ({defaultValues, children, onSubmit} : any) => {
    const methods = useForm({defaultValues});
    const {handleSubmit} = methods;
    return (
        <FormStyle onSubmit={
            handleSubmit(onSubmit)
        }>
            {
            React.Children.map(children, (child) => {
                return child.props.name ? (
                    <div> {
                        React.createElement(child.type, {
                            ...{
                                ...child.props,
                                register: methods.register,
                                key: child.props.name
                            }
                        })
                    } </div>
                ) : (child);
            })
        } </FormStyle>
    );
};

const InputForm = ({
    register,
    name,
    label,
    ...rest
} : any) => {
    return (
        <InputDIV>
            <Label>{label}</Label>
            <Input {...register(name)} {...rest}/>
        </InputDIV>
    );
};

interface OptionType{
    value: string
}
interface SelectProps {
    register? : any,
    name: string,
    label: string,
    options: OptionType[],
    children? : React.ReactNode

}
const SelectForm = ({
    register,
    name,
    label,
    options,
    children
} : SelectProps) => {
    return (
        <InputDIV>
            <Label>{label}</Label>
            <Select {...register(name)}>
                {
                    options.map(item => {
                        return <Option value={item.value}>{item.value}</Option>
                    })
                }

            </Select>
        </InputDIV>
    );
};

const ButtonForm = ({
    name,
    ...rest
} : any) => {
    return (
        <Button type="submit" {...rest}>
            {name} </Button>
    );
};

export {
    Form,
    InputForm,
    ButtonForm,
    SelectForm
};