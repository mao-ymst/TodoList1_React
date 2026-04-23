import React from 'react'
import './TodoItem.css'

export default function TodoItem({ task, onDelete, onToggle }) {
    return (
        <li
            className='todo-item'
            key={task.id}
        >
            <input
                className='todo-checkbox'
                type='checkbox'
                checked={task.isDone}
                onClick={() => onToggle(task.id)}
            />
            <span
                className={`todo-text ${task.isDone ? "is-done" : ""}`}>
                {task.text}
            </span>
            <span
                className='todo-date'>
                ({task.createdAt})</span>
            <button
                className='delete-btn'
                onClick={(e) => {
                    e.stopPropagation()
                    onDelete(task.id)
                }}>
                削除
            </button>
        </li >

    )
}

//6 listや削除ボタン担当のtodoItemページを作成
//TodoItem：子　が文字を受け取ったら　App：親　へ報告できるように
// props用意　名前は渡された名前と同じになるように注意

//8 taskの完了・未完了の関数を受け取る　props
//input: checkbox の設置 listの箇条書きの点　削除
//checkboxに反転の関数をつける
//span: text完了時に線を引くスタイルをつける
//削除ボタンを押したときに勝手に完了にならないようにする　stopProgation