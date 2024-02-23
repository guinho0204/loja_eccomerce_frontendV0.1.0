import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  

  {
    id: uniqueId(),
    title: 'Home',
    icon: IconLayoutDashboard,
    href: '/',
  },
  
  {
    id: uniqueId(),
    title: 'Login',
    icon: IconLogin,
    href: '/authentication/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: IconUserPlus,
    href: '/authentication/register',
  },
  {
    id: uniqueId(),
    title: 'Catalogo',
    icon: IconMoodHappy,
    href: '/icons',
  },
  
];

export default Menuitems;
