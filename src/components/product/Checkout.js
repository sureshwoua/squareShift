import { React, useEffect, useState } from "react";
import { Grid, Card, Typography, Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { Link ,useParams} from "react-router-dom";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import shirt from '../asserts/shirt.png';
import Header from "../navbar";
import { Box } from "@mui/system";
export default function Checkout(props) {
    return (

        <div>
               <Header />
        
         
          <Grid
          marginTop={2}
          container
          columnSpacing={3}
          rowSpacing={3}
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
       >
<Grid item xs={12} lg={6} md={6} lg={6} xl={6}>
        <Card>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"}}>
        <img style={{maxWidth:"100%",maxHeight:"320px"}} src={shirt}></img>
        <div>
       <p><strong>Product Name</strong>&nbsp;Cotton Shirt</p>
       <p><strong>Product Id</strong>&nbsp;Cotton Shirt</p>
           <p>  <strong>Quantity</strong>&nbsp;Cotton Shirt</p>
           <p>  <strong>Price</strong>&nbsp;Cotton Shirt</p>
      </div></div>
        </Card></Grid>
        <Grid item xs={12} lg={6} md={6} lg={4} xl={6}>
            <Card style={{padding:'20px'}}>
                <h4>Order Summary</h4>
                <hr />
                <strong>Subtotal </strong><br />
                <strong>Estimate Shipping </strong>
            </Card>
        </Grid>
       </Grid>
          
       <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            backgroundColor:'#ffffff',
            borderTopLeftRadius:"20px",
            borderTopRightRadius:"20px",
            padding:"20px",
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
         
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  type="address"
                  id="address"
                  autoComplete="new-password"
                />
              </Grid>
                 <Grid item xs={12} md={4} sm={6} xl={4} lg={4}>
                <TextField
                  required
                  fullWidth
                  name="city"
                  label="City"
                  type="text"
                  id="city"
                  autoComplete="new-password"
                />
              </Grid>
                 <Grid item xs={12} md={4} sm={6} xl={4} lg={4}>
                <TextField
                  required
                  fullWidth
                  name="state"
                  label="State"
                  type="text"
                  id="state"
                  autoComplete="new-password"
                />
              </Grid>
                 <Grid item xs={12} md={4} sm={6} xl={4} lg={4}>
                <TextField
                  required
                  fullWidth
                  name="pincode"
                  label="Pincode"
                  type="number"
                  id="pincode"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6} xl={4} lg={4}>
              <Card style={{padding:'20px'}}>
              
                <strong>Subtotal </strong><br /><br />
                <strong>Shipping Charge </strong>
                <hr />
                <strong>Total amount </strong>
            </Card>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            Checkout
            </Button>
           
          </Box>
        </Box>



               
          
        </div>
    );
}

