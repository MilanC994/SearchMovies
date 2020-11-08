import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { fetchVideos, fetchContentDetails } from "../../redux/actions";
import { rootState } from '../../redux/stateTypes';

export function useDetailedView( id:string ) {
  const dispatch = useDispatch()

  const tab = window.location.pathname.includes('movies') ? 'movies' : 'tv-shows'

  const selectContentDetails = (state:rootState)=>state.dataReducer.contentDetails
  const contentDetails = useSelector(selectContentDetails)
  
  const selectVideos = (state:rootState)=>state.dataReducer.videos
  const videos = useSelector(selectVideos)

  const video = videos.find(vid => vid.site ==='YouTube')
  
  const fetchDetails = useCallback((tab, id)=>{
    dispatch(fetchContentDetails(tab,id))  
  },
    []
  )

  useEffect(
    () => {
        fetchDetails(tab,id)
        dispatch(fetchVideos(tab,id))
    },
    [tab, id, fetchDetails]
   
)
    
return { contentDetails, video }
  
}



