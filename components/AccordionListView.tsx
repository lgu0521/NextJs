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
            <article>
                <header>
                    <h4 onClick={() => setIsOpen(!isOpen)}>
                        {title}
                    </h4>
                    <button className='btn' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <p>닫기</p> : <p>열기</p>}
                    </button>
                </header>
                {isOpen ? <p>{content}</p> : null}
            </article>
        </>
    );
};

export default AccordionListView;