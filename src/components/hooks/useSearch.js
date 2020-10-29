import { useCallback, useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setSearchBar } from '../../redux/actions'
import _ from 'lodash'
//import { SEARCH_DEBOUNCE_TIME } from '../../../constants/searchDebounceTime'
//import { useError } from '../../../hooks/useError'

const SEARCH_DEBOUNCE_TIME = 1000

export function useSearch() {
 // const { error, setError, clearError } = useError()
  const dispatch = useDispatch()
  const [showBackBtn, setShowBackBtn] = useState(null)
  
  const onSearchTextChange = useCallback(searchTerm=>{
    dispatch(setSearchBar(searchTerm))  
  },
    [setSearchBar,dispatch]
  )

  // useEffect(() => {
  //   setShowBackBtn(hasSearchResult)
  // }, [hasSearchResult])
  return { onSearchTextChange, showBackBtn}
}



