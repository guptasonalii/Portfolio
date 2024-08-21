import { Grid, Typography, Box, LinearProgress } from '@mui/material';
import React, { useState } from 'react';
import bg from '../Images/react.jpg'

const Skills = () => {
  const [tabValue, setTabValue] = useState("html");

  const handleTabClick = (value) => {
    setTabValue(value);
  };

  const skillLevels = {
    html: {
      name: "HTML",
      description: "HTML!!",
      progress: 80,
    },
    css: {
      name: "CSS",
      description: "CSS",
      progress: 70,
    },
    js: {
      name: "JS",
      description: "JS",
      progress: 60,
    },
    react: {
      name: "React Js",
      description: "REACT JS",
      progress: 60,
    },
    mui: {
      name: "MUI",
      description: "MUI",
      progress: 60,
    },
    tailwind: {
      name: "TAILWIND",
      description: "TAILWIND",
      progress: 60,
    },
  };

  return (
    <Grid>
      <Grid 
        container 
        direction="column" 
        sx={{ background: "#EFCADF", padding: "20px", borderRadius: "10px", marginTop: "20px", position: "relative" }}
      >
        <Typography 
          sx={{ 
            fontSize: "20px", 
            fontFamily: "Arial", 
            borderBottom: "2px solid black", 
            textAlign: "center", 
            borderRadius: "5px",
            marginBottom: "20px" 
          }}
        >
          My Skills!!
        </Typography>

        <Grid container sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginBottom: "20px" }}>
          <Grid 
            item 
            sx={{ cursor: "pointer", padding: "10px", backgroundColor: tabValue === "html" ? "#F695C5" : "transparent", borderRadius: "5px" }} 
            onClick={() => handleTabClick("html")}
          >
            <Typography>HTML</Typography>
          </Grid>
          <Grid 
            item 
            sx={{ cursor: "pointer", padding: "10px", backgroundColor: tabValue === "css" ? "#F695C5" : "transparent", borderRadius: "5px" }} 
            onClick={() => handleTabClick("css")}
          >
            <Typography>CSS</Typography>
          </Grid>
          <Grid 
            item 
            sx={{ cursor: "pointer", padding: "10px", backgroundColor: tabValue === "js" ? "#F695C5" : "transparent", borderRadius: "5px" }} 
            onClick={() => handleTabClick("js")}
          >
            <Typography>JS</Typography>
          </Grid>
          <Grid 
            item 
            sx={{ cursor: "pointer", padding: "10px", backgroundColor: tabValue === "react" ? "#F695C5" : "transparent", borderRadius: "5px" }} 
            onClick={() => handleTabClick("react")}
          >
            <Typography>React JS</Typography>
          </Grid>
          <Grid 
            item 
            sx={{ cursor: "pointer", padding: "10px", backgroundColor: tabValue === "mui" ? "#F695C5" : "transparent", borderRadius: "5px" }} 
            onClick={() => handleTabClick("mui")}
          >
            <Typography>MUI</Typography>
          </Grid>
          <Grid 
            item 
            sx={{ cursor: "pointer", padding: "10px", backgroundColor: tabValue === "tailwind" ? "#F695C5" : "transparent", borderRadius: "5px" }} 
            onClick={() => handleTabClick("tailwind")}
          >
            <Typography>Tailwind</Typography>
          </Grid>
        </Grid>

        <Box sx={{ position: "relative", zIndex: 1, marginTop: "20px" }}>
          <Box 
            sx={{ 
              padding: "10px", 
              backgroundColor: "#F695C5", 
              borderRadius: "10px", 
              position: "absolute", 
              width: "60%", 
              left: "50%", 
              transform: "translateX(-50%)",
              zIndex: 10, 
              boxShadow: 3 
            }}
          >
            <Box sx={{ background: "#fff", borderRadius: "5px", padding: "10px" }}>
              <Typography sx={{ fontSize: "15px", fontFamily: "Arial", textAlign: "center" }}>
                {skillLevels[tabValue].description}
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={skillLevels[tabValue].progress} 
                color="secondary"
                sx={{ height: "10px", borderRadius: "5px", marginTop: "10px" }}
              />
            </Box>
          </Box>
        </Box>

      </Grid>
      {/* <Grid>
        <img src={bg} alt="/"/>
      </Grid> */}
    </Grid>
  );
};

export default Skills;
