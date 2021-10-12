import dynamic from 'next/dynamic';
import { EditorProps} from '@toast-ui/react-editor';
import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';


const TuiNoSSRWrapper = dynamic<EditorProps>(() => import('@toast-ui/react-editor').then(m => m.Editor),{
    ssr:false,
    loading:()=><p>Loading . . .</p>
})

const Board = () => {
    const Submit = () =>{

    }
    return (
        <Container>
            <input name="title" placeholder="공지사항 제목을 입력하세요"/>
        <TuiNoSSRWrapper height="800px" initialEditType="wysiwyg" useCommandShortcut={true} />
        <Button onClick={Submit}>저장</Button>
        </Container>
    );
};

const Container = styled.div`
display: inline-block;
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

export default Board;