
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'

const useContentContainer = (fetchData,url,setTab,tab) =>{
    const dispatch = useDispatch()    
    useEffect(()=>{
        dispatch(setTab(tab))
        const fetch = async () => {
          await dispatch(fetchData(url))
        };
     
        fetch();
      },[url,tab])
}

export default useContentContainer