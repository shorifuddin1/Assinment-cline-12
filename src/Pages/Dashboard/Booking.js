import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'
import id from 'date-fns/locale/id/index.js';
import UseBooking from '../Shared/useBooking';


const Booking = () => {

    
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    // console.log(user)
    const email = user?.email;
    const { data: booking, refetch,isLoading } = useQuery(['booking',email ], () => {
        return fetch(`http://localhost:5000/booking/${user?.email}`)
            .then(res => res.json());
            
    })

    

    // const[DeleteBooking, setDeleteBooking] = useState(null);

    // const { data: booking, isLoading, refetch } = useQuery('booking', () => fetch('http://localhost:5000/booking', {
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => res.json()));

    // if (isLoading) {
    //     return <Loading></Loading>
    // }


const deleteBooking = id =>{
    fetch(`http://localhost:5000/booking/${id}` ,{ method : 'DELETE' , headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
       }})
       
}
    refetch()
    console.log(booking)
        if(isLoading){
            return <Loading></Loading>
        }
        
        
    return (
        <div>
            <h2>Parches Product: {booking?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Remove</th>
                            <th>Prement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking?.map((product,index) =><tr>
                                <th><img src={product?.image} alt='Photo'/></th>
                                <td>{product?.name}</td>
                                <td>{product?.price}</td>
                                <td><button className='btn btn-primary' onClick={()=>deleteBooking(product._id)}>Remove</button></td>
                                <td><button className='btn btn-primary'>Prement</button></td>
                                
                                
                            </tr>)
                            
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Booking;