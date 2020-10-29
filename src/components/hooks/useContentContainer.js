
import { useDispatch } from "react-redux";
import { useCallback, useEffect, useRef } from 'react'
import { fetchData, setTab } from "../../redux/actions";
import _ from 'lodash'

const useContentContainer = (url,tab, searchTerm) =>{
  const didMountRef = useRef(false);
    const dispatch = useDispatch()  
    const debouncedFetch =useCallback( _.debounce(async(url)=>{
      await dispatch(fetchData(url))
    },1000),[])

    const getData = useCallback(async(url) => {
      await dispatch(fetchData(url))
    },[url])

    useEffect(()=>{
          const fetch = async () => {
           dispatch(setTab(tab))
          await getData(url)
        };
        fetch();
      },[tab,url])

      useEffect(()=>{
        //skip initial render
        if (didMountRef.current)
           debouncedFetch(url)
        else
          didMountRef.current = true;
        
        return debouncedFetch.cancel
      },[searchTerm])
}

export default useContentContainer