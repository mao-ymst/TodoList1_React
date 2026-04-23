import React from 'react'
import './TodoInput.css'

export default function TodoInput({ inputText, onChange, onAdd }) {
    return (
        <div className='input-container'>
            <input
                className='task-input'
                type='text'
                placeholder='タスクを入力してください'
                value={inputText}
                onChange={onChange} />
            <button
                className='add-button'
                onClick={onAdd}>追加</button>

        </div>
    )
}


//4 入力欄とボタン担当のページを作る
//TodoInput：子　が文字を受け取ったら　App：親　へ報告できるように
// props用意　名前は渡された名前と同じになるように注意