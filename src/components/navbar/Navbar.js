import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircleOutlined, House } from '@mui/icons-material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#64B9B9' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon fontSize='large'/>
          </IconButton>
          <Typography component="div" sx={{ flexGrow: 2 }} display="grid" justifyContent="center">
            <House fontSize='large'></House>
          </Typography>
          <Button color="inherit"><AccountCircleOutlined fontSize='large'></AccountCircleOutlined></Button>
        </Toolbar>
      </AppBar>
      <AppBar position='static' style={
        {backgroundColor: 'white',
        boxShadow: 'none'}}>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Button sx={{
            fontSize:"18px",
            fontFamily: "Abel",
            color:"black",
            borderBottom: "3px solid #64B9B9"}}>Agregar</Button>
          <Button sx={{
            fontSize:"18px",
            fontFamily: "Abel",
            color:"black"}}>Lista</Button>
        </Box>
      </AppBar>
    </Box>
  );
}