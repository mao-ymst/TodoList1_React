import React, { useState } from 'react'
import TodoInput from './component/TodoInput/TodoInput';
import TodoItem from './component/TodoItem/TodoItem';
import './App.css'
import TodoControls from './component/TodoControls/TodoControls';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");
  const [priority, setPriority] = useState("medium");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("added");
  

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  const addTask = () => {
    if (inputText === "" || !inputText.trim()) return;

    const newTask = {
      id: Date.now(),
      text: inputText,
      isDone: false,
      createdAt: new Date().toLocaleDateString(),
      priority: priority
    };

    setTasks([...tasks, newTask]);

    setInputText("");
    setPriority("medium");

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

  const priorityOrder = {
    high: 1,
    medium: 2,
    low: 3
  }


  const filteredTasks =
    tasks.filter((task) => {
      if (filter === "active") return !task.isDone;
      if (filter === "completed") return task.isDone;
      return true;
    })
      .sort((a, b) => {
        if (sortBy === "priority") {
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        }
        return a.id - b.id;
      })


  return (
    <div className='app-container'>
      <h1>My Todo List</h1>
      <TodoInput
        inputText={inputText}
        onChange={handleChange}
        onAdd={addTask}
        priority={priority}
        onPriorityChange={setPriority} />
      <p>入力中の文字：{inputText}</p>

      <TodoControls
        currentFilter={filter}
        onFilterChange={setFilter}
        currentSort={sortBy}
        onSortChange={setSortBy} />

      <ul className='todo-list'>
        {filteredTasks.map((task) => {
          return (
            <TodoItem
              key={task.id}
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

//9 taskに優先順位をつける
//priorityを覚えて管理するstateを設定
//task追加でpriorityを追加
//taskに追加したらmediumに戻るように設定
//todoInputにpriorityを渡す ※priorityの変化したときの状態も渡す

//12 今どの状態のフィルターか覚えるための stateを作成
//filterで絞り込んだtaskを作る　派生state   //return true; --> all
//画面に切り替えbuttonを用意する
//buttonにfilterの条件の結びつける
// list にfilter内容を反映させるためにtasks.map-->filteredTasks.mapに変更
//filterbuttonsのコンポーネントに引っ越し
//filterButtonsを呼び出し　props渡す

//14 優先順位順に並べ替えるソート機能を作る
//並び替えの状態を覚えるstateを設定
//priorityで並べ替えができるように　優先順位を数字に変換
//filterで並び替えた後の結果をさらに　sortで並べ替える
//filterとsortを繋げる　filter部分に足す
//filterButtons の下に動作確認ボタンを作成

//16 todocontrolsで必要なpropsを渡す sort