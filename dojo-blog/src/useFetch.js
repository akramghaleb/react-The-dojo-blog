import {useState , useEffect} from 'react';

const useFetch = (url) =>{

    const [data ,setData] = useState(null)
    const [isPending ,setIsPending] = useState(true)
    const [error ,setError] = useState(null)

    useEffect(()=>{

        fetch(url)
            .then((res)=>{
                if(! res.ok){
                    throw Error('could not fetch the data');
                }
                return res.json();
            })
            .then((d)=>{
                setData(d);
                setIsPending(false);
                setError(null);
            })
            .catch(err=>{
                setIsPending(false);
                setError(err.message);
            });

      } , [url]);

      return {data ,isPending , error }
}

export default useFetch;