import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
// import CssBaseline from '@mui/material/CssBaseline';
import Link from 'next/link';
import Image from 'next/image';

import '../../globals.css'

/**
 * TODO: 
 * 
 * * tooltips
 * 
 *  */


export const metadata = {
   title: 'Michael Gary Tattoos',
   description: 'Michael Gary Tattoos',
}

interface Props {
   /**
    * Injected by the documentation to work in an iframe.
    * You won't need it on your project.
    */
   // window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Aftercare', 'Blog', 'Projects', 'Contact'];

export default function DrawerAppBar(props: Props) {
   // const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);

   const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
   };

   const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
         <Typography variant="h6" sx={{ my: 2 }}>
            <Link href='/'>
               Mike Gary Tattoos
            </Link>
         </Typography>
         <Divider />
         <List>
            {navItems.map((item) => (
               <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                     <Link href={`/${item.toLowerCase()}`}>
                        <ListItemText primary={item} />
                     </Link>
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Box>
   );

   // const container = window !== undefined ? () => window().document.body : undefined;

   return (
      <Box className='nav' sx={{ display: 'flex' }}>
         <AppBar
            component="nav"
            position="absolute"
            sx={{
               background: 'none',
               px: { xs: 1, md: 4 },
               py: { xs: 1, md: 2 },
               boxShadow: 'none',
            }}>
            <Toolbar
               sx={{
                  justifyContent: { xs: 'space-between' },
               }}>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { md: 'none' } }}
               >
                  <MenuIcon sx={{ color: '#fff' }} />
               </IconButton>
               <Typography
                  variant="h6"
                  component="div"
                  sx={{
                     flexGrow: 1,
                     display: { xs: 'none', md: 'block' }
                  }}>
                  <Link href={'/'}>
                     <Box sx={{
                        display: 'flex', alignItems: 'center',
                        columnGap: '10px', width: 'max-content',
                        color: '#fff',
                     }}>
                        <Image className='navLogo' src='/img/mg_logo.png' width={50} height={50} alt='Mike Gary Brand Logo' /> <div>Mike Gary Tattoos</div>
                     </Box>
                  </Link>
               </Typography>
               <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                  {navItems.map((item) => (
                     <Button key={item} sx={{ color: '#fff', fontWeight: 'bold' }}>
                        {item}
                     </Button>
                  ))}
               </Box>
               <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <Image className='navLogo' src='/img/mg_logo.png' width={50} height={50} alt='Mike Gary Brand Logo' />
               </Box>
            </Toolbar>
         </AppBar>
         <Box component="nav">
            <Drawer
               // container={container}
               variant="temporary"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
               }}
               sx={{
                  display: { xs: 'block', md: 'none' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
               }}
            >
               {drawer}
            </Drawer>
         </Box>
      </Box>
   );
}