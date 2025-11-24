import React from 'react'
import { Toolbar, AppBar, Button } from '@mui/material'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Button color='inherit' component={Link} to='/home'>Home</Button>
                <Button color='inherit' component={Link} to='/movies'>Movies</Button>
                <Button color='inherit' component={Link} to='/about'>About</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar