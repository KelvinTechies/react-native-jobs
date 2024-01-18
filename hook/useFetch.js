import { useEffect, useState } from "react"
import axios from "axios"
 const useFetch=(endpoint, query )=>{
    const [data, setData]=useState([])
    const [isLoading, setIsLoading]=useState(true)
    const [error, setError]=useState(null)
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': "6bd32dbdd2msh86c903b4053dd2ep14729cjsn4956dd7b75f9",
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: {
         ...query
        },
      
      };
      const fetchData=async()=>{
        try {
            const response= await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert("There was an error")
        }finally{
            setIsLoading(false)

        }
      }
      useEffect(()=>{
        fetchData()
      }, [])


      const reFetch=()=>{
        setIsLoading(true)
        fetchData()
      }

      return {data, isLoading, error, reFetch}
}


export default useFetch