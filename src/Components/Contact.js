import { Button, Grid, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup';

const Contact = () => {
  const [submittedData,setSubmittedData]= useState(null);
  const validationSchema =Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    contactNumber: Yup.string()
      .required('Contact Number is required')
      .matches(/^[0-9]{10}$/, 'Must be a valid phone number'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    address: Yup.string().required('Address is required'),
  });
  const formik=useFormik({
    initialValues:{
      fullName:"",
      contactNumber:"",
      email:"",
      address:""
    },
    validationSchema:validationSchema,
    onSubmit:(values)=>{
      console.log("values...",values)
      setSubmittedData(values);
    }
  })

  return (
    <Grid  sx={{position:"relative",height:"90vh",background:"#EFCADF",borderRadius:"10px",marginTop:"6px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <Grid 
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{textAlign:"center",background:"#fff",borderRadius:"10px",padding:"12px",width:"30%",marginTop:"4px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"10px"}}>
        <Typography sx={{fontSize:"20px",fontWeight:"400",fontFamily:"Arial"}}>Contact!!</Typography>
        <TextField
         variant='filled' 
         label="Full Name" 
         name="fullName"
         value={formik.values.fullName}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         error={formik.touched.fullName && Boolean(formik.errors.fullName)}
         helperText={formik.touched.fullName && formik.errors.fullName}
         inputProps={{
          style:{color:"#EFCADF"}
         }}
         InputLabelProps={{
          style:{
            color:"#EFCADF"
          }
         }}
         sx={{
          "& .MuiFilledInput-underline:before": { borderBottomColor: "#EFCADF" }, // Bottom border color when unfocused
          "& .MuiFilledInput-underline:after": { borderBottomColor: "#EFCADF" }, // Bottom border color when focused
        }}
        />
        <TextField 
        variant='filled'
         label="Contact Number"
         name="contactNumber"
         value={formik.values.contactNumber}
         onSubmit={formik.handleSubmit}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
         helperText={formik.touched.contactNumber && formik.errors.contactNumber}
         InputProps={{
          style:{
            color:"#EFCADF"
          }
         }}
         InputLabelProps={{
          style:{
            color:"#EFCADF"
          }
         }}
         sx={{
          "& .MuiFilledInput-underline:before": { borderBottomColor: "#EFCADF" }, // Bottom border color when unfocused
          "& .MuiFilledInput-underline:after": { borderBottomColor: "#EFCADF" }, // Bottom border color when focused
        }}/>
        <TextField variant='filled' label="Email Id"
                 name="email"
                 value={formik.values.email}
                 onSubmit={formik.handleSubmit}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 error={formik.touched.email && Boolean(formik.errors.email)}
                 helperText={formik.touched.email && formik.errors.email}
         InputProps={{
          style:{
            color:"#EFCADF"
          }
         }}
         InputLabelProps={{
          style:{
            color:"#EFCADF"
          }
         }}
          sx={{
            "& .MuiFilledInput-underline:before": { borderBottomColor: "#EFCADF" }, // Bottom border color when unfocused
            "& .MuiFilledInput-underline:after": { borderBottomColor: "#EFCADF" }, // Bottom border color when focused
          }}/>
        <TextField 
        variant='filled' 
        label="Address"
        name="address"
        value={formik.values.address}
        onSubmit={formik.handleSubmit}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.address && Boolean(formik.errors.address)}
        helperText={formik.touched.address && formik.errors.address}
        InputProps={{
          style:{
            color:"#EFCADF"
          }
         }}
         InputLabelProps={{
          style:{
            color:"#EFCADF"
          }
         }}
          sx={{
            "& .MuiFilledInput-underline:before": { borderBottomColor: "#EFCADF" }, // Bottom border color when unfocused
            "& .MuiFilledInput-underline:after": { borderBottomColor: "#EFCADF" }, // Bottom border color when focused
          }}/>
          <Button variant='contained' color="secondary" type="submit">Submit</Button>
    </Grid>
    {
      submittedData && (
        <Grid sx={{borderRadius:"20px",background:"#fff",padding:"20px",position:"absolute",top:"10px",zIndex:1,left:"980px"}}>
          <Grid sx={{borderRadius:"10px",background:"#EFCADF",padding:"10px"}}>
          <Typography>FullName : {submittedData.fullName}</Typography>
          <hr/>
          <Typography>Contact Number : {submittedData.contactNumber}</Typography>
          <hr/>
          <Typography>Email Id : {submittedData.email}</Typography>
          <hr/>
          <Typography>Address : {submittedData.address}</Typography>
          </Grid>
         
        </Grid>
      )
    }
    </Grid>
  )
}

export default Contact
