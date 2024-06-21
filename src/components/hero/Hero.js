import React from 'react'
import Carousel  from 'react-material-ui-carousel';
import {Paper} from '@mui/material';


const Hero = ({movies}) => {
  return (
    <div>
        <Carousel>
            {
                movies.map((movie) => {
                    return(
                        <Paper>
                            <div className= 'movie'
                        </Paper>
                    )
                })
            }
        </Carousel>

    </div>
  )
}

export default Hero