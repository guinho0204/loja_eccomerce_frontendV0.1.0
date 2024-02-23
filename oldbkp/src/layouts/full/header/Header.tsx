import React from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Button } from '@mui/material';
import PropTypes from 'prop-types';
import CarrinhoIcon from './../../../../pages/Carrinho/carrinho_icon.png'
// components
import Profile from './Profile';
import { IconBellRinging, IconMenu,   } from '@tabler/icons-react';
import Image from 'next/image';
import styles from './carrinho.module.css'
import Carrinho from '../../../../pages/Carrinho';
import Router from 'next/router';
import SidebarItems from '../sidebar/SidebarItems';
interface ItemType {
  toggleMobileSidebar:  (event: React.MouseEvent<HTMLElement>) => void;
}
 
const carrinho = () =>{
    Router.push('./Carrinho');
}

const Header = ({toggleMobileSidebar}: ItemType) => {

  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));


  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: 'pink',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>


        <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
        >
          <Badge variant="dot" color="primary">
            <Image src={CarrinhoIcon} alt='icone Carrinho'className={styles.carrinho} onClick={carrinho}/>
            
          </Badge>

        </IconButton>
        <Box flexGrow={1} />
        <SidebarItems />
        <Stack spacing={1} direction="row" alignItems="center">
          <Profile/>
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
