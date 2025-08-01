import { useState, useEffect } from 'react'
import './App.css'
import DataTable from './components/DataTable'

function App() {
  const [data, setData] = useState([])
  const fetchData = async () => {
    try{
      const res = await fetch("/firebase", {
        method : 'GET',
        headers: {
          "access-control-allow-origin" : "*",
          "Content-type" : "application/json; charset = UTF-8" 
        }
      });
      if (!res.ok){
        throw new Error(`HTTP ERROR ! status : ${res.status}`)
      }
      const json = await res.json();
      setData(data => [...data, json]) 
    }catch(error) {
      console.error("Error fetching data : ", error);
    }
  };

  useEffect(() => {
    
    fetchData();

    const interval = setInterval(fetchData, 10000);

    return () => {
      clearInterval(interval)
    }
  }, [])
  
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h2>🌦️ Weather Dashboard (React)</h2>
        <p>Fetching data every 5 seconds...</p>
        <DataTable data={data} />
    </div>
  )
}

export default App
