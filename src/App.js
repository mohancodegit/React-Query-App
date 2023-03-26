import { useState } from "react"
import { useQuery } from "react-query"
import './App.css'

const fetchData = async() =>{
  const response = await fetch("http://localhost:3000/InitialSet")
  return response
}
function App() {
    const [status, setStatus] = useState('')
    const {isLoading, isRefetching} = useQuery('statusCheck', fetchData,{
      refetchInterval:120000,
      refetchOnWindowFocus: false,
      cacheTime:120000,
      onSuccess:()=>{
        setStatus('Success')
      },
      onError:()=>{
        setStatus('Error')
      }
    })
  return (
    <div className="App">
    {isLoading ||isRefetching ? (<h5>Loading...</h5>):(<h5>{status}</h5>)}
    </div>
  )
}

export default App;
