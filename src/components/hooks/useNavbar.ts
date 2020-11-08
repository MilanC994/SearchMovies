import { useEffect } from 'react'
import { setTab } from '../../redux/actions'
import {useDispatch, useSelector} from 'react-redux'
import { rootState } from "../../redux/stateTypes"


const useNavbar = () =>{
    const dispatch = useDispatch()
    const selectSearchTerm = (state:rootState)=>state.navbarReducer.searchBar
    const searchTerm = useSelector(selectSearchTerm)
    const selectTab = (state:rootState)=>state.navbarReducer.currentTab
    const tab = useSelector(selectTab)

    useEffect(()=>{
        const path = window.location.pathname.substring(1)
            const fetch = () => {   
                dispatch(setTab(path))
          };

          if(path ==='movies' || path === 'tv-shows') fetch()
        },[window.location.pathname])

    return { searchTerm, tab }
}

export default useNavbar
