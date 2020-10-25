import { useCallback, useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import _ from 'lodash'
//import { SEARCH_DEBOUNCE_TIME } from '../../../constants/searchDebounceTime'
//import { useError } from '../../../hooks/useError'

const SEARCH_DEBOUNCE_TIME = 1000

export function useSearch(setSearchBar, hasSearchResult ) {
 // const { error, setError, clearError } = useError()
  const dispatch = useDispatch()
  const [showBackBtn, setShowBackBtn] = useState(hasSearchResult)
  
  const onSearchTextChange = useCallback(searchTerm=>{
    dispatch(setSearchBar(searchTerm))  
  },
    [setSearchBar,dispatch]
  )

  // useEffect(() => {
  //   setShowBackBtn(hasSearchResult)
  // }, [hasSearchResult])
  return { onSearchTextChange, showBackBtn} //error, clearError }
}



