import AppointmentSearch from "./appointment-search";
import ApplicationSearch from "./application-search";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CCardHeader,
  CFormCheck,
} from "@coreui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { user_roles } from "src/views/data/global-data";
import { head_user, reception_application } from "src/_nav";
import { generalSearchValidationSchma } from "src/views/data/validation";

const SearchComponent = () => {
  const logUser = localStorage.getItem("user_role");
  const [searchTarget, setSearchTarget] = useState("");
  const [propsData, setPropsData] = useState({});
  const [search_based_on, setSearchBasedOn] = useState("tazkera_number");
  const [searchResult, setSearchResult] = useState(false);

  const targetList = [
    { value: "appointment", label: "لیدنه" },
    { value: "application", label: " اسناد" },
  ];

  const handleOptionChange = (e) => {
    setSearchBasedOn(e.target.value);
  };

  const specifyTarget = (data) => {
    setSearchTarget(data);
  };

  const handleSearch = (values) => {
    if (
      logUser === user_roles.head_user ||
      logUser === user_roles.directorate_manager
    ) {
      const dataForBackend = {
        search_input: values.search_input,
        serach_based_on: search_based_on,
        target: searchTarget,
      };
      setPropsData(dataForBackend);
      setSearchTarget(values.target);
    } else if (
      logUser === user_roles.reception_application ||
      logUser === user_roles.executive_manager
    ) {
      const dataForBackend = {
        search_input: values.search_input,
        serach_based_on: search_based_on,
        target: "application",
      };
      setPropsData(dataForBackend);
      setSearchTarget("application");
    } else if (logUser === user_roles.reception_appointment) {
      const dataForBackend = {
        search_input: values.search_input,
        serach_based_on: search_based_on,
        target: "appointment",
      };
      setPropsData(dataForBackend);
      setSearchTarget("appointment");
    }
    setSearchResult(searchTarget);
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h4 className="mt-2"> 🔎عمومي لټون</h4>
        </CCardHeader>
        <CCardBody>
          <div className="rounded">
            <Formik
              onSubmit={handleSearch}
              initialValues={{
                search_input: "",
                target:
                  logUser === user_roles.head_user ||
                  logUser === user_roles.directorate_manager
                    ? ""
                    : "notRequired",
              }}
              validationSchema={generalSearchValidationSchma}
              enableReinitialize={true}
            >
              {({
                values,
                setFieldValue,
                setFieldTouched,
                handleSubmit,
                handleChange,
                handleBlur,
                errors,
                touched,
              }) => (
                <Form>
                  <CRow className="justify-content-center m-4">
                    {(logUser === user_roles.head_user ||
                      logUser === user_roles.directorate_manager) && (
                      <CCol md={7} className="mb-4">
                        <label className="form-label mx-3" htmlFor="subject">
                          د لټون ډول
                          <span
                            style={{
                              color: "red",
                              marginInline: "5px",
                              paddingTop: "5px",
                            }}
                          >
                            *
                          </span>
                        </label>
                        <select
                          id="target"
                          value={values.target}
                          name="target"
                          onChange={(e) => {
                            setFieldValue("target", e.target.value);
                            specifyTarget(e.target.value);
                          }}
                          className={`form-control form-select-lg ${
                            errors.target && touched.target
                              ? "is-invalid form-select-lg    "
                              : ""
                          }`}
                        >
                          <option>وټاکئ/انتخاب</option>

                          {targetList?.map((option) => {
                            return (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            );
                          })}
                        </select>
                        {errors.target && touched.target ? (
                          <div className="invalid-feedback  errorMessageStyle mr-2 mb-3 mt-0">
                            {errors.target}
                          </div>
                        ) : null}
                      </CCol>
                    )}
                    <CCol md={7} className="">
                      <label className="form-label mr-5" htmlFor="subject">
                        د تذکرې/ تلفن/ آیډي شمیره
                        <span
                          style={{
                            color: "red",
                            marginInline: "5px",
                            paddingTop: "5px",
                          }}
                        >
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        id="search_input"
                        name="search_input"
                        className={`form-control form-select-lg ${
                          errors.search_input && touched.search_input
                            ? "is-invalid form-select-lg    "
                            : ""
                        }`}
                        value={values.search_input}
                        onChange={(e) =>
                          setFieldValue("search_input", e.target.value)
                        }
                        onBlur={() => setFieldTouched("search_input", true)}
                      />
                      {errors.search_input && touched.search_input ? (
                        <div className="invalid-feedback d-block errorMessageStyle mr-2">
                          {errors.search_input}
                        </div>
                      ) : null}
                    </CCol>
                    <CCol md={7} className="py-3 pr-5">
                      <CFormCheck
                        inline
                        type="radio"
                        value="tazkera_number"
                        label="تذکره"
                        checked={search_based_on === "tazkera_number"}
                        onChange={handleOptionChange}
                      />

                      <CFormCheck
                        inline
                        type="radio"
                        value="contact"
                        label="د تلفن شمیره"
                        checked={search_based_on === "contact"}
                        onChange={handleOptionChange}
                      />

                      <CFormCheck
                        inline
                        type="radio"
                        value="id"
                        label="آیډي"
                        checked={search_based_on === "id"}
                        disabled={searchTarget === "appointment" ? true : false}
                        onChange={handleOptionChange}
                      />
                    </CCol>
                  </CRow>

                  <CRow className="justify-content-center mx-5">
                    <CCol md={7} className=" text-end mt-3">
                      <CButton
                        type="submit"
                        className="btn-sm btn  px-5 py-2 mb-4 "
                      >
                        لټون
                      </CButton>
                    </CCol>
                  </CRow>
                </Form>
              )}
            </Formik>
          </div>
        </CCardBody>
      </CCard>
      {searchResult === "appointment" && <AppointmentSearch data={propsData} />}
      {searchResult === "application" && <ApplicationSearch data={propsData} />}
    </>
  );
};

export default SearchComponent;
