import './App.css'

function App() {
 const tasks = ['Develop a React project', 'Watch Anime', 'Listen to Music', 'Read a book']
 return(
   <div>
      <h1>Todo List:</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}{" "}
            <button>Delete</button>
          </li>
        ))}
      </ul>
   </div>
  )
}

export default App
