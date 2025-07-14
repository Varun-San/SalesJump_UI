import { Routes } from '@angular/router';
import { LayoutComponent } from './Components/Layout/layout.component';
import { authGuard } from './Guard/auth.guard';
import { PageNotFoundComponent } from './Components/Page Not Found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./Components/Login Pages/login-pages.module').then(
        (m) => m.LoginPagesModule
      ),
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    // Routes for the layout section (without "layout" prefix)
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      //  ! FIELD SETUP CONFIGURATION ROUTES
      {
        path: 'field-setup',
        loadChildren: () =>
          import('./Components/Field Setup/field-setup.module').then(
            (m) => m.FieldSetupModule
          ),
      },
      //  ? MASTERS MODULE
      //  ! BASIC DETAILS ROUTES
      {
        path: 'master',
        loadChildren: () =>
          import(
            './Components/Masters/Basic-details/basic-details.module'
          ).then((m) => m.BasicDetailsModule),
      },

      //  ! CIRCULAR ROUTES
      {
        path: 'master',
        loadChildren: () =>
          import('./Components/Masters/Circular/circular.module').then(
            (m) => m.CircularModule
          ),
      },

      //  ! DISTRIBUTOR ROUTES
      {
        path: 'master',
        loadChildren: () =>
          import('./Components/Masters/Distributor/distributor.module').then(
            (m) => m.DistributorModule
          ),
      },

      //  ! FIELD FORCE ROUTES
      {
        path: 'master',
        loadChildren: () =>
          import('./Components/Masters/Field Force/field-force.module').then(
            (m) => m.FieldForceModule
          ),
      },

      //  ! GAMIFICATION ROUTES
      {
        path: 'master',
        loadChildren: () =>
          import('./Components/Masters/Gamification/gamification.module').then(
            (m) => m.GamificationModule
          ),
      },

      //  ! GEOGRAPHY ROUTES
      {
        path: 'master',
        loadChildren: () =>
          import('./Components/Masters/Geography/geography.module').then(
            (m) => m.GeographyModule
          ),
      },

      //  ! PRODUCT ROUTES
      {
        path: 'master',
        loadChildren: () =>
          import('./Components/Masters/Product/product.module').then(
            (m) => m.ProductModule
          ),
      },

      //  ! RETAILER ROUTES
      {
        path: 'master',
        loadChildren: () =>
          import('./Components/Masters/Retailer/retailer.module').then(
            (m) => m.RetailerModule
          ),
      },

      //  ! ROUTE MODULE ROUTES
      {
        path: 'master',
        loadChildren: () =>
          import('./Components/Masters/Route Module/route.module').then(
            (m) => m.RouteModule
          ),
      },

      //  ! SUPER STOCKIEST ROUTES
      {
        path: 'master',
        loadChildren: () =>
          import(
            './Components/Masters/Super Stockiest/super-stockiest.module'
          ).then((m) => m.SuperStockiestModule),
      },

      //  ! CONFIGURATION ROUTES
      {
        path: 'configuration',
        loadChildren: () =>
          import('./Components/Setup/Configuration/configuration.module').then(
            (m) => m.ConfigurationModule
          ),
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
