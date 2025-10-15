// src/app/services/breadcrumb.service.ts
import { Injectable } from '@angular/core';
import { routes } from '../app.routes';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private formatLabel(routeSegment: string): string {
    // Remove known prefixes like "fs-"
    const cleaned = routeSegment.replace(/^fs-/, '');

    // Convert kebab-case to Title Case
    return cleaned.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  }

  private customBreadcrumbs = [
    {
      match: '/master/retailer/retailer-creation/add-creation-retailer',
      trail: [
        {
          label: 'Retailer Creation',
          route: '/master/retailer/retailer-outlet-type',
        },
        {
          label: 'Add Retailer Creation',
          route: '/master/retailer/retailer-creation/add-creation-retailer',
        },
      ],
    },
    {
      match: '/master/product/fixed-rate-card/assign-product',
      trail: [
        { label: 'Master', route: '#' },
        { label: 'Product', route: '/master/product' },
        { label: 'Rate Card', route: '/master/product/fixed-rate-card' },
      ],
    },
    {
      match: '/master/product/fixed-rate-card/add-rate-card',
      trail: [
        { label: 'Master', route: '#' },
        { label: 'Product', route: '/master/product' },
        { label: 'Rate Card', route: '/master/product/fixed-rate-card' },
      ],
    },
    {
      match: '/master/product/pop-material/add-material',
      trail: [
        { label: 'Master', route: '#' },
        { label: 'Product', route: '/master/product' },
        { label: 'Pop Material', route: '/master/product/pop-material' },
        {
          label: 'Add Material',
          route: '/master/product/pop-material/add-material',
        },
      ],
    },
    {
      match: '/master/product/category/add-category',
      trail: [
        { label: 'Master', route: '#' },
        { label: 'Product', route: '/master/product' },
        { label: 'Category', route: '/master/product/category' },
        {
          label: 'Add Category',
          route: '/master/product/category/add-category',
        },
      ],
    },
    {
      match: '/master/product/product-details/add-product',
      trail: [
        { label: 'Master', route: '#' },
        { label: 'Product', route: '/master/product' },
        { label: 'Product Details', route: '/master/product/product-details' },
        {
          label: 'Add Product',
          route: '/master/product/product-details/add-product',
        },
      ],
    },
    {
      match: '/master/basic_details/currency/add-currency',
      trail: [
        { label: 'Master', route: '#' },
        { label: 'Basic Details', route: '/master/basic_details' },
        { label: 'Currency', route: '/master/basic_details/currency' },
        {
          label: 'Add Currency',
          route: '/master/basic_details/currency/add-currency',
        },
      ],
    },
    {
      match: '/master/basic_details/designation/menu-rights',
      trail: [
        { label: 'Master', route: '#' },
        { label: 'Basic Details', route: '/master/basic_details' },
        { label: 'Designation', route: '/master/basic_details/designation' },
        {
          label: 'Menu Rights',
          route: '/master/basic_details/designation/menu-rights',
        },
      ],
    },
    {
      match: 'master/gamification/competitions/add-competitions',
      trail: [
        { label: 'Master', route: '#' },
        { label: 'Gamefication', route: 'master/gamification' },
        { label: 'Competition', route: 'master/gamification/competitions' },
        {
          label: 'Add Competitions',
          route: 'master/gamification/competitions/add-competitions',
        },
      ],
    },
  ];

  private dynamicGroups = [
    {
      base: '/master/basic_details',
      label: 'Basic Details',
      subs: [
        'company',
        'division',
        'designation',
        'head-quarters',
        'work-type',
        'ho-user',
        'currency',
        'add-company',
        'add-division',
        'add-designation',
        'add-headquarters',
        'add-ho-user',
        'add-work-type',
      ],
    },
    {
      base: '/master/geography',
      label: 'Geography',
      subs: [
        'area',
        'zone',
        'territory',
        'district',
        'town',
        'add-area',
        'add-territory',
        'add-town',
        'add-district',
        'add-zone',
      ],
    },
    {
      base: '/master/product',
      label: 'Product',
      subs: [
        'product-details',
        'category',
        'brand',
        'uom',
        'tax-allocation',
        'rate-entry',
        'pop-material',
        'rate-card',
        'fixed-rate-card',
      ],
    },
    {
      base: '/master/retailer',
      label: 'Retailer',
      subs: [
        'retailer-category',
        'retailer-class',
        'retailer-outlet-type',
        'retailer-creation',
      ],
    },
    {
      base: '/master/super-stockiest',
      label: 'Super Stockiest',
      subs: ['super-stockiest-details'],
    },
    {
      base: '/master/route',
      label: 'Route',
      subs: ['route-list'],
    },
    {
      base: '/master/leave-master',
      label: 'Leave Master',
      subs: ['leave-type'],
    },
    {
      base: '/master/distributor',
      label: 'Distributor',
      subs: ['distributor-master'],
    },
    {
      base: '/master/gamification',
      label: 'Gamification',
      subs: ['competitions', 'formula', 'rewards', 'levels'],
    },
    {
      base: '/master/field-force',
      label: 'Field Force',
      subs: [],
    },
    {
      base: '/master/circular',
      label: 'Circular',
      subs: [],
    },
    {
      base: '/entry/leave',
      label: 'Leave',
      subs: ['leave_entry', 'leave-eligibility'],
    },
  ];

  private superAdmin = [
    {
      base: '/field-setup',
      label: 'Field Setup',
      subs: ['fs-general-settings', 'fs-user-settings', 'add-field'],
    },
    {
      base: '/menu-creation',
      label: 'Menu Creation',
      subs: [''],
    },
    {
      base: '/menu-permission',
      label: 'Menu Permission',
      subs: [''],
    },
  ];

  getBreadcrumbs(route: string): { label: string; route: string }[] | null {
    // Custom routes
    for (const item of this.customBreadcrumbs) {
      if (route.includes(item.match)) {
        return item.trail;
      }
    }

    // Approvals routes - handle first so dynamicGroups doesn't override
    if (route.startsWith('/admin-approval')) {
      const breadcrumbs = [{ label: 'Approvals', route: '/admin-approval' }];

      if (route.startsWith('/admin-approval/admin-leave-approval')) {
        breadcrumbs.push({
          label: 'Leave',
          route: '/admin-approval/admin-leave-approval',
        });
      }

      // If deeper path exists (like /cancellation)
      const parts = route.split('/').filter((p) => p);
      if (parts.length > 3) {
        const lastPart = parts[parts.length - 1];
        breadcrumbs.push({
          label: this.formatLabel(lastPart),
          route,
        });
      }

      return breadcrumbs;
    }

    // Reports routes - handle first so dynamicGroups doesn't override
    if (route.startsWith('/admin-reports')) {
      const breadcrumbs = [{ label: 'Reports', route: '/admin-reports' }];

      if (route.startsWith('/admin-reports/admin-reports-leave')) {
        breadcrumbs.push({
          label: 'Leave',
          route: '/admin-reports/admin-reports-leave',
        });
      }

      // If deeper path exists (like /cancellation)
      const parts = route.split('/').filter((p) => p);
      if (parts.length > 3) {
        const lastPart = parts[parts.length - 1];
        breadcrumbs.push({
          label: this.formatLabel(lastPart),
          route,
        });
      }

      return breadcrumbs;
    }

    // Super Admin routes
    for (const group of this.superAdmin) {
      if (route.startsWith(group.base)) {
        return [{ label: group.label, route: group.base }];
      }
    }

    // Dynamic routes
    for (const group of this.dynamicGroups) {
      if (route.startsWith(group.base)) {
        return [
          { label: 'Master', route: '#' },
          { label: group.label, route: group.base },
        ];
      }
    }

    // Config & other rules ...
    if (route.includes('/general-settings')) {
      return [
        { label: 'Setup', route: '#' },
        { label: 'Configuration', route: '#' },
      ];
    }
    if (route.includes('/user-settings')) {
      return [
        { label: 'Setup', route: '#' },
        { label: 'Configuration', route: '#' },
      ];
    }
    if (
      route.includes('/configuration') &&
      !route.includes('/general-settings') &&
      !route.includes('/user-settings')
    ) {
      return [
        { label: 'Setup', route: '/setup' },
        { label: 'Configuration', route: '/configuration' },
      ];
    }
    if (route.includes('/master')) {
      return [{ label: 'Master', route: '/master/basic_details' }];
    }
    if (route.includes('/entry')) {
      return [{ label: 'Entry', route: '/entry/leave/' }];
    }
    if (route.includes('/upload')) {
      return [{ label: 'Upload', route: '/upload' }];
    }
    if (route.includes('/admin-reports')) {
      return [{ label: 'Reports', route: '/admin-reports' }];
    }
    return null;
  }
}
