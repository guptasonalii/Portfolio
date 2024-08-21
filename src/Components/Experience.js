import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import sonali from "../Images/sonali.jpeg";

const Experience = () => {
  const [tabValue, setTabValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleTabClick = (index) => {
    if (tabValue === index) {
      setOpen(!open); // Toggle open state if the same tab is clicked
    } else {
      setTabValue(index);
      setOpen(true); // Open if a different tab is clicked
    }
  };
  const lan = [
    { id: 0, name: "Employee Management Portal" },
    { id: 1, name: "HR Portal" },
    { id: 2, name: "Builder (WorkCentivo)" },
  ];

  const tech = [
    {
      frontend: ["HTML", "CSS", "React JS", "MUI", "TypeScript"],
      backend: ["Node JS"],
    },
    {
      frontend: ["HTML", "CSS", "React JS", "MUI", "TypeScript", "Tailwind"],
      backend: ["ROR"],
    },
    {
      frontend: ["MUI", "CSS", "React Js (Class Component)"],
      backend: ["ROR"],
    },
  ];

  return (
    <Grid container>
      <Grid
        sx={{
          background: "#EFCADF",
          padding: "20px",
          borderRadius: "10px",
          width: "100%",
          marginTop: "10px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Arial",
            fontSize: "20px",
            borderBottom: "2px solid black",
          }}
        >
          Experience!!
        </Typography>
      </Grid>
      <Grid
        sx={{
          marginTop: "10px",
          background: "#EFCADF",
          display: "flex",
          gap: "30px",
          padding: "22px",
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <img
          src={sonali}
          alt="/"
          style={{
            marginLeft: "4px",
            marginTop: "2px",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <Grid sx={{ display: "flex", justifyContent: "center", flexDirection: "column", fontFamily: "Arial" }}>
          <Typography sx={{ fontSize: "15px" }}>Sonali Gupta</Typography>
          <Typography sx={{ fontSize: "18px" }}>Worked at Deeporion Technology</Typography>
          <Typography>Frontend Developer (1 year experience)</Typography>
        </Grid>
      </Grid>
      <Grid
        sx={{
          fontFamily: "Arial",
          background: "#EFCADF",
          marginTop: "10px",
          borderRadius: "10px",
          width: "100%",
          padding: "22px",
        }}
      >
        <Typography sx={{ fontSize: "20px" }}>Project :-</Typography>
        {lan.map((item, index) => (
          <Grid
            key={index}
            sx={{
              fontFamily: "Arial",
              borderRadius: "10px",
              background: "#fff",
              padding: "30px",
              marginTop: "10px",
              cursor: "pointer",
              position: "relative",
            }}
            onClick={() => handleTabClick(index)}
          >
            <Typography
              sx={{
                fontSize: "18px",
                background: tabValue === index ? "#EFCADF" : "#fff",
                width: "30%",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              {index + 1}. {item.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
      {open && (
        <Grid
          sx={{
            boxShadow: "10px 10px 5px #F695C5",
            background: "#EFCADF",
            borderRadius: "5px",
            width: "30%",
            padding: "40px",
            position: "absolute",
            top: "350px",
            left: "700px",
          }}
        >
          <Typography sx={{ background: "#fff", borderRadius: "5px", padding: "4px 10px" }}>Technology used</Typography>
          <ul style={{ fontFamily: "Arial", fontSize: "20px", textAlign: "center", listStyle: "square" }}>
            For Frontend
          </ul>
          {tech[tabValue].frontend.map((item, index) => (
            <Grid key={index} sx={{ background: "#fff", borderRadius: "10px" }}>
              <li style={{ marginTop: "2px", marginLeft: "4px" }}>{item}</li>
            </Grid>
          ))}
          <hr />
          <ul style={{ fontFamily: "Arial", fontSize: "20px", textAlign: "center", listStyle: "square" }}>
            For Backend
          </ul>
          {tech[tabValue].backend.map((item, index) => (
            <Grid key={index} sx={{ background: "#fff", borderRadius: "10px" }}>
              <li style={{ marginTop: "2px", marginLeft: "4px" }}>{item}</li>
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default Experience;
