import React from 'react'
import './TodoInput.css'

export default function TodoInput({ inputText, onChange, onAdd, priority, onPriorityChange }) {
    return (
        <div className='input-container'>
            <input
                className='task-input'
                type='text'
                placeholder='タスクを入力してください'
                value={inputText}
                onChange={onChange} />

            <select
                value={priority}
                onChange={(e) => onPriorityChange(e.target.value)}
                className='priority-select'>
                <option value="high">"HIGH"</option>
                <option value="medium">"MEDIUM"</option>
                <option value="low">"LOW"</option>

            </select>
            <button
                className='add-button'
                onClick={onAdd}>追加</button>

        </div>
    )
}


//4 入力欄とボタン担当のページを作る
//TodoInput：子　が文字を受け取ったら　App：親　へ報告できるように
// props用意　名前は渡された名前と同じになるように注意

//10 priority関係のpropsを受け取る
// 入力欄にpriorityのセレクトプルダウンを作る
//見た目を整える css