/**
 *  **********************
 *  **********************
 *  ******** OBE *********
 *  **********************
 *  **********************
 */

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import Link from 'next/link';

import '../../globals.css'

export const metadata = {
   title: 'Michael Gary Tattoos',
   description: 'Michael Gary Tattoos',
}

// export default async function Nav() {
//    return (
//       <nav id='mg-nav' className='pl-5 mg-navbar bg-pink-200 h-14 xl:bg-red-500 xl:h-32 xl:pl-20'>
//          <div className="mg-navbar-home">
//             <Link href='/'>Mike Gary Tattoos</Link>
//          </div>
//          <div className="mg-navbar-links">
// <Link href='/aftercare'>Aftercare</Link>
// <Link href='/blogs'>Blog</Link>
// <Link href='/contact'>Contact</Link>
// <Link href='/projects'>Projects</Link>
//          </div>
//       </nav>
//    )
// }


const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
   };
   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   return (
      <AppBar position="static"
         sx={{
            background: 'none',
            px: { xs: 0, md: 4 },
            py: { xs: 1, md: 2 },
            boxShadow: 'none'
         }}>
         <Container maxWidth={false}>
            <Toolbar disableGutters>
               {/* Mobile */}
               <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                     size="large"
                     aria-label="Menu Icon"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleOpenNavMenu}
                     color="inherit"
                  >
                     <MenuIcon />
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                     }}
                     open={Boolean(anchorElNav)}
                     onClose={handleCloseNavMenu}
                     sx={{
                        display: { xs: 'block', md: 'none' },
                     }}
                  >
                     {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                           <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                     ))}
                  </Menu>
               </Box>
               <Box>
                  <Link href={'/'}>
                     <SanitizerIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                  </Link>
               </Box>

               {/* Desktop */}


               <Box className='mg-navbar' sx={{
                  display: { xs: 'none', md: 'flex' },
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center'
               }}>
                  <Box>
                     <Link href={'/'}>
                        <SanitizerIcon className='navbarIcon' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                     </Link>
                  </Box>
                  <Box className='mg-navbar-links' sx={{
                     display: { xs: 'none', md: 'flex' },
                  }}>
                     {pages.map((page) => (
                        <Button
                           key={page}
                           onClick={handleCloseNavMenu}
                           sx={{
                              my: 2,
                              px: 4,
                              color: 'white',
                              display: 'block',
                              paddingRight: { md: 0 }
                           }}>
                           {page}
                        </Button>
                     ))}
                  </Box>
               </Box>


            </Toolbar>
         </Container>
      </AppBar >
   );
}
export default ResponsiveAppBar;