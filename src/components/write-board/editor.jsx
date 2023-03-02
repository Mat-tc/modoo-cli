import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import styles from './editor.module.css'
export default function EditorBoard() {
  const editorRef = useRef(null)
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent())
    }
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input
            type='text'
            placeholder='제목을 입력하세요'
            className={styles.input}
          />
        </div>
        <button className={styles.writeBtn} onClick={log}>
          작성하기
        </button>
      </div>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ',
        }}
      />
    </>
  )
}
