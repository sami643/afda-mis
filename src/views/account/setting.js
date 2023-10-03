import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CInputGroup,
  CRow,
} from "@coreui/react";
import ChangePass from "./../../assets/images/change-pssword.png";
import { Formik, Form } from "formik";
import { changePasswordValidationSchema } from "src/views/data/validation";
import { useRef, useState } from "react";
import { CToast, CToaster, CToastHeader, CToastBody } from "@coreui/react";
import { ResetPasswordAPI } from "src/api/utils";
import { Button, notification } from "antd";

const Setting = () => {
  const [isPasswordCHanged, setIsPasswordChanged] = useState(false);
  const [toast, addToast] = useState(0);
  const toaster = useRef();
  const exampleToast = (
    <CToast className="bg-info">
      <CToastHeader>
        <svg
          className="rounded me-2"
          width="20"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        ></svg>
        <div className="" style={{ fontSize: "22px" }}>
          ✔️بریا!{" "}
        </div>
      </CToastHeader>
      <CToastBody
        className="text-center toastBody"
        style={{ fontSize: "18px", textAlign: "center" }}
      >
        ستاسو پسورډ تغیر شو!
      </CToastBody>
    </CToast>
  );

  const handleChangePassword = async (values) => {
    const data = {
      current_password: values.current_password,
      new_password: values.new_password,
    };
    const response = await ResetPasswordAPI(data);
    console.log("response", response);
    if (response?.data?.message == "Password updated successfully.") {
      console.log("if Statement");
      notification.open({
        message: <div style={{ fontSize: "22px", color: "green" }}>بریا!</div>,
        description: (
          <div style={{ fontSize: "18px" }}>
            ستاسو پسورډ په بریالیټوب سره تغیر شو
          </div>
        ),
      });
    } else {
      notification.open({
        message: (
          <div style={{ fontSize: "22px", color: "red" }}>ناکامه هڅه!</div>
        ),
        description: (
          <div style={{ fontSize: "18px" }}>ستاسو مخکنی پسورډ سم ندی.</div>
        ),
      });
    }
  };
  return (
    <CCard className="mb-4">
      <div>
        <CToaster ref={toaster} push={toast} placement="top-center" />
      </div>
      <CCardHeader>
        <h4 className="mx-4">
          <img src={ChangePass} width={50} /> د پسورډ تغیرول
        </h4>
      </CCardHeader>
      <CCardBody>
        <Formik
          onSubmit={handleChangePassword}
          initialValues={{
            current_password: "",
            new_password: "",
            repeat_new_password: "",
          }}
          validationSchema={changePasswordValidationSchema}
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
              <CRow className="justify-content-center mt-5 mx-2">
                <CCol md={10} className="mx-2 mb-4">
                  <input
                    placeholder=" مخکنی پسورډ"
                    type="password"
                    name="current_password"
                    className={`form-control form-select-md ${
                      errors.current_password && touched.current_password
                        ? "is-invalid form-select-md    "
                        : ""
                    }`}
                    value={values.current_password}
                    onChange={(e) =>
                      setFieldValue("current_password", e.target.value)
                    }
                    onBlur={() => setFieldTouched("current_password", true)}
                  />
                  {errors.current_password && touched.current_password ? (
                    <div className="invalid-feedback d-block errorMessageStyle mr-5">
                      {errors.current_password}
                    </div>
                  ) : null}
                </CCol>
                <CCol md={10} className="mx-2 my-3">
                  <input
                    placeholder=" نوی پسورډ"
                    name="new_password"
                    type="password"
                    className={`form-control form-select-md ${
                      errors.new_password && touched.new_password
                        ? "is-invalid form-select-md    "
                        : ""
                    }`}
                    value={values.new_password}
                    onChange={(e) =>
                      setFieldValue("new_password", e.target.value)
                    }
                    onBlur={() => setFieldTouched("new_password", true)}
                  />
                  {errors.new_password && touched.new_password ? (
                    <div className="invalid-feedback d-block errorMessageStyle mr-5">
                      {errors.new_password}
                    </div>
                  ) : null}
                </CCol>
                <CCol md={10} className="mx-2">
                  <input
                    placeholder=" د نوي پسورډ تکرار"
                    type="password"
                    name="repeat_new_password"
                    className={`form-control form-select-md ${
                      errors.repeat_new_password && touched.repeat_new_password
                        ? "is-invalid form-select-md    "
                        : ""
                    }`}
                    value={values.repeat_new_password}
                    onChange={(e) =>
                      setFieldValue("repeat_new_password", e.target.value)
                    }
                    onBlur={() => setFieldTouched("repeat_new_password", true)}
                  />
                  {errors.repeat_new_password && touched.repeat_new_password ? (
                    <div className="invalid-feedback d-block errorMessageStyle mr-5">
                      {errors.repeat_new_password}
                    </div>
                  ) : null}
                </CCol>
              </CRow>
              <CRow className="py-5 px-5 justify-content-end mx-5 ">
                <CCol xs={5} className="text-left text-end mx-4 ">
                  <CButton
                    disabled={isPasswordCHanged ? true : false}
                    type="submit"
                    className="px-4 textUunderlinePosition"
                  >
                    ثبت
                  </CButton>
                </CCol>
              </CRow>
            </Form>
          )}
        </Formik>
      </CCardBody>
    </CCard>
  );
};
export default Setting;
