import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ItemGrid from './item';
import { display } from '@mui/system';

const Body=(props)=>{
const [value, setValue] = React.useState('1'); const handleChange = (event, newValue) => { setValue(newValue); };
return (
<Box sx={{ mt:8 , width: '100%', typography: 'body1' }}>
<TabContext value={value}>
<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
<TabList onChange={handleChange} centered> 
<Tab label="Everything" value="1" />
<Tab label="Clothes" value="2" />
<Tab label="Electronics" value="3" />
</TabList>
</Box>
<TabPanel value="1"><ItemGrid tab='everything'/></TabPanel>
<TabPanel value="2"><ItemGrid tab='clothes'/></TabPanel>
<TabPanel value="3"><ItemGrid tab='electronics'/></TabPanel>
</TabContext>
</Box> ); }
export default Body;
