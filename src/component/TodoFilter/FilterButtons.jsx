import React from 'react'
import "./FilterButtons.css"

export default function FilterButtons({ onFilterChange }) {
    return (
        <div className='filter-buttons'>
            <button onClick={() => onFilterChange("all")}>全て</button>
            <button onClick={() => onFilterChange("active")}>未完了</button>
            <button onClick={() => onFilterChange("completed")}>完了</button>
        </div>

    )
}


//13 appで作ったfilterButtonsの中身を持ってくる
//必要なpropsを受け取る
//見た目、選択時の見た目の変化をつける