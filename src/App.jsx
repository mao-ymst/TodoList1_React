
//1 仮のtodoの内容を用意
const MOCK_TODOS = [
  { id: 1, title: "Reactの基礎を学ぶ", isCompleted: false },
  { id: 2, title: "TodoListを作る", isCompleted: false },
  { id: 3, title: "手書きノートにまとめる", isCompleted: true },
]

function App() {

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <ul>
          {MOCK_TODOS.map((todo) => (
            <li key={todo.id}>
              {todo.title}
            </li>
          ))}
        </ul>

      </div>
    </>
  )
}

export default App

//2 仮のTodoの内容をlistとして画面に表示する
