import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import sonali from "../Images/sonali.jpeg";
import Person2Icon from '@mui/icons-material/Person2';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const About = () => {
  const infoItems = [
    { icon: <Person2Icon />, text: 'Sonali Gupta' },
    { icon: <MobileFriendlyIcon />, text: '+91 8938867053' },
    { icon: <EmailIcon />, text: 'sonaligupta1498@gmail.com' },
    { icon: <LinkedInIcon />, text: 'https://www.linkedin.com/in/sonali-gupta14/' },
    { icon: <LocationOnIcon />, text: 'Jaipur, Rajasthan' },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2}>
        {/* Left side */}
        <Grid 
          item 
          xs={4} 
          sx={{ 
            background: "#EFCADF", 
            padding: "50px", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            flexDirection: "column",
            borderRadius: "10px",
            marginTop: "4px",
            marginLeft: "10px", // Added left margin for gap
          }}
        >
          <img 
            src={sonali} 
            alt="Sonali Gupta"  
            style={{ 
              width: "150px", 
              height: "150px", 
              borderRadius: "50%", 
              objectFit: "cover",
              marginRight: "50%"
            }}
          />
          {infoItems.map((item, index) => (
            <Box 
              key={index} 
              sx={{ 
                display: "flex", 
                alignItems: "center",
                gap: "10px", 
                marginTop: index === 0 ? "10%" : "8%", 
                width: "100%" 
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  borderRadius: "4px",
                }}
              >
                {item.icon}
              </Box>
              <Typography>{item.text}</Typography>
            </Box>
          ))}
        </Grid>

        {/* Right side */}
        <Grid 
          item 
          xs={7.8} 
          sx={{ 
            background: "#F695C5", 
            borderRadius: "10px", 
            marginTop: "4px",
            marginLeft: "10px", // Added left margin for gap
            paddingRight: "10px", // Added right padding for consistency
          }}
        >
          <Box 
            sx={{ 
              width: "70%", 
              background: "#ffffff", 
              borderRadius: "10px", 
              padding: "0px", 
              display: "flex", 
              justifyContent: "center", 
              marginTop: "10px", 
              marginLeft: "20px" 
            }}
          >
            <Box sx={{ display: "flex", gap: "10px", padding: "40px" }}>
              <Person2Icon />
              <Typography>About ME!</Typography>
            </Box>
          </Box>
          <Box 
            sx={{ 
              width: "70%", 
              height:"50%",
              background: "#EFCADF", 
              borderRadius: "10px", 
              marginTop: "10px", 
              marginLeft: "20px", 
              padding: "30px 20px 50px 50px" 
            }}
          >
            <Typography 
              sx={{ 
                fontSize: "15px", 
                fontFamily: "Arial", 
                fontWeight: "400" 
              }}
            >
              My name is Sonali Gupta. I hold a BTech degree in Computer Science from Jayoti Vidyapeeth Women's University, Jaipur. I have one year of experience as a Frontend Developer, where I've honed my skills in building responsive and user-friendly web applications. I'm passionate about creating seamless user experiences and continuously learning new technologies to enhance my development expertise.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
