import * as Yup from "yup";
import { user_roles } from "./global-data";
const logUser = localStorage.getItem("user_role");
export const newAppointmentValidationSchema = Yup.object().shape({
  directorate: Yup.string().required("ریاست ټاکل اړین دی"),
  appointment_type: Yup.string().required("د لیدنې ډول اړین دی"),
  purpose: Yup.string().required("د لیدنې موخه اړینه دی"),
});

export const createVisitorValidationSchema = Yup.object().shape({
  name: Yup.string().required("نوم اړین دی"),
  tazkera_number: Yup.string()
    .required("د تذکرې شمیره اړینه دی")
    .max(15, "د تذکرې شمیره صحیح نده")
    .min(3, "د تذکرې شمیره صحیح نده"),
  father_name: Yup.string().required("د پلار نوم اړین دی"),
  contact: Yup.string()
    .required("د تلفن شمیره اړینه ده")
    .max(14, "د تلفن شمیره صحیح نده")
    .min(8, "د تلفن شمیره صحیح نده")
    .matches(/^[\+\d0-9۰-۹]+$/, "د تلفن شمیره باید اعداد وي"),
  email: Yup.string().email("لطفا برښنالیک سم ولیکئ"),
  province: Yup.string().required("ولایت اړین دی"),
  // occupation: Yup.string().required("دنده اړینه دی"),
});

export const approvingAppointmentValidationSchema = Yup.object().shape({
  appointment_date: Yup.string().required("نیټه اړینه ده"),
});

export const rejectingReasonValidationSchema = Yup.object().shape({
  reason: Yup.string().required("د علت لیکل اړین دی"),
});

export const visitorSearchValidationSchema = Yup.object().shape({
  tazkera_number: Yup.string().required("د تذکرې شمیره اړینه ده"),
});

// Application
export const newApplicationValidationSchema = Yup.object().shape({
  directorate: Yup.string().required("ریاست ټاکل اړین دی"),
  purpose: Yup.string().required("د اسنادو موخه اړینه دی"),
});

export const CommentValidationSchema = Yup.object().shape({
  comment: Yup.string().required("د ملاحظاتو لیکل اړین دي"),
});

// login
export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required("برښنالیک/آیډي اړینه ده"),
  password: Yup.string().required(" پسورډ اړین دی"),
});

export const changePasswordValidationSchema = Yup.object().shape({
  current_password: Yup.string().required("برښنالیک/آیډي اړینه ده"),
  new_password: Yup.string().required(" پسورډ اړین دی"),
  repeat_new_password: Yup.string()
    .required("د نوي پسورډ تکرار ولیکئ")
    .oneOf(
      [Yup.ref("new_password"), null],
      "نوی پسورډ او د نوي پسورډ تکرار یو رقم ندي"
    ),
});

export const generalSearchValidationSchma = Yup.object().shape({
  search_input: Yup.string().required("د تذکرې/تلفن/آیډي شمیره اړینه ده"),
  target: Yup.string().required(" د لټون ډول اړین دی"),
});

export const proforamvaIncorporationValidationSchema = Yup.object().shape({
  // ltd_license_number: Yup.string().required("د شرکت د جواز نمبر اړین دی"),
  // introduced_by: Yup.string().required("د ملاقاتونو  ډول اړین دی"),
});

export const proformaCompanyValidationSchema = Yup.object().shape({
  // ltd_license_number: Yup.string().required("د شرکت د جواز نمبر اړین دی"),
  // introduced_by: Yup.string().required("د ملاقاتونو  ډول اړین دی"),
});

export const medicineDetailsValidationSchema = Yup.object().shape({
  // ltd_license_number: Yup.string().required("د شرکت د جواز نمبر اړین دی"),
  // introduced_by: Yup.string().required("د ملاقاتونو  ډول اړین دی"),
});
export const importerAndProformaTypeValidationSchema = Yup.object().shape({
  importer: Yup.string().required("د تورید کوونکي ټاکل اړین دی"),
  proformaType: Yup.string().required("د پروفورمې ټایپ اړین دی"),
});

export const incorporationSearchValidationSchema = Yup.object().shape({
  license_number: Yup.string().required("د شرکت جواز ولیکئ"),
});

export const NGOMedicineValidationSchema = Yup.object().shape({
  // ltd_license_number: Yup.string().required("د شرکت د جواز نمبر اړین دی"),
  // introduced_by: Yup.string().required("د ملاقاتونو  ډول اړین دی"),
});

export const searchEmplyeeValidationSchema = Yup.object().shape({
  hr_code: Yup.string().required("مهرباني وکړئ د کارمند hrکوډ ولیکئ  "),
});
export const nationalCompanyDetailsValidationSchema = Yup.object().shape({
  company_name_in_dari: Yup.string().required("د فابریکې نوم اړین دی "),
  company_name_in_english: Yup.string().required(
    "د فابریکې انګریزي نوم اړین دی "
  ),
  // company_license: Yup.string().required("د جواز نمبر اړین دی "),
  // initial_budget: Yup.string().required("ابتدایي بودیجه اړینه ده "),
  // productـstype: Yup.string().required("د تولیدي اقلامو ډول اړین دی "),
  // service_type: Yup.string().required("د خدماتو ډول اړین دی "),
  // tax_date: Yup.string().required("د تکس نیټه اړینه ده "),
  // date_of_establishment: Yup.string().required("د تاسیس نیټه اړینه ده "),
});
