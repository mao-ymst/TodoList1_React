import React from 'react'

export default function TodoItem({ task, onDelete }) {
    return (
        <li key={task.id}>
            {task.text}
            <span>({task.createdAt})</span>
            <button
                onClick={() => onDelete(task.id)}>
                削除
            </button>
        </li>

    )
}

//6 listや削除ボタン担当のtodoItemページを作成
//TodoItem：子　が文字を受け取ったら　App：親　へ報告できるように
// props用意　名前は渡された名前と同じになるように注意
