import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import { ContainedButton } from '../../Atoms/Button/Button';

export type TextEditorProps = {
  onSave: (editorState: any) => void;
  btnText?: string;
};
export default function TextEditor(props: TextEditorProps) {
  const { btnText = 'Save' } = props;
  const [editorState, setEditorState] = useState<any>();

  const onSave = () => {
    props.onSave(editorState);
  };
  useEffect(() => {
    const state = EditorState.createEmpty();
    setEditorState(state);
  }, []);

  // const clear = () => {
  //   setEditorState(EditorState.createEmpty());
  // };
  const onChange = (state: any) => {
    setEditorState(state);
  };
  const wrapperStyle = {
    padding: '1rem',
    border: '1px solid #ccc',
  };
  const editorStyle = {
    height: '10rem',
    padding: '0 1rem 0 1rem',
    background: 'lightgray',
    border: '1px solid #ccc',
  };

  const toolbarStyle = {
    border: '1px solid #ccc',
  };
  return (
    <div className="editorContainer">
      <Editor
        wrapperStyle={wrapperStyle}
        editorStyle={editorStyle}
        toolbarStyle={toolbarStyle}
        editorState={editorState}
        onEditorStateChange={onChange}
        placeholder="Type something here..."
        {...props}
      />
      <div style={{ marginTop: 5, float: 'right' }}>
        <ContainedButton color="neutral" onClick={onSave}>
          {btnText}
        </ContainedButton>
      </div>
    </div>
  );
}
