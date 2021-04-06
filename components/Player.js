import React from 'react'
import ReactPlayer from 'react-player'

import styles from '../styles/Player.module.css'


function Player() {
    return (<div className={styles.container}>
        {
            [0, 1, 2].map(() => {
                return (<ReactPlayer
                    url='https://www.youtube.com/watch?v=brPzGMDfMgk'
                    muted={true}
                    height={400}
                    controls={false}
                    loop={true}
                    config={{
                        youtube: {
                            playerVars: { modestbranding: 1 }
                        },
                    }}
                    playing={true}
                />)
            })
        }
    </div>)
}

export default Player
