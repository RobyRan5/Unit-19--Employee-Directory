import useAxios from 'axios-hooks'
 
function App() {
  const [{ data, loading, error }, refetch] = useAxios(
    'https://api.myjson.com/bins/820fc'
  )
 
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
 
  return (
    <div>
      <button onClick={refetch}>refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}