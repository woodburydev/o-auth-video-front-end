import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import { AxiosResponse } from 'axios';

export const myContext = createContext({});
export default function Context(props: any) {

    const [userObject, setUserObject] = useState<any>();

    useEffect(() => {
        axios.get("https://o-auth-video-backend.herokuapp.com/getuser", { withCredentials: true }).then((res: AxiosResponse) => {
            console.log(res);
            if (res.data) {
                setUserObject(res.data);
            }
        })
    }, [])
    return (
        <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
    )
}
