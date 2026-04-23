import React, { useState } from 'react'
import TodoInput from './component/TodoInput/TodoInput';
import TodoItem from './component/TodoItem/TodoItem';
import './App.css'

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");


  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  const addTask = () => {
    if (inputText === "" || !inputText.trim()) return;

    const newTask = {
      id: Date.now(),
      text: inputText,
      isDone: false,
      createdAt: new Date().toLocaleDateString()
    };

    setTasks([...tasks, newTask]);

    setInputText("");

  }

  const deleteTask = (id) => {
    const newTasks =
      tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  const toggleTask = (id) => {
    const newTasks =
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      })
    setTasks(newTasks);
  }



  return (
    <div className='app-container'>
      <h1>My Todo List</h1>
      <TodoInput inputText={inputText} onChange={handleChange} onAdd={addTask} />
      <p>入力中の文字：{inputText}</p>
      <ul className='todo-list'>
        {tasks.map((task) => {
          return (
            <TodoItem
              task={task}
              onDelete={deleteTask}
              onToggle={toggleTask} />
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

//4 入力欄とボタン担当のコンポーネントに移動させる
// TodoInput.jsxの呼び出しと必要なpropsを渡す

//5 削除機能を作成
//各リストの横に削除ボタンを表示
//削除してくれる関数を作成　filter 
//指定したid以外のtaskを残し　新しい配列を作る
// buttonに削除機能をつける

//7 taskの完了・未完了の関数(状態を反転させる)を作成
//作成した関数をapp-->TodoItemに渡す props