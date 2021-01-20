import React from 'react'
import googleImage from '../../assets/googleImage.png';
import githubImage from '../../assets/githubImage.png';
import twitterImage from '../../assets/twitterImage.png';
import styles from './LoginPage.module.css';

export default function LoginPage() {

    const googleLogin = () => {
        window.open("http://localhost:4000/auth/google", "_self");
    }

    const githubLogin = () => {
        window.open("http://localhost:4000/auth/github", "_self");
    }
    
    const twitterLogin = () => {
        window.location.href = "http://localhost:4000/auth/twitter"
    }


    return (
        <div className={styles.loginPage}>
            <div className={styles.loginForm}>
                <h1>Login</h1>
                <div className={styles.googleContainer} onClick={googleLogin}>
                    <img src={googleImage} alt="Google Icon" />
                    <p>Login With Google</p>
                </div>

                <div className={`${styles.googleContainer} ${styles.githubContainer}`} onClick={githubLogin}>
                    <img src={githubImage} alt="Github Icon" />
                    <p>Login With Github</p>
                </div>

                <div className={`${styles.googleContainer} ${styles.twitterContainer}`} onClick={twitterLogin}>
                    <img src={twitterImage} alt="Twitter Icon" />
                    <p>Login With Twitter</p>
                </div>

            </div>

        </div>
    )
}
