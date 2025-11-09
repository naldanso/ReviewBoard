import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { Details } from './details/details';

const routeConfig: Routes = [
  {
    path: '',
    component: Home,
    title: 'Review Board',

  },
  {
    path: 'details/:id',
    component: Details,
    title: 'Media Info',

  },
];

export default routeConfig;
