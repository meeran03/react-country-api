import {FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@material-ui/core';
import React from 'react';
import CountryTable from './Components/CountryTable';
import Footer from './Components/Footer';
import LanguageTable from './Components/LanguageTable';
import { getData } from './Services/API';
import Loader from './Components/Loader'

function App() {

  const [data,setData] = React.useState(null)
  const [value,setvalue] = React.useState('Country')
  const [loading,setLoading] = React.useState(true)

  React.useEffect(() => {
    getData().then(res => {
      setData(res);
      setLoading(false)
    })
    .catch(e => {
      if (!e.response) {
        alert("Network Error")
      }
      else {
        alert(e.message)
      }
    })
  },[])

  if (loading) return <Loader open={loading} />
  return (
    <div className='App' >
      
      <Typography align="center" color="primary" gutterBottom variant='h1'  >
        Country API Tables
      </Typography>
      
      <FormControl component="fieldset">
        <FormLabel component="legend">Select Table</FormLabel>
        <RadioGroup row value={value} onChange={(e) =>setvalue(e.target.value) }>
          <FormControlLabel value="Country" control={<Radio />} label="Countries" />
          <FormControlLabel value="Languages" control={<Radio />} label="Languages" />
        </RadioGroup>
      </FormControl>

      <Grid container xs={12} sm={12} md={12} justifyContent="center" >
        {value == "Country" ?        
                (<Grid item xs={12} sm={12} md={8}>
                    <CountryTable data={data} />
                    <Footer data={data} />
                </Grid>)
                :
                (<Grid item xs={12} sm={12} md={8}>
                    <LanguageTable data={data} />
                </Grid>)
        }
        </Grid>
        
    </div>
  );
}

export default App;
