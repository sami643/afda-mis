import React from "react";
// //////////////////////////////////////////////////////////////////////////
// Created By AFDA DEV Team

// Visitors
const AddVisitor = React.lazy(() =>
  import("./views/reception/visitor/add-visitor")
);
const AddApplicationVisitor = React.lazy(() =>
  import("./views/reception/visitor/add-visitor")
);
const UpdateVisitor = React.lazy(() =>
  import("./views/reception/visitor/update-visitor")
);

// Appointments
const NewAppointment = React.lazy(() =>
  import("./views/reception/appointment-reception/new-appointment")
);
const PendingAppointment = React.lazy(() =>
  import("./views/reception/appointment-reception/pending-appointment")
);
const ApprovedAppointment = React.lazy(() =>
  import("./views/reception/appointment-reception/approved-appointment")
);
const RejectedAppointment = React.lazy(() =>
  import("./views/reception/appointment-reception/rejected-appointment")
);
const CancelledAppointment = React.lazy(() =>
  import("./views/reception/appointment-reception/cancelled-appointment")
);
const CompletedAppointment = React.lazy(() =>
  import("./views/reception/appointment-reception/completed-appointment")
);
const UpdateAppointment = React.lazy(() =>
  import("./views/reception/appointment-reception/update-appointment")
);

// Application
const NewApplication = React.lazy(() =>
  import("./views/reception/application-reception/new-application")
);

const CompletedApplication = React.lazy(() =>
  import("./views/reception/application-reception/completed.application")
);
const InprocessApplication = React.lazy(() =>
  import("./views/reception/application-reception/inprocess-application")
);
const RejectedApplication = React.lazy(() =>
  import("./views/reception/application-reception/rejected-application")
);
const InitialApplication = React.lazy(() =>
  import("./views/reception/application-reception/initial-application")
);

const CancelledAPPlication = React.lazy(() =>
  import("./views/reception/application-reception/cancelled-application")
);

const ReceivedApplication = React.lazy(() =>
  import("./views/reception/application-reception/received-application")
);

const CheckedOutApplication = React.lazy(() =>
  import("./views/reception/application-reception/checkedout-application")
);
const UpdateApplication = React.lazy(() =>
  import("./views/reception/application-reception/update-application")
);

const Search = React.lazy(() => import("./views/reception/search/index"));
// Account setting
const AccountSetting = React.lazy(() => import("./views/account/setting"));
const AccountProfile = React.lazy(() => import("./views/account/profile"));
// //////////////////////////////////////////////////////////////////////////

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));
const Typography = React.lazy(() =>
  import("./views/theme/typography/Typography")
);

// Rahyaabi Directorates
const ProFormaRegistration = React.lazy(() =>
  import("./views/rahyabi-directorate/proforma/registration/main")
);
const ProformaView = React.lazy(() =>
  import("./views/rahyabi-directorate/proforma/veiw/proforma-view")
);
const CompanyRegister = React.lazy(() =>
  import("./views/rahyabi-directorate/foreign-company/registration/main")
);
const CreateTechnicalBoard = React.lazy(() =>
  import("./views/rahyabi-directorate/technical-board/create-technical-board")
);
const TechnicalBoardList = React.lazy(() =>
  import("./views/rahyabi-directorate/technical-board/technical-boards-list")
);
const TechnicalBoardUpdate = React.lazy(() =>
  import("./views/rahyabi-directorate/technical-board/update-technical-board")
);
const BoardMemberList = React.lazy(() =>
  import("./views/rahyabi-directorate/technical-board/board-member-list")
);
const addBoardMember = React.lazy(() =>
  import("./views/rahyabi-directorate/technical-board/add-board-member")
);
const ForeignCompanyList = React.lazy(() =>
  import("./views/rahyabi-directorate/foreign-company/list/index")
);
const ForeignCompanyListViewDetails = React.lazy(() =>
  import("./views/rahyabi-directorate/foreign-company/list/view")
);

// JawazDehiii Directorates
const IncorporationRegistration = React.lazy(() =>
  import("./views/javazdehi-directorate/incorporation/registration/main")
);
const IncorporationList = React.lazy(() =>
  import("./views/javazdehi-directorate/incorporation/list/index")
);
const IncorporationListViewDetails = React.lazy(() =>
  import("./views/javazdehi-directorate/incorporation/list/view")
);
const StaffRegistration = React.lazy(() =>
  import("./views/hr-and-adminstration-directorate/staff-registration")
);
const InternalCompanyRegistration = React.lazy(() =>
  import("./views/javazdehi-directorate/internal-company/registration/main")
);
const NationalCompanyRegistration = React.lazy(() =>
  import("./views/javazdehi-directorate/national-company/registration/index")
);

// Base
const Accordion = React.lazy(() => import("./views/base/accordion/Accordion"));
const Breadcrumbs = React.lazy(() =>
  import("./views/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const Carousels = React.lazy(() => import("./views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("./views/base/collapses/Collapses"));
const ListGroups = React.lazy(() =>
  import("./views/base/list-groups/ListGroups")
);
const Navs = React.lazy(() => import("./views/base/navs/Navs"));
const Paginations = React.lazy(() =>
  import("./views/base/paginations/Paginations")
);
const Placeholders = React.lazy(() =>
  import("./views/base/placeholders/Placeholders")
);
const Popovers = React.lazy(() => import("./views/base/popovers/Popovers"));
const Progress = React.lazy(() => import("./views/base/progress/Progress"));
const Spinners = React.lazy(() => import("./views/base/spinners/Spinners"));
const Tables = React.lazy(() => import("./views/base/tables/Tables"));
const Tooltips = React.lazy(() => import("./views/base/tooltips/Tooltips"));

// Buttons
const Buttons = React.lazy(() => import("./views/buttons/buttons/Buttons"));
const ButtonGroups = React.lazy(() =>
  import("./views/buttons/button-groups/ButtonGroups")
);
const Dropdowns = React.lazy(() =>
  import("./views/buttons/dropdowns/Dropdowns")
);

//Forms
const ChecksRadios = React.lazy(() =>
  import("./views/forms/checks-radios/ChecksRadios")
);
const FloatingLabels = React.lazy(() =>
  import("./views/forms/floating-labels/FloatingLabels")
);
const FormControl = React.lazy(() =>
  import("./views/forms/form-control/FormControl")
);
const InputGroup = React.lazy(() =>
  import("./views/forms/input-group/InputGroup")
);
const Layout = React.lazy(() => import("./views/forms/layout/Layout"));
const Range = React.lazy(() => import("./views/forms/range/Range"));
const Select = React.lazy(() => import("./views/forms/select/Select"));
const Validation = React.lazy(() =>
  import("./views/forms/validation/Validation")
);

const Charts = React.lazy(() => import("./views/charts/Charts"));

// Icons
const CoreUIIcons = React.lazy(() =>
  import("./views/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("./views/icons/flags/Flags"));
const Brands = React.lazy(() => import("./views/icons/brands/Brands"));

// Notifications
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Toasts = React.lazy(() => import("./views/notifications/toasts/Toasts"));

const Widgets = React.lazy(() => import("./views/widgets/Widgets"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/theme", name: "Theme", element: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", element: Colors },
  // ///////////////////////////////////////////////////////////////////////
  // Created By AFDA Developers

  // Visitors
  {
    path: "/reception/add-visitor",
    name: "New-Appointment",
    element: AddVisitor,
  },
  {
    path: "/reception/application/add-visitor",
    name: "New-Appointment",
    element: AddApplicationVisitor,
  },

  {
    path: "/reception/update-visitor",
    name: "Update-Visitor",
    element: UpdateVisitor,
  },

  // Appointments
  {
    path: "/reception/new-appointment",
    name: "New-Appointment",
    element: NewAppointment,
  },
  {
    path: "/reception/pending-appointment",
    name: "Pending-Appointment",
    element: PendingAppointment,
  },
  {
    path: "/reception/approved-appointment",
    name: "approved-Appointment",
    element: ApprovedAppointment,
  },
  {
    path: "/reception/rejected-appointment",
    name: "Rejected-Appointment",
    element: RejectedAppointment,
  },
  {
    path: "/reception/cancelled-appointment",
    name: "Cancelled-Appointment",
    element: CancelledAppointment,
  },
  {
    path: "/reception/completed-appointment",
    name: "Completed-Appointment",
    element: CompletedAppointment,
  },
  {
    path: "/reception/update-appointment",
    name: "Update-Appointment",
    element: UpdateAppointment,
  },

  // Applications
  {
    path: "/reception/new-application",
    name: "New-Application",
    element: NewApplication,
  },

  {
    path: "/reception/completed-application",
    name: "Completed-Application",
    element: CompletedApplication,
  },
  {
    path: "/reception/inprocess-application",
    name: "InPrecess-Application",
    element: InprocessApplication,
  },
  {
    path: "/reception/rejected-application",
    name: "Rejected-Application",
    element: RejectedApplication,
  },
  {
    path: "/reception/initial-application",
    name: "Initial-Application",
    element: InitialApplication,
  },
  {
    path: "/reception/cancel-application",
    name: "Cancelled-Application",
    element: CancelledAPPlication,
  },
  {
    path: "/reception/received-application",
    name: "Received-Application",
    element: ReceivedApplication,
  },
  {
    path: "/reception/checkedout-application",
    name: "CheckedOutApplication",
    element: CheckedOutApplication,
  },
  {
    path: "/reception/update-application",
    name: "Received-Application",
    element: UpdateApplication,
  },

  {
    path: "/reception/search",
    name: "Searcg",
    element: Search,
  },

  // Rahyaabi Directorate
  {
    path: "/rahyabi/proforma-register",
    name: "ProformaRegistration",
    element: ProFormaRegistration,
  },

  {
    path: "/rahyabi/proforma/proforma-view",
    name: "ProformaView",
    element: ProformaView,
  },
  {
    path: "/rahyabi/create-technical-board",
    name: "CreateTechnicalBoard",
    element: CreateTechnicalBoard,
  },
  {
    path: "rahyabi/foreign-company-register",
    name: "CompanyRegister",
    element: CompanyRegister,
  },

  {
    path: "/rahyabi/technical-boards-list",
    name: "CreateTechnicalBoard",
    element: TechnicalBoardList,
  },
  {
    path: "/rahyabi/update-board",
    name: "TechnicalBoardUpdate",
    element: TechnicalBoardUpdate,
  },
  {
    path: "rahyabi/board-member-list",
    name: "TechnicalBoardMembersList",
    element: BoardMemberList,
  },
  {
    path: "rahyabi/add-board-member",
    name: "AddMember",
    element: addBoardMember,
  },
  {
    path: "/rahyabi/foreign-company-list",
    name: "ForeignCompanyList",
    element: ForeignCompanyList,
  },
  {
    path: "rahyabi/foreign-company-list-view-details",
    name: "ForeignCompanyListVeiwListDatails",
    element: ForeignCompanyListViewDetails,
  },

  // JAVAZ dehiiii
  {
    path: "/javazdehi/incorporation-register",
    name: "IncorporationRegistration",
    element: IncorporationRegistration,
  },
  {
    path: "/javazdehi/incorporations-list",
    name: "IncorporationList",
    element: IncorporationList,
  },
  {
    path: "/javazdehi/incorporation-list-view-details",
    name: "IncorporationListViewDetails",
    element: IncorporationListViewDetails,
  },

  // {
  //   path: "/javazdehi/internal-company-register",
  //   name: "IncorporationListViewDetails",
  //   element: InternalCompanyRegistration,
  // },

  {
    path: "/javazdehi/national-company-register",
    name: "NationalCompanyRegistration",
    element: NationalCompanyRegistration,
  },

  // HR Derectorate Staff Registration
  {
    path: "/hr-directorate/staff-register",
    name: "CompanyRegister",
    element: StaffRegistration,
  },

  // Account
  {
    path: "/account/setting",
    name: "Account-Setting",
    element: AccountSetting,
  },
  {
    path: "/account/profile",
    name: "Account-Profile",
    element: AccountProfile,
  },

  // ///////////////////////////////////////////////////////////////////////////
  { path: "/theme/typography", name: "Typography", element: Typography },
  { path: "/base", name: "Base", element: Cards, exact: true },
  { path: "/base/accordion", name: "Accordion", element: Accordion },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", element: Breadcrumbs },
  { path: "/base/cards", name: "Cards", element: Cards },
  { path: "/base/carousels", name: "Carousel", element: Carousels },
  { path: "/base/collapses", name: "Collapse", element: Collapses },
  { path: "/base/list-groups", name: "List Groups", element: ListGroups },
  { path: "/base/navs", name: "Navs", element: Navs },
  { path: "/base/paginations", name: "Paginations", element: Paginations },
  { path: "/base/placeholders", name: "Placeholders", element: Placeholders },
  { path: "/base/popovers", name: "Popovers", element: Popovers },
  { path: "/base/progress", name: "Progress", element: Progress },
  { path: "/base/spinners", name: "Spinners", element: Spinners },
  { path: "/base/tables", name: "Tables", element: Tables },
  { path: "/base/tooltips", name: "Tooltips", element: Tooltips },
  { path: "/buttons", name: "Buttons", element: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", element: Buttons },
  { path: "/buttons/dropdowns", name: "Dropdowns", element: Dropdowns },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    element: ButtonGroups,
  },
  { path: "/charts", name: "Charts", element: Charts },
  { path: "/forms", name: "Forms", element: FormControl, exact: true },
  { path: "/forms/form-control", name: "Form Control", element: FormControl },
  { path: "/forms/select", name: "Select", element: Select },
  {
    path: "/forms/checks-radios",
    name: "Checks & Radios",
    element: ChecksRadios,
  },
  { path: "/forms/range", name: "Range", element: Range },
  { path: "/forms/input-group", name: "Input Group", element: InputGroup },
  {
    path: "/forms/floating-labels",
    name: "Floating Labels",
    element: FloatingLabels,
  },
  { path: "/forms/layout", name: "Layout", element: Layout },
  { path: "/forms/validation", name: "Validation", element: Validation },
  { path: "/icons", exact: true, name: "Icons", element: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", element: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", element: Flags },
  { path: "/icons/brands", name: "Brands", element: Brands },
  {
    path: "/notifications",
    name: "Notifications",
    element: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", element: Alerts },
  { path: "/notifications/badges", name: "Badges", element: Badges },
  { path: "/notifications/modals", name: "Modals", element: Modals },
  { path: "/notifications/toasts", name: "Toasts", element: Toasts },
  { path: "/widgets", name: "Widgets", element: Widgets },
];

export default routes;
