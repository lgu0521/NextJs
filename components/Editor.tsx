import { Editor } from '@toast-ui/react-editor';
const editor = () => {
    return (
        <Editor
        initialValue="hello"
        previewStyle="vertical"
        height="600px"
        useCommandShortcut={true}
        initialEditType="markdown"/>
    );
};

export default editor;