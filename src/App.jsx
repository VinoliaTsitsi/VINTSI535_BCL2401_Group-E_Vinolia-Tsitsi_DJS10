import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
            <header className="App-header">
                <h1>Blog Posts</h1>
            </header>
            <main>
                <PostList />
            </main>
        </div>
    </>
  )
}

export default App
