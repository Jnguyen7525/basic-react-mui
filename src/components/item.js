import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ItemCard=(props)=>{
const category=props.category;
const theme = useTheme();
return (
<Card sx={{ display: 'flex', flexDirection:'column' }}>
<Box sx={{ display: 'flex', flexDirection: 'column' }}>
<CardContent sx={{ flex: '1 0 auto' }}>
<Typography component="div" variant="h5">{category}</Typography>
</CardContent>
<Box sx={{ display: 'flex', flexDirection:'colum', alignItems: 'center', pl: 1, pb: 1 }}>
<IconButton><AddIcon/>
</IconButton>
<IconButton>
<RemoveIcon/>
</IconButton>
<IconButton><ShoppingCartIcon/>
</IconButton>
</Box>
</Box>
 </Card> ); }



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ItemGrid=(props)=> {
const tab=props.tab;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item><ItemCard category={tab}/></Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
export default ItemGrid
