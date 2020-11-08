
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from 'react'
import {  fetchData } from "../../redux/actions";
import { rootState } from "../../redux/stateTypes";


interface useContentContainerArgs{
  tab: string 
}

const useContentContainer = ({tab }:useContentContainerArgs) =>{

  const selectSearchTerm = (state:rootState)=>state.navbarReducer.searchBar
  const searchTerm = useSelector(selectSearchTerm)

  const selectData = (state:rootState)=>state.dataReducer.data
  const data = useSelector(selectData)

  const dispatch = useDispatch()
 
    const getData = useCallback(async() => {
      await dispatch(fetchData(searchTerm, tab))
    },[tab])

    useEffect(()=>{
          const fetch = async () => {
          await getData()
        };
        fetch();
      },[tab, getData])

  return { data }
}

export default useContentContainer