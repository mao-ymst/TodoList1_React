import React from 'react'
import "./TodoControls.css"

export default function TodoControls({ currentFilter, onFilterChange, currentSort, onSortChange }) {
    return (
        <>
            <div className='todo-controls'>
                <div className='control-group'>
                    <button
                        onClick={() => onFilterChange("all")}
                        className={currentFilter === "all" ? "active" : ""}>
                        全て
                    </button>
                    <button
                        onClick={() => onFilterChange("active")}
                        className={currentFilter === "active" ? "active" : ""}
                    >
                        未完了
                    </button>
                    <button
                        onClick={() => onFilterChange("completed")}
                        className={currentFilter === "completed" ? "active" : ""}>
                        完了
                    </button>
                </div>


                <div className='control-group'>
                    <span>並び替え：</span>
                    <button
                        onClick={() => onSortChange("added")}
                        className={currentSort === "added" ? "active" : ""}>
                        追加順
                    </button>
                    <button
                        onClick={() => onSortChange("priority")}
                        className={currentSort === "priority" ? "active" : ""}>
                        優先順位順
                    </button>

                </div>
            </div>

        </>



    )
}


//13 appで作ったfilterButtonsの中身を持ってくる
//必要なpropsを受け取る
//見た目、選択時の見た目の変化をつける

//15 sort と filterの機能を管理する　ページを作成する
//FilterButton-->TodoControls　に変更する
//必要な部分すべてtodocontrolsに変更 app Todocontrolsを呼び出し
//appにあるsort機能を引っ越しする
//appで必要なpropsを渡す　ここで受け取る
//Sortの中身を受け取った内容に書き換える
//sort部分にもactiveを追加
//todocontrolsそれぞれのCSSを整える 
