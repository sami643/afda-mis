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
    name: <FormattedMessage id="foreign_company_register" />,
    to: "/rahyabi/foreign-company-register",
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: <FormattedMessage id="Sabt-Karmand" />,
    to: "/hr-directorate/staff-register",
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: <FormattedMessage id="Create Technical Board" />,
    to: "/rahyabi/create-technical-board",
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: <FormattedMessage id="Technical Boards list" />,
    to: "/rahyabi/technical-boards-list",
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: <FormattedMessage id="د شرکتونو لست" />,
    to: "/javazdehi/incorporations-list",
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: <FormattedMessage id="د بهرنۍ کمپنیو لست" />,
    to: "/rahyabi/foreign-company-list",
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: <FormattedMessage id="د داخلی فابریکې ثبت" />,
    to: "/javazdehi/national-company-register",
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: <FormattedMessage id="د داخلی فابریکو لست" />,
    to: "/javazdehi/national-company-list",
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: <FormattedMessage id="د توریدي درملو ثبت" />,
    to: "/rahyabi/imported-product-register",
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
