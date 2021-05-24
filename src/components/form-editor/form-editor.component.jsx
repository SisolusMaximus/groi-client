import "./form-editor.styles.scss"

import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const  FormEitor =({name, validationObject, setValidationObject, numOfField}) => {
  const editorRef = useRef(null);
  const handleEditorChange = (text) =>{
    const values = validationObject.values
    values[numOfField] = text
    setValidationObject({...validationObject,
        [numOfField]: true,
        values: values
        })
    }   



  return (

    <div className={"form-editor-container"}>
        <label htmlFor={name} className={"form-editor-label"}>{name}: </label>
        <Editor
            apiKey='dblfsder3uz537ye2hnvfrqn1b3bcg5lnjvq7gmikw1ufghs'
            tinymceScriptSrc={`${process.env.PUBLIC_URL}/editor.script.js`}
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue="<p>Content of this editor will be displayed as description on page with your item.
            Use it to tell more about your item.</p>"
            init={{
            height: 500,
            menubar: false,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
            onEditorChange={(newText) => handleEditorChange(newText)}
        />                
    </div>
      
  );
}


export default FormEitor;
