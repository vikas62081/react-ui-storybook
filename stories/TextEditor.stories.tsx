import React from 'react';
import { Meta, Story } from '@storybook/react';
import TextEditor, {
  TextEditorProps,
} from '../src/Organisms/TextEditor/TextEditor';
const meta: Meta = {
  title: 'Components/Organisms/TextEditor',
  component: TextEditor,
  argTypes: {},
};

export default meta;

const Template: Story<TextEditorProps> = (arg) => <TextEditor {...arg} />;

export const Default = Template.bind({});

Default.args = {
  onSave: (editor) => console.log(editor.getCurrentContent().getPlainText()),
};
