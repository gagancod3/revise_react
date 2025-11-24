import React from 'react'
import { Button } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'
const About = () => {
  return (
    <div>
        <Button variant="outlined" component={Link} to='/about/contact'>CONTACT US</Button>
        <Button variant="outlined" component={Link} to='/about/subscription'>SUBSCRIPTION</Button>
        <Button variant="outlined" component={Link} to='/about/platforminfo'>PLATFORM INFO</Button>
        <Outlet></Outlet>
    </div>
  )
}

export default About