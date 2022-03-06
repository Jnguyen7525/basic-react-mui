import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import CopyrightIcon from '@mui/icons-material/Copyright'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function Footer(){
return(
<Stack sx={{position:'relative', bottom:0, width:'100%'}} spacing={0} direction='column' justifyContent='center' alignItems='center'>
	<Breadcrumbs aria-label="breadcrumb" sx={{display:'flex'}}>
		<Link underline="hover" color="inherit" href="#">Home
		</Link>
		<Link underline="hover" color="inherit" href="#"> About us 
		</Link>
		<Link underline="hover" color="inherit" href="#" >Contact us
		</Link>
	</Breadcrumbs>
	<Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
		<TwitterIcon/>
		<FacebookIcon/>
		<InstagramIcon/>
		<GitHubIcon/>
	</Box>
	<Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
		<CopyrightIcon/>
		<Typography variant='caption'>MINE!
		</Typography>
	</Box>
</Stack>
)
}
export default Footer;
