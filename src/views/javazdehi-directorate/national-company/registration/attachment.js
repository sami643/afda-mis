import { CRow, CCol, CButton, CCardHeader } from "@coreui/react";
import React from "react";
import "./style.css";
import { Formik, Form } from "formik";
import dayjs from "dayjs";
import DatePicker from "react-multi-date-picker";
import arabic from "react-date-object/calendars/arabic";
import arabic_ar from "react-date-object/locales/arabic_ar";
import { Button } from "antd";
const dateFormat = "YYYY/MM/DD";
const Attachment = ({ onFormSubmit, onStepBack }) => {
  const serviceOptions = [
    {
      value: "1",
      label: "ملی",
    },
    {
      value: "2",
      label: "بین المللی",
    },
  ];

  const handleForm = (values) => {
    onFormSubmit({ ...values, step: 5 });
  };
  const stepBack = () => {
    onStepBack();
  };

  return (
    <>
      <CCardHeader className="mx-0">
        <h3 className="px-3 pt-4"> ضمیمه اسناد</h3>
      </CCardHeader>

      <Formik
        onSubmit={handleForm}
        initialValues={{ license_number: "" }}
        // validationSchema={incorporationSearchValidationSchema}
        enableReinitialize={true}
      >
        {({ values, setFieldValue, setFieldTouched, errors, touched }) => (
          <Form>
            <CRow className="justify-content-center mt-5 mb-5">
              <CCol md={6} className="mb-5">
                <label className="form-label mx-3" htmlFor="subject">
                  د فابریکې جواز pdf
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
                  class="form-control trans form-control-l"
                  id="inputField1"
                  name="attachment"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("attachment", event.currentTarget.files[0]);
                  }}
                />
              </CCol>
              <CCol md={6} className="mb-5">
                <label className="form-label mx-3" htmlFor="subject">
                  د مالک د تذکرې شمیره
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
                  class="form-control trans form-control-l"
                  id="inputField1"
                  name="attachment"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("attachment", event.currentTarget.files[0]);
                  }}
                />
              </CCol>
            </CRow>
            <div
              className={
                "form__item button__items d-flex justify-content-between m-5"
              }
            >
              <Button type={"default"} className="mx-2" onClick={stepBack}>
                شاته
              </Button>

              <CButton type="submit" className="btn-sm btn   px-4 py-2 mx-2 ">
                ثبت
              </CButton>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Attachment;
