import { useEffect,useCallback } from 'react'
import {useDispatch} from 'react-redux'

const useNavbar = (setUrl, searchTerm, tab) =>{
    const dispatch = useDispatch()
    useEffect(
        () => {
            console.log("u Navbar use effectu", searchTerm)
            dispatch(setUrl(searchTerm,tab))
        },
        [searchTerm,tab]
    )

}

export default useNavbar
