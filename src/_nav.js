import React, { useContext, useEffect } from "react";
import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilListNumberedRtl,
  cilListNumbered,
  cilArrowLeft,
  cilActionRedo,
  cilBan,
  cilTask,
  cibVerizon,
  cibAddthis,
  cilCheckAlt,
  cilLoopCircular,
  cilArrowCircleBottom,
  cilMagnifyingGlass,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";
import AuthContext from "./auth/auth-context";
import { FormattedMessage } from "react-intl";
// import { cilMagnifyingGlass } from "@coreui/icons";

// const _nav = [
//   {
//     component: CNavItem,
//     name: "عمومی صفحه",
//     to: "/dashboard",
//     icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
//   },

//   {
//     component: CNavItem,
//     name: "نوی ملاقات/لیدنې",
//     to: "/reception/add-visitor",
//     icon: <CIcon icon={cibAddthis} customClassName="nav-icon" />,
//   },

//   {
//     component: CNavItem,
//     name: "نوی اسناد",
//     to: "/reception/application/add-visitor",
//     icon: <CIcon icon={cibAddthis} customClassName="nav-icon" />,
//   },

//   {
//     component: CNavGroup,
//     name: "د ملاقاتونو لست",
//     to: "/list",
//     icon: <CIcon icon={cilListNumberedRtl} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: "انتظار",
//         to: "/reception/pending-appointment",
//         icon: <CIcon icon={cilLoopCircular} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: "کنسل شوي",
//         to: "/reception/cancelled-appointment",
//         icon: <CIcon icon={cilActionRedo} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: "قبول شوي",
//         to: "/reception/approved-appointment",
//         icon: <CIcon icon={cilCheckAlt} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: "رد شوي",
//         to: "/reception/rejected-appointment",
//         icon: <CIcon icon={cilBan} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: "بشپړ شوي ",
//         to: "/reception/completed-appointment",
//         icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
//       },
//     ],
//   },

//   {
//     component: CNavGroup,
//     name: "د اسنادو لست",
//     to: "/list",
//     icon: <CIcon icon={cilListNumberedRtl} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: "ابتدایی",
//         to: "/reception/initial-application",
//         icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: "کنسل شوي",
//         to: "/reception/cancel-application",
//         icon: <CIcon icon={cilActionRedo} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: "تر لاسه شوي",
//         to: "/reception/received-application",
//         icon: <CIcon icon={cilArrowCircleBottom} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: "رد شوي",
//         to: "/reception/rejected-application",
//         icon: <CIcon icon={cilBan} customClassName="nav-icon" />,
//       },

//       {
//         component: CNavItem,
//         name: "جریان",
//         to: "/reception/inprocess-application",
//         icon: <CIcon icon={cilLoopCircular} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: "بشپړ شوي",
//         to: "/reception/completed-application",
//         icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: "تړل شوي ",
//         to: "/reception/checkedout-application",
//         icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
//       },
//     ],
//   },

//   // {
//   //   component: CNavGroup,
//   //   name: "Executive Manager",
//   //   to: "/list",
//   //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
//   //   items: [
//   //     {
//   //       component: CNavGroup,
//   //       name: "د اسنادو لست",
//   //       to: "/list",
//   //       icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
//   //       items: [
//   //         {
//   //           component: CNavItem,
//   //           name: "تکمیل شوی",
//   //           to: "/reception/completed-application",
//   //           icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
//   //         },
//   //         {
//   //           component: CNavItem,
//   //           name: "جریان",
//   //           to: "/reception/processing-application",
//   //           icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
//   //         },
//   //         {
//   //           component: CNavItem,
//   //           name: "رد شوي",
//   //           to: "/reception/rejected-application",
//   //           icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
//   //         },

//   //         // {
//   //         //   component: CNavGroup,
//   //         //   name: "رد شوي",
//   //         //   to: "/rejected-applications",
//   //         //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
//   //         //   // items: [
//   //         //   //   {
//   //         //   //     component: CNavItem,
//   //         //   //     name: "د مقام لخوا",
//   //         //   //     to: "/reception/rejected-appointment",
//   //         //   //     icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
//   //         //   //   },
//   //         //   //   {
//   //         //   //     component: CNavItem,
//   //         //   //     name: "د ریاست لخوا",
//   //         //   //     to: "/reception/rejected-appointment",
//   //         //   //     icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
//   //         //   //   },
//   //         //   // ],
//   //         // },
//   //       ],
//   //     },
//   //     {
//   //       component: CNavGroup,
//   //       name: "د ملاقاتونو لست",
//   //       to: "/list",
//   //       icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
//   //       items: [
//   //         {
//   //           component: CNavItem,
//   //           name: "قبول شوي",
//   //           to: "/reception/approved-appointment",
//   //           icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
//   //         },
//   //         {
//   //           component: CNavItem,
//   //           name: "انتظار",
//   //           to: "/reception/pending-appointment",
//   //           icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
//   //         },
//   //         {
//   //           component: CNavItem,
//   //           name: "رد شوي",
//   //           to: "/reception/rejected-appointment",
//   //           icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
//   //         },
//   //       ],
//   //     },
//   //   ],
//   // },

//   // {
//   //   component: CNavGroup,
//   //   name: "MOQAAM",
//   //   to: "/list",
//   //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
//   //   items: [
//   //     {
//   //       component: CNavGroup,
//   //       name: "د اسنادو لست",
//   //       to: "/list",
//   //       icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
//   //       items: [
//   //         {
//   //           component: CNavItem,
//   //           name: "تکمیل شوی",
//   //           to: "/reception/completed-application",
//   //           icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
//   //         },
//   //         {
//   //           component: CNavItem,
//   //           name: "جریان",
//   //           to: "/reception/processing-application",
//   //           icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
//   //         },
//   //         {
//   //           component: CNavItem,
//   //           name: "رد شوي",
//   //           to: "/reception/rejected-application",
//   //           icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
//   //         },

//   //         // {
//   //         //   component: CNavGroup,
//   //         //   name: "رد شوي",
//   //         //   to: "/rejected-applications",
//   //         //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
//   //         //   // items: [
//   //         //   //   {
//   //         //   //     component: CNavItem,
//   //         //   //     name: "د مقام لخوا",
//   //         //   //     to: "/reception/rejected-appointment",
//   //         //   //     icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
//   //         //   //   },
//   //         //   //   {
//   //         //   //     component: CNavItem,
//   //         //   //     name: "د ریاست لخوا",
//   //         //   //     to: "/reception/rejected-appointment",
//   //         //   //     icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
//   //         //   //   },
//   //         //   // ],
//   //         // },
//   //       ],
//   //     },
//   //     {
//   //       component: CNavGroup,
//   //       name: "د ملاقاتونو لست",
//   //       to: "/list",
//   //       icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
//   //       items: [
//   //         {
//   //           component: CNavItem,
//   //           name: "قبول شوي",
//   //           to: "/reception/approved-appointment",
//   //           icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
//   //         },
//   //         {
//   //           component: CNavItem,
//   //           name: "انتظار",
//   //           to: "/reception/pending-appointment",
//   //           icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
//   //         },
//   //         {
//   //           component: CNavItem,
//   //           name: "رد شوي",
//   //           to: "/reception/rejected-appointment",
//   //           icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
//   //         },
//   //       ],
//   //     },
//   //   ],
//   // },

//   // {
//   //   component: CNavItem,
//   //   name: "Colors",
//   //   to: "/theme/colors",
//   //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
//   // },
//   // {
//   //   component: CNavItem,
//   //   name: "Typography",
//   //   to: "/theme/typography",
//   //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
//   // },
//   // {
//   //   component: CNavTitle,
//   //   name: "Components",
//   // },
//   // {
//   //   component: CNavGroup,
//   //   name: "Base",
//   //   to: "/base",
//   //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
//   //   items: [
//   //     {
//   //       component: CNavItem,
//   //       name: "Accordion",
//   //       to: "/base/accordion",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Breadcrumb",
//   //       to: "/base/breadcrumbs",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Cards",
//   //       to: "/base/cards",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Carousel",
//   //       to: "/base/carousels",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Collapse",
//   //       to: "/base/collapses",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "List group",
//   //       to: "/base/list-groups",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Navs & Tabs",
//   //       to: "/base/navs",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Pagination",
//   //       to: "/base/paginations",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Placeholders",
//   //       to: "/base/placeholders",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Popovers",
//   //       to: "/base/popovers",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Progress",
//   //       to: "/base/progress",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Spinners",
//   //       to: "/base/spinners",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Tables",
//   //       to: "/base/tables",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Tooltips",
//   //       to: "/base/tooltips",
//   //     },
//   //   ],
//   // },
//   // {
//   //   component: CNavGroup,
//   //   name: "Buttons",
//   //   to: "/buttons",
//   //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
//   //   items: [
//   //     {
//   //       component: CNavItem,
//   //       name: "Buttons",
//   //       to: "/buttons/buttons",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Buttons groups",
//   //       to: "/buttons/button-groups",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Dropdowns",
//   //       to: "/buttons/dropdowns",
//   //     },
//   //   ],
//   // },
//   // {
//   //   component: CNavGroup,
//   //   name: "Forms",
//   //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
//   //   items: [
//   //     {
//   //       component: CNavItem,
//   //       name: "Form Control",
//   //       to: "/forms/form-control",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Select",
//   //       to: "/forms/select",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Checks & Radios",
//   //       to: "/forms/checks-radios",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Range",
//   //       to: "/forms/range",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Input Group",
//   //       to: "/forms/input-group",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Floating Labels",
//   //       to: "/forms/floating-labels",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Layout",
//   //       to: "/forms/layout",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Validation",
//   //       to: "/forms/validation",
//   //     },
//   //   ],
//   // },
//   // {
//   //   component: CNavItem,
//   //   name: "Charts",
//   //   to: "/charts",
//   //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
//   // },
//   // {
//   //   component: CNavGroup,
//   //   name: "Icons",
//   //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
//   //   items: [
//   //     {
//   //       component: CNavItem,
//   //       name: "CoreUI Free",
//   //       to: "/icons/coreui-icons",
//   //       badge: {
//   //         color: "success",
//   //         text: "NEW",
//   //       },
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "CoreUI Flags",
//   //       to: "/icons/flags",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "CoreUI Brands",
//   //       to: "/icons/brands",
//   //     },
//   //   ],
//   // },
//   // {
//   //   component: CNavGroup,
//   //   name: "Notifications",
//   //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
//   //   items: [
//   //     {
//   //       component: CNavItem,
//   //       name: "Alerts",
//   //       to: "/notifications/alerts",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Badges",
//   //       to: "/notifications/badges",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Modal",
//   //       to: "/notifications/modals",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Toasts",
//   //       to: "/notifications/toasts",
//   //     },
//   //   ],
//   // },
//   // {
//   //   component: CNavItem,
//   //   name: "Widgets",
//   //   to: "/widgets",
//   //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
//   //   badge: {
//   //     color: "info",
//   //     text: "NEW",
//   //   },
//   // },
//   // {
//   //   component: CNavTitle,
//   //   name: "Extras",
//   // },
//   // {
//   //   component: CNavGroup,
//   //   name: "Pages",
//   //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
//   //   items: [
//   //     {
//   //       component: CNavItem,
//   //       name: "Login",
//   //       to: "/login",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Register",
//   //       to: "/register",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Error 404",
//   //       to: "/404",
//   //     },
//   //     {
//   //       component: CNavItem,
//   //       name: "Error 500",
//   //       to: "/500",
//   //     },
//   //   ],
//   // },
//   // {
//   //   component: CNavItem,
//   //   name: "Docs",
//   //   href: "https://coreui.io/react/docs/templates/installation/",
//   //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
//   // },
// ];

export const head_user = [
  {
    component: CNavItem,
    name: <FormattedMessage id="general_dashboard_title" />,
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: <FormattedMessage id="meeting_list" />,
    to: "/list",
    icon: <CIcon icon={cilListNumberedRtl} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "انتظار",
        to: "/reception/pending-appointment",
        icon: <CIcon icon={cilLoopCircular} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "کنسل شوي",
        to: "/reception/cancelled-appointment",
        icon: <CIcon icon={cilActionRedo} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "قبول شوي",
        to: "/reception/approved-appointment",
        icon: <CIcon icon={cilCheckAlt} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "رد شوي",
        to: "/reception/rejected-appointment",
        icon: <CIcon icon={cilBan} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "بشپړ شوي ",
        to: "/reception/completed-appointment",
        icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
      },
    ],
  },

  {
    component: CNavGroup,
    name: <FormattedMessage id="application_list" />,
    to: "/list",
    icon: <CIcon icon={cilListNumberedRtl} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "ابتدایی",
        to: "/reception/initial-application",
        icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "کنسل شوي",
        to: "/reception/cancel-application",
        icon: <CIcon icon={cilActionRedo} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "تر لاسه شوي",
        to: "/reception/received-application",
        icon: <CIcon icon={cilArrowCircleBottom} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "رد شوي",
        to: "/reception/rejected-application",
        icon: <CIcon icon={cilBan} customClassName="nav-icon" />,
      },

      {
        component: CNavItem,
        name: "جریان",
        to: "/reception/inprocess-application",
        icon: <CIcon icon={cilLoopCircular} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "بشپړ شوي",
        to: "/reception/completed-application",
        icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "تړل شوي ",
        to: "/reception/checkedout-application",
        icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavItem,
    name: <FormattedMessage id="general_search" />,
    to: "/reception/search",
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: <FormattedMessage id="Proforma Registration" />,
    to: "/rahyabi/proforma-register",
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: <FormattedMessage id="Proforma View" />,
    to: "/rahyabi/proforma/proforma-view",
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: <FormattedMessage id="Sabt-Shirkat" />,
    to: "/javazdehi/incorporation-register",
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: <FormattedMessage id="Sabt-Company" />,
    to: "/javazdehi/company-register",
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: <FormattedMessage id="Sabt-Karmand" />,
    to: "/hr-directorate/staff-register",
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
  },
];

// Appointments
export const reception_appointment = [
  {
    component: CNavItem,
    name: "عمومی صفحه",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: "نوی ملاقات/لیدنې",
    to: "/reception/add-visitor",
    icon: <CIcon icon={cibAddthis} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: "د ملاقاتونو لست",
    to: "/list",
    icon: <CIcon icon={cilListNumberedRtl} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "انتظار",
        to: "/reception/pending-appointment",
        icon: <CIcon icon={cilLoopCircular} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "کنسل شوي",
        to: "/reception/cancelled-appointment",
        icon: <CIcon icon={cilActionRedo} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "قبول شوي",
        to: "/reception/approved-appointment",
        icon: <CIcon icon={cilCheckAlt} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "رد شوي",
        to: "/reception/rejected-appointment",
        icon: <CIcon icon={cilBan} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "بشپړ شوي ",
        to: "/reception/completed-appointment",
        icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavItem,
    name: "لټون ",
    to: "/reception/search",
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
  },
];

export const reception_application = [
  {
    component: CNavItem,
    name: "عمومی صفحه",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: "نوی اسناد",
    to: "/reception/application/add-visitor",
    icon: <CIcon icon={cibAddthis} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: "د اسنادو لست",
    to: "/list",
    icon: <CIcon icon={cilListNumberedRtl} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "ابتدایی",
        to: "/reception/initial-application",
        icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "کنسل شوي",
        to: "/reception/cancel-application",
        icon: <CIcon icon={cilActionRedo} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "تر لاسه شوي",
        to: "/reception/received-application",
        icon: <CIcon icon={cilArrowCircleBottom} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "رد شوي",
        to: "/reception/rejected-application",
        icon: <CIcon icon={cilBan} customClassName="nav-icon" />,
      },

      {
        component: CNavItem,
        name: "جریان",
        to: "/reception/inprocess-application",
        icon: <CIcon icon={cilLoopCircular} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "بشپړ شوي",
        to: "/reception/completed-application",
        icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "تړل شوي ",
        to: "/reception/checkedout-application",
        icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavItem,
    name: "لټون ",
    to: "/reception/search",
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
  },
];

export const directorate_manager = [
  {
    component: CNavItem,
    name: "عمومی صفحه",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: "د ملاقاتونو لست",
    to: "/list",
    icon: <CIcon icon={cilListNumberedRtl} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "انتظار",
        to: "/reception/pending-appointment",
        icon: <CIcon icon={cilLoopCircular} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "کنسل شوي",
        to: "/reception/cancelled-appointment",
        icon: <CIcon icon={cilActionRedo} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "قبول شوي",
        to: "/reception/approved-appointment",
        icon: <CIcon icon={cilCheckAlt} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "رد شوي",
        to: "/reception/rejected-appointment",
        icon: <CIcon icon={cilBan} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "بشپړ شوي ",
        to: "/reception/completed-appointment",
        icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
      },
    ],
  },

  {
    component: CNavGroup,
    name: "د اسنادو لست",
    to: "/list",
    icon: <CIcon icon={cilListNumberedRtl} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "جریان",
        to: "/reception/inprocess-application",
        icon: <CIcon icon={cilLoopCircular} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "بشپړ شوي",
        to: "/reception/completed-application",
        icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "تړل شوي ",
        to: "/reception/checkedout-application",
        icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavItem,
    name: "لټون ",
    to: "/reception/search",
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
  },
];

export const executive_manager = [
  {
    component: CNavItem,
    name: "عمومی صفحه",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: "د اسنادو لست",
    to: "/list",
    icon: <CIcon icon={cilListNumberedRtl} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "ابتدایی",
        to: "/reception/initial-application",
        icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "کنسل شوي",
        to: "/reception/cancel-application",
        icon: <CIcon icon={cilActionRedo} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "تر لاسه شوي",
        to: "/reception/received-application",
        icon: <CIcon icon={cilArrowCircleBottom} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "رد شوي",
        to: "/reception/rejected-application",
        icon: <CIcon icon={cilBan} customClassName="nav-icon" />,
      },

      {
        component: CNavItem,
        name: "جریان",
        to: "/reception/inprocess-application",
        icon: <CIcon icon={cilLoopCircular} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "بشپړ شوي",
        to: "/reception/completed-application",
        icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "تړل شوي ",
        to: "/reception/checkedout-application",
        icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavItem,
    name: "لټون ",
    to: "/reception/search",
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
  },
];
