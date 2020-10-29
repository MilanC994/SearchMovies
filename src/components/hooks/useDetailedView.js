import { useCallback, useEffect } from 'react'
import { useDispatch} from 'react-redux'
import _ from 'lodash'
import { fetchVideos, fetchContentDetails } from "../../redux/actions";


const SEARCH_DEBOUNCE_TIME = 1000

export function useDetailedView( tab, id ) {
  const dispatch = useDispatch()
  
  const fetchDetails = useCallback((tab, id)=>{
    dispatch(fetchContentDetails(tab,id))  
  },
    [fetchContentDetails,dispatch]
  )

  useEffect(
    () => {
        fetchDetails(tab,id)
        dispatch(fetchVideos(tab,id))
    },
    [tab,id]
   
)

  
}



