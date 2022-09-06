import { useEffect, useState } from "react"

const UseBooking = ()=>{
    const[booking, setBooking] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/booing')
        .then(res=>res.json())
        .then(data=> setBooking(data));
    },[]);
    return [booking, setBooking];
}
export default UseBooking;