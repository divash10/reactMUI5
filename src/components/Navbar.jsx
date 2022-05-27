

import { AppBar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import { Box } from '@mui/system';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';





const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled('div')(({ theme }) => ({
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width: '40%'

}));

const Icons = styled(Box)(({ theme }) => ({
    display:"none",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display:"flex",
    gap:"10px", 
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
}));



const Navbar = () => {
  const [open, setopen] = useState(false)    
  return (
    <AppBar position="sticky" >
        <StyledToolbar>
            <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}> DEV </Typography>
            <PetsIcon sx={{display:{xs:"block", sm:"none"}}}/>
            <Search><InputBase placeholder='search...'/>  </Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <MailIcon/>
                </Badge>
            
            
                <Badge badgeContent={4} color="error">
                    <NotificationsIcon />
                </Badge>
            
                 <Avatar 
                    sx={{width:30, height:30 }}
                    src="https://www.pexels.com/photo/man-in-black-crew-neck-t-shirt-wearing-black-framed-eyeglasses-7375947/" alt="Cindy Baker"  
                    onClick={e=>setopen(true)}
                    />
            </Icons>

            <UserBox onClick={e=>setopen(true)}>
                    <Avatar sx={{width:30, height:30 }}src="https://www.pexels.com/photo/man-in-black-crew-neck-t-shirt-wearing-black-framed-eyeglasses-7375947/" alt="Cindy Baker"  />
                    <Typography variant="h6">Cindy </Typography>
            </UserBox>
                
        </StyledToolbar> 

        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={e=>setopen(false)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
        }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar