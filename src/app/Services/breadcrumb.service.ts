// src/app/services/breadcrumb.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private formatLabel(str: string): string {
    return str.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  }

  private customBreadcrumbs = [
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
  ];

  private dynamicGroups = [
    {
      base: '/master/basic_details/',
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
      base: '/master/geography/',
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
      base: '/master/product/',
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
      ],
    },
  ];

  getBreadcrumbs(route: string): { label: string; route: string }[] | null {
    // Custom routes
    for (const item of this.customBreadcrumbs) {
      if (route.includes(item.match)) {
        return item.trail;
      }
    }

    // Dynamic routes
    for (const group of this.dynamicGroups) {
      const matched = group.subs.find((sub) =>
        route.includes(`${group.base}${sub}`)
      );
      if (matched) {
        return [
          { label: 'Master', route: '#' },
          { label: group.label, route: group.base },
          {
            label: this.formatLabel(matched),
            route: `${group.base}${matched}`,
          },
        ];
      }

      // Match exact root like /master/geography
      if (route === group.base.slice(0, -1)) {
        return [
          { label: 'Master', route: '#' },
          {
            label: group.label,
            route: `${group.base}${group.subs[0]}`,
          },
        ];
      }
    }

    // Config routes
    if (route.includes('/general-settings')) {
      return [
        { label: 'Setup', route: '#' },
        { label: 'Configuration', route: '#' },
        { label: 'General Settings', route: '/configuration/general-settings' },
      ];
    }

    if (route.includes('/user-settings')) {
      return [
        { label: 'Setup', route: '#' },
        { label: 'Configuration', route: '#' },
        { label: 'User Settings', route: '/configuration/user-settings' },
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

    return null;
  }
}
