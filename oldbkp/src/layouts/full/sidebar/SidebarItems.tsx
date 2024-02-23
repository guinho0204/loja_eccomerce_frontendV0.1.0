import React from 'react';
import Menuitems from './MenuItems';
import { useRouter } from 'next/router';
import { Box, List } from '@mui/material';
import NavItem from './NavItem';
import NavGroup from './NavGroup/NavGroup';
import styles from './sidebar.module.css'

const SidebarItems = ({toggleMobileSidebar}: any) => {
  const { pathname } = useRouter();
  const pathDirect = pathname;

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className={styles.sidebar} component="div">
        {Menuitems.map((item) => {
  
            return (
              <NavItem item={item} key={item.id} pathDirect={pathDirect}  onClick={toggleMobileSidebar}/>
            );
          }
        )}
      </List>
    </Box>
  );
};
export default SidebarItems;
