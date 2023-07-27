import React from 'react'
import "./DownloadApp.css"
import Playstore from "../../images/icons/googlePlay.png"
import Appstore from "../../images/icons/AppStore.png"

function DownloadApp() {
    return (
        <section className='download-app-section'>
            <div className='download-app-container'>
                <div className='download-app-text'>
                    <h2>Download our app to get the most out of it</h2>
                    <p>Get the app now and ride on! Discover the ease of bike rentals at your fingertips. Download today!
                    </p>
                    <div className='download-buttons'>
                        <img src={Playstore} width="30%"/>
                        <img src={Appstore} width="30%" />
                    </div>
                </div>
            </div>
        </section>
      )
    }

export default DownloadApp