import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import * as ranforestPlugin from './rainforestPlugin';
import editorStyles from './editorStyles.css';

const plugins = [ranforestPlugin];
const text = `# comment

action 1
response 1?

action 2
response 2?


action 3
response 3?
`;

console.log(ranforestPlugin)

export default class SimpleHashtagEditor extends Component {

  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.refs.editor.focus();
  };

  render() {
    return (
      <div className={ editorStyles.editor } onClick={ this.focus }>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref="editor"
        />
      </div>
    );
  }
}
