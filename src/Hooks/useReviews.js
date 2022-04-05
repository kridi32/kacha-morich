import { useEffect, useState } from "react"

const useReviews = () =>{
    const [reviews, setReveiews] = useState([]);
    useEffect( ()=>{
        fetch("https://api.jsonbin.io/b/624c52e6d96a510f029173b1")
        .then(res => res.json())
        .then(data => setReveiews(data))
    },[])
    return [reviews, setReveiews]
}
export default useReviews;