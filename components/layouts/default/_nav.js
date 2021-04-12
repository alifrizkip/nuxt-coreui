export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/coreui/dashboard',
        icon: 'cil-speedometer',
        badge: {
          color: 'primary',
          text: 'NEW',
        },
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Theme'],
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Colors',
        to: '/coreui/theme/colors',
        icon: 'cil-drop',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Typography',
        to: '/coreui/theme/typography',
        icon: 'cil-pencil',
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Components'],
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Base',
        route: '/coreui/base',
        icon: 'cil-puzzle',
        items: [
          {
            name: 'Breadcrumbs',
            to: '/coreui/base/breadcrumbs',
          },
          {
            name: 'Cards',
            to: '/coreui/base/cards',
          },
          {
            name: 'Carousels',
            to: '/coreui/base/carousels',
          },
          {
            name: 'Collapses',
            to: '/coreui/base/collapses',
          },
          {
            name: 'Forms',
            to: '/coreui/base/forms',
          },
          {
            name: 'Jumbotrons',
            to: '/coreui/base/jumbotrons',
          },
          {
            name: 'List Groups',
            to: '/coreui/base/list-groups',
          },
          {
            name: 'Navs',
            to: '/coreui/base/navs',
          },
          {
            name: 'Navbars',
            to: '/coreui/base/navbars',
          },
          {
            name: 'Paginations',
            to: '/coreui/base/paginations',
          },
          {
            name: 'Popovers',
            to: '/coreui/base/popovers',
          },
          {
            name: 'Progress Bars',
            to: '/coreui/base/progress-bars',
          },
          {
            name: 'Switches',
            to: '/coreui/base/switches',
          },
          {
            name: 'Tables',
            to: '/coreui/base/tables',
          },
          {
            name: 'Tabs',
            to: '/coreui/base/tabs',
          },
          {
            name: 'Tooltips',
            to: '/coreui/base/tooltips',
          },
        ],
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Buttons',
        route: '/coreui/buttons',
        icon: 'cil-cursor',
        items: [
          {
            name: 'Buttons',
            to: '/coreui/buttons/standard-buttons',
          },
          {
            name: 'Button Dropdowns',
            to: '/coreui/buttons/dropdowns',
          },
          {
            name: 'Button Groups',
            to: '/coreui/buttons/button-groups',
          },
          {
            name: 'Brand Buttons',
            to: '/coreui/buttons/brand-buttons',
          },
        ],
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Charts',
        to: '/coreui/charts',
        icon: 'cil-chart-pie',
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Icons',
        route: '/coreui/icons',
        icon: 'cil-star',
        items: [
          {
            name: 'CoreUI Icons',
            to: '/coreui/icons/coreui-icons',
            badge: {
              color: 'info',
              text: 'NEW',
            },
          },
          {
            name: 'Brands',
            to: '/coreui/icons/brands',
          },
          {
            name: 'Flags',
            to: '/coreui/icons/flags',
          },
        ],
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Notifications',
        route: '/coreui/notifications',
        icon: 'cil-bell',
        items: [
          {
            name: 'Alerts',
            to: '/coreui/notifications/alerts',
          },
          {
            name: 'Badges',
            to: '/coreui/notifications/badges',
          },
          {
            name: 'Modals',
            to: '/coreui/notifications/modals',
          },
        ],
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Widgets',
        to: '/coreui/widgets',
        icon: 'cil-calculator',
        badge: {
          color: 'primary',
          text: 'NEW',
          shape: 'pill',
        },
      },
      {
        _name: 'CSidebarNavDivider',
        _class: 'm-2',
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Extras'],
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Pages',
        route: '/coreui/pages',
        icon: 'cil-star',
        items: [
          {
            name: 'Login',
            to: '/coreui/pages/login',
          },
          {
            name: 'Register',
            to: '/coreui/pages/register',
          },
          {
            name: 'Error 404',
            to: '/coreui/pages/404',
          },
          {
            name: 'Error 500',
            to: '/coreui/pages/500',
          },
        ],
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Download CoreUI',
        href: 'http://coreui.io/vue/',
        icon: { name: 'cil-cloud-download', class: 'text-white' },
        _class: 'bg-success text-white',
        target: '_blank',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Try CoreUI PRO',
        href: 'http://coreui.io/pro/vue/',
        icon: { name: 'cil-layers', class: 'text-white' },
        _class: 'bg-danger text-white',
        target: '_blank',
      },
    ],
  },
];
