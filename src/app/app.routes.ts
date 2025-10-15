import { Routes } from '@angular/router';
import { LayoutComponent } from './Components/Layout/layout.component';
import { authGuard } from './Guard/auth.guard';
import { PageNotFoundComponent } from './Components/Page Not Found/page-not-found.component';
import { AdminReportsComponent } from './Components/Admin Reports/admin-reports.component';

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
      //  ! MENU CREATION ROUTES
      {
        path: 'menu-creation',
        loadChildren: () =>
          import('./Components/Menu Creation/menu-creation.module').then(
            (m) => m.MenuCreationModule
          ),
      },

      //  ! MENU PERMISSION ROUTES
      {
        path: 'menu-permission',
        loadChildren: () =>
          import('./Components/Menu Permission/menu-permission.module').then(
            (m) => m.MenuPermissionModule
          ),
      },

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

      //  ! LEAVE MASTER ROUTES
      {
        path: 'master',
        loadChildren: () =>
          import(
            './Components/Masters/Leave Master/leave-master-main.module'
          ).then((m) => m.LeaveMasterMainModule),
      },

      //  ! CONFIGURATION ROUTES
      {
        path: 'configuration',
        loadChildren: () =>
          import('./Components/Setup/Configuration/configuration.module').then(
            (m) => m.ConfigurationModule
          ),
      },

      //  ? UPLOADS MODULE
      {
        path: 'upload',
        loadChildren: () =>
          import('./Components/Upload/Uploads/uploads.module').then(
            (m) => m.UploadsModule
          ),
      },

      //  ? ENTRY MODULE
      //  ! LEAVE MODULE
      {
        path: 'entry',
        loadChildren: () =>
          import('./Components/Admin Entry/Leave/leave.module').then(
            (m) => m.LeaveModule
          ),
      },

      //  ? Approvals MODULE
      //  ! LEAVE MODULE
      {
        path: 'admin-approval',
        loadChildren: () =>
          import(
            './Components/Admin Approvals/Leave/admin-approvals-leave.module'
          ).then((m) => m.AdminApprovalsLeaveModule),
      },

      {
        path: 'admin-approval',
        loadChildren: () =>
          import(
            './Components/Admin Approvals/Tour Plan/admin-approvals-tourplan.module'
          ).then((m) => m.AdminApprovalsTourplanModule),
      },

      {
        path: 'admin-reports',
        loadChildren: () =>
          import(
            './Components/Admin Reports/Admin Report Leave/admin-report-leave.module'
          ).then((m) => m.AdminReportLeaveModule),
      },

      // { path: 'approvals', component: AdminApprovalsComponent },

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
