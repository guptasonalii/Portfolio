import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const webStyle={
        MainContainer:{

            display:"flex",
            justifyContent:"space-between",
            fontFamily:"Arial",
            // fontWeight:"bold",
            fontSize:"20px",
            background:"#2c2626",
            padding:"18px",
              color:"#EFCADF",
              position:"sticky",
              top:0
            // height:"20%"
        },
        rightContainer:{
            display:"flex",
            gap:"60px"
        },
        LinkStyle:{
          textDecoration:"none",
          color:"#EFCADF"
        }
    }
  return (
    <Grid style={webStyle.MainContainer}>
      <grid>
        <Typography >
            Portfolio
        </Typography>
      </grid>
      <Grid style={webStyle.rightContainer}>
        <Link to="/" style={webStyle.LinkStyle}>About</Link>
        <Link to="/skills"  style={webStyle.LinkStyle}>Skills</Link>
        <Link to="/experience"  style={webStyle.LinkStyle}>Experience</Link>
        <Link to="/contact"  style={webStyle.LinkStyle}>Contact</Link>
      </Grid>
    </Grid>
  )
}

export default Header
