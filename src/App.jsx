import TodoItem from "./component/TodoItem"

//1 仮のtodoの内容を用意
const MOCK_TODOS = [
  { id: 1, title: "Reactの基礎を学ぶ", isCompleted: false },
  { id: 2, title: "Todo Listを作る", isCompleted: false },
  { id: 3, title: "手書きノートにまとめる", isCompleted: true },
]

function App() {

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <ul>
          {MOCK_TODOS.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}

        </ul>

      </div>
    </>
  )
}

export default App

//2 仮のTodoの内容をlistとして画面に表示する
//3 TodoItemを呼び出し、propsを渡す
