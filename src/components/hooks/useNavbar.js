import { useEffect,useCallback, useMemo } from 'react'
import { setURL } from '../../redux/actions'
import {useDispatch} from 'react-redux'

const useNavbar = (searchTerm, tab) =>{
    const dispatch = useDispatch()
   
    useEffect(
        () => {
            dispatch(setURL(searchTerm,tab))
        },
        [searchTerm,tab]
    )

    

}

export default useNavbar
