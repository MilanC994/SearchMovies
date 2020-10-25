
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'

const useContentContainer = (fetchData,url) =>{
    const dispatch = useDispatch()    
    useEffect(()=>{
        const fetch = async () => {
          await dispatch(fetchData(url))
        };
     
        fetch();
      },[url])
}

export default useContentContainer