import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Grid className='bg-black text-white text-center mt-10'
        container
        sx={{bgcolor: 'black', colo: 'white', py:3}}
        >
            <Grid item xs={12} sm={6} md={3}>

                <Typography className='pb-5' variant='h6'>{' '}Luvubrand{' '}</Typography>
                <div>
                  <Button className='pb-5' variant='h6' gutterBottom>{' '}About{' '}</Button>
                </div>
                <div>
                  <Button className='pb-5' variant='h6' gutterBottom>{' '}Contact Us{' '}</Button>
                </div>
                <div>
                  <Button className='pb-5' variant='h6' gutterBottom>{' '}Shipping Policy{' '}</Button>
                </div>

            </Grid>

            <Grid className='pt-20' item xs={12}>
              <Typography variant='body2' component='p' align='center'>&copy; 2023 Luvubrand. All rights reserved</Typography>
            </Grid>
        </Grid>
    </div>
  )
}

export default Footer