import React, { useContext } from 'react'
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { myContext } from '../../Context';
import { IUser } from '../../types/maintypes';


export default function NavBar() {
    const userObject = useContext(myContext) as IUser;

    const logout = () => {
        axios.get("https://o-auth-video-backend.herokuapp.com/auth/logout", {
            withCredentials: true
        }).then((res: AxiosResponse) => {
            if (res.data === "done") {
                window.location.href = "/"
            }
        })
    }

    return (
        <div className={styles.navBarWrapper}>
            <ul className={styles.navBar}>
                <li><Link to='/'>Home</Link></li>
                {
                    userObject ? (
                    <li onClick={logout}>Logout </li>
                    ) : (
                        <li><Link to='/login'>Login</Link></li>
                    )
                }
            </ul>
        </div>

    )
}
