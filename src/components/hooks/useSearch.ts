import { useCallback, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setSearchBar, fetchData } from '../../redux/actions'
import { rootState } from "../../redux/stateTypes";
import _ from 'lodash'


const SEARCH_DEBOUNCE_TIME = 1000

export function useSearch() {
 // const { error, setError, clearError } = useError()

 const selectTab = (state:rootState)=>state.navbarReducer.currentTab
  const tab = useSelector(selectTab)
  const dispatch = useDispatch()
  const [showBackBtn, setShowBackBtn] = useState(null)

  const debouncedFetch =useCallback( _.debounce(async( searchTerm:string )=>{
    await dispatch(fetchData(searchTerm, tab))
  },SEARCH_DEBOUNCE_TIME),[tab])
  
  const onSearchTextChange = useCallback(searchTerm=>{
    dispatch(setSearchBar(searchTerm))
    debouncedFetch(searchTerm)  
  },
    [tab]
  )

  return { onSearchTextChange, showBackBtn}
}



