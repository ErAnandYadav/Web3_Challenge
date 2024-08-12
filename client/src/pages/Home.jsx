import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import useUser from '../hooks/useUser';

export default function Home() {
    const { user } = useAuth();
    const getUser = useUser()

    useEffect(() => {
        getUser()
    }, [])

    console.log(user.user_details , "13");
    

    return (
        <div className='container mt-3'>
            <h2>
                <div className='row'>
                {user?.user_details?.email !== undefined ?
               <div>
                    <div className="mb-12">
                         List user Ethereum balance
                    </div>
                    <div className="mb-12">
                     Ethereum Balance : {user?.ethereum_balance}
                    </div>
                </div>
                    :
                <div className="mb-12">
                Please login first
                </div>
                        
}
                </div>
            </h2>
        </div>
    )
}
