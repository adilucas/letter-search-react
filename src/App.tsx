import { useState } from 'react'

import { SearchInput } from './components'

function App() {
  const [letter, setLetter] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800">Letter Search</h1>
        <SearchInput value={letter} onChange={setLetter} />
      </div>
    </div>
  )
}

export default App
