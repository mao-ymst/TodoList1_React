import React, { useState } from 'react'
import TodoInput from './component/TodoInput';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");

  const addTask = () => {
    if(inputText === "" || !inputText.trim) return;

    const newTask = {
      id: Date.now(),
      text: inputText,
      isDone: false,
      createdAt: new Date().toLocaleDateString()
    };

    setTasks([...tasks, newTask]);

    setInputText("")
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div style={{padding: '20px'}}>
      <h1>My Todo List</h1>
      <TodoInput value={inputText} onChange={handleChange} onAdd={addTask}/>
      <p>入力中の文字：{inputText}</p>
      <ul>
        {tasks.map((task) => {
          return (
          <li key={task.id}>
            {task.text}
            <span>({task.createdAt})</span>
          </li>
        )
      })
      }
      </ul>
    </div>
  )
}


//1 まずは大きな枠で動くものを造ってから分割
//入力テキストを記憶させる箱を作る
//文字が入力したらstateが更新するようにする　onChange
// inputとstateを連携させる

//2 複数のtaskを保存するためにstateを作成
//新しいtaskのオブジェクトを作成
//配列を更新して　今の配列に新しいtaskを合体させる --> 入力欄空にする
//task追加用にbuttonに関数をつける

//3 tasksにたまったデータを取り出してlistで表示する map
//list １つ１つにユニークなkeyをつける　判別できるように

//4 TodoInput.jsxの呼び出しと必要なpropsを渡す