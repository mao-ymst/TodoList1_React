import React, { useState } from 'react'
import './TodoItem.css'

export default function TodoItem({ task, onDelete, onToggle, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text)

    return (
        <li
            className='todo-item'
            key={task.id}>
            {isEditing ? (
                // 編集モード
                <>
                <div className='edit-area'>
                    <input
                        className='edit-input'
                        type='text'
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)} />
                    <button 
                        className='save-btn'
                        onClick={() => {
                            onUpdate(task.id, editText);
                            setIsEditing(false)
                    }}>保存</button>
                    <button
                        className='cancel-btn'
                        onClick={() => setIsEditing(false)}>キャンセル</button>

                </div>
                </>
            ) : (
                // 通常モード
                <>
                    <input
                        className='todo-checkbox'
                        type='checkbox'
                        checked={task.isDone}
                        onChange={() => onToggle(task.id)}
                    />
                    <span
                        className={`todo-text ${task.isDone ? "is-done" : ""}`}>
                        {task.text}
                    </span>
                    <span className={`priority-badge ${task.priority}`}>
                        {task.priority}
                    </span>
                    <span
                        className='todo-date'>
                        ({task.createdAt})</span>
                    <button
                        className='edit-btn'
                        onClick={() => setIsEditing(true)}>
                        編集
                    </button>
                    <button
                        className='delete-btn'
                        onClick={(e) => {
                            e.stopPropagation()
                            onDelete(task.id)
                        }}>
                        削除
                    </button>

                </>
            )}
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

//11 priorityをlistに表示させる 文字を表示する場所作成
//listのpriorityにデザインをつける　priorityごとの変わるように設定

//17 taskの編集を作成
//編集モードかどうかを状態を保存する　state
//編集中のテキストを保存する　state
//見た目の条件分岐を設定　編集モードtrueの表示と通常モードfalseの表示を入れ替える
//保存ボタンが押された時の処理(false)に変更
//編集用ボタンの設置
//保存を実行する、中身のデータを書き換える関数をappに作成
//updateTaskをpropsで受け取る

//19 編集時のCSSを追加する