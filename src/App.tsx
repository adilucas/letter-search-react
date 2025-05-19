import { SearchInput, ResultCount } from './components'
import { useSearch } from './hooks';

function App() {
  const { letter, handleSearch, count, isLoading, error } = useSearch();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800">Letter Search</h1>
        <SearchInput value={letter} onChange={handleSearch} />
        <ResultCount letter={letter} count={count} isLoading={isLoading} error={error} />
      </div>
    </div>
  )
}

export default App
