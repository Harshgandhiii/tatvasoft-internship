import React from "react";
import '../pages/Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search'
import img1 from '../images/tatvasoft-logo.png';
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { Autocomplete } from "@mui/material";


function Header() {

  const nav = useNavigate();
  return (


    <div>
      <div className='upperredline'></div>
      <div className="container">
        <img src={img1} alt="" className="img1" />
        <div className="header-right">
          <Button variant="text" color="error"
          >Login</Button>
          <span style={{ color: "red" }}>|</span>
          <Button variant="text" color="error"
          >Register</Button>
          <span style={{ color: "red" }}> | </span>


          <Button variant="outlined" color="error" className="button"
          ><span><ShoppingCartIcon variant="contained" style={{ color: "red" }}></ShoppingCartIcon></span></Button>
        </div>
      </div>

      <div className="search">
        <Autocomplete id="search"
          disablePortal
          options={first20} sx={{ width: 430, marginLeft: 60, color: "white", height: 20 }}
          renderInput={(params) => <TextField {...params} label="What are you looking for.." sx={{ backgroundColor: "white", border: "solid", alignItems: "center", marginTop: 1 }} />} />

        <Button className="btnm" sx={{ marginLeft: 118 }} onClick={() => nav('/product-list')} variant="contained" color="success"><SearchIcon variant="contained"></SearchIcon></Button><span>  </span>
        <Button className="btnm" variant="contained" color="error">Cancel</Button>

      </div>

    </div>




  )
}
const first20 = [
  { label: 'To kill a mockingbird', year: 1994 },
  { label: 'The Great Gatsby', year: 1972 },
  { label: 'The lord of the rings', year: 1974 },
  { label: 'Nineteen Eighty-Four', year: 2008 },
  { label: 'Wuthering Heights', year: 1957 },
  { label: "The Vatcher in the rye", year: 1993 },
  { label: 'Things fall apart', year: 1994 },
  {
    label: 'Middlemarch',
    year: 2003,
  },
  { label: 'Alice in wonderland', year: 1966 },
  { label: 'A Better India: A Better World', year: 1999 },
  {
    label: 'A suitable boy',
    year: 2001,
  },
  {
    label: 'A week with gandhi',
    year: 1980,
  },
  { label: 'Man and Superman', year: 1994 },
  { label: 'The 3 mistakes of my life', year: 2010 },
  {
    label: '400 Days',
    year: 2002,
  },
  { label: "How to win friends and influence people", year: 1975 },
  { label: 'The 5 AM club', year: 1990 },
  { label: 'Rich Dad Poor Dad', year: 1999 },
  { label: 'Life of Pi', year: 1954 },
  {
    label: 'Thinking,Fast and Slow',
    year: 1977,
  },

];


export default Header;