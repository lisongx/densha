import React from 'react'
import ReactPlayer from 'react-player'

import styles from '../styles/Player.module.css'


function Player() {
    return (<div className={styles.player}>
        {
            [0, 1, 2].map((item, index) => {
                return (<ReactPlayer
                    url='https://youtu.be/wVeTxfvdLb4'
                    muted={true}
                    width={380}
                    height={400}
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
                )
            })
        }
    </div>)
}

export default Player


