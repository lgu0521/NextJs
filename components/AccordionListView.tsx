import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
    id: string,
    datetime: string,
    title: string,
    content: string
}


const AccordionListView = ({ title, content }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <ContentBox>
                <AccordionListBox>
                    <h4>
                    <Button onClick={() => setIsOpen(!isOpen)}>{title}</Button>
                    </h4>
                </AccordionListBox>
                {isOpen ? 
                <><AccordionTextBox><p>{content}</p></AccordionTextBox></> : null}
            </ContentBox>
        </>
    );
};

const Button = styled.button`
    padding: 12px 40px 12px 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.3;
    transition: color .3s ease;
    display: block;
    position: relative;
    width: 100%;
    border-radius: 0;
    border: 0;
    background: none;
    text-align: left;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-sizing: border-box;
    &:after{
    position: absolute;
    top: calc(50% - 9px);
    right: 0;
    width: 32px;
    height: 18px;
    background: url("https://eggdrop.co.kr/assets/images/common/icon_select.svg") no-repeat 50%;
    content: "";
    transform-origin: center;
    transform: rotate(0deg);
    transition: transform .3s ease;
    }
`

const ContentBox = styled.article`
    border-bottom: 2px solid #000;
`
const AccordionListBox = styled.article`
width: 100%;
display: inline-block;
padding: 10px 20px ;
`
const AccordionTextBox = styled.article`
width: 100%;
display: inline-block;
font-size: 20px;
text-align: left;
padding: 10px 20px ;
`

export default AccordionListView;