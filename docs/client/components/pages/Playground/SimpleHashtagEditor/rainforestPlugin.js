import React from 'react';

const getContent = (editor, key) => {
  var b = editor.getEditorState().getCurrentContent().getBlockForKey(key);

  if (b !== undefined) {
    if (!isComment(b.getText()) && b.getText() !== '') {
      return b.getText()
    }
  }
  return false
} 

const isComment = (txt) => {
  return txt[0] == '#'
}

export const blockRendererFn = (block, editor) => {
	var cc = editor.getEditorState().getCurrentContent();

	if (isComment(block.getText())) {
		console.log('yay, a comment')
		return {
			component: () => {
				return (
					<span 
						style={{color:"gray"}}
		        data-offset-key={ `${block.get('key')}-0-0` }
      	  >
        		{block.getText()}
        	</span>
        )
			}
		}
	} else {
    var beforeKey = cc.getKeyBefore(block.getKey())
    var afterKey = cc.getKeyAfter(block.getKey())
    var lines = [];

    console.log('from this line:', [getContent(editor, beforeKey), block.getText(), getContent(editor, afterKey)])

    if (block.getText() == '' && getContent(editor, beforeKey) && getContent(editor, afterKey)) {
      console.log('too many lines');
    } else if (getContent(editor, beforeKey)) {
      lines = [getContent(editor, beforeKey), block.getText()]
    } else if (getContent(editor, afterKey)) {
      lines = [block.getText(), getContent(editor, beforeKey)]
    }

    console.log(lines);

	}
    return block;
}