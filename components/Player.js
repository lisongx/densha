import React from 'react'
import ReactPlayer from 'react-player'

import styles from '../styles/Player.module.css'

// import {
//     useWindowWidth,
// } from '@react-hook/window-size/throttled'


function Player() {
    // const width = useWindowWidth()
    const artCount = 3;
    const renderItems = Array.from(Array(artCount).keys())

    return (<div className={styles.player}>
        {
            renderItems.map((_, index) => {
                return (<div className={styles.player_item} key={index}>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=wVeTxfvdLb4'
                        muted={true}
                        width={"100%"}
                        height={"100%"}
                        key={index}
                        controls={false}
                        loop={true}
                        config={{
                            youtube: {
                                playerVars: { modestbranding: 1 }
                            },
                        }}
                        playing={true}
                    />
                </div>)
            })
        }
    </div>)
}

export default Player


