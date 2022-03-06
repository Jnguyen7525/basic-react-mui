import React from 'react';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box'

function Header(){
const search=()=>{};
const [anchorEl, setAnchorEl] = React.useState(null);
const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
const handleClose = () => {
    setAnchorEl(null);
  };
const [value, setValue] = React.useState(0);
const handleChange = (event, newValue) => { setValue(newValue); };
return(
<Box>
<AppBar>
	<ToolBar>
		<IconButton onClick={handleClick}>
			<MenuBookIcon/>
		</IconButton>
  		<Typography sx={{mx:4}} variant='h6'>Eshopbot</Typography>
		<TextField placeholder='wat u want?' size='small'/>
		<IconButton onClick={search}>
		<SearchIcon/>
		</IconButton>
		<Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        		<MenuItem onClick={handleClose}>home</MenuItem>
			<MenuItem onClick={handleClose}>account</MenuItem>
			<MenuItem onClick={handleClose}>logout</MenuItem>
		</Menu>
	</ToolBar>
</AppBar>
</Box>
)
}

export default Header;
