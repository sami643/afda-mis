import { CCardBody, CCard } from "@coreui/react";
import Imarat_Logo from "./../../../assets/images/imarat_logo.png";
import AFDA_Logo from "./../../../assets/images/afda_logo.png";
import React from "react";
import { Divider } from "antd";
import "./style.css";

const ProformaView = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <div className="header-body d-flex  justify-content-between">
            <div className="  col-md-4 col-xl-4 col-sm-6 ">
              <div className=" imarat_logo ">
                <img src={Imarat_Logo} width={100} alt="" />
              </div>
              <div className="formNo mt-4">
                د مسلسل شمیره: <span><b>58465</b></span>
              </div>
            </div>

            <div className="pt-5    col-md-4">
              <h6 className=" text-center m-0 ">
                د افغانستان د خوړو او درملو ملي اداره
              </h6>
              <h6 className=" text-center m-0 ">
                ډ مجازه درملو د تورید غوښتنلیک
              </h6>
            </div>

            <div className="col-md-4 col-xl-4 col-sm-6  text-end">
              <div className="AfdaLogo  px-0">
                <img src={AFDA_Logo} width={100} alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <Divider className="divider" />
          </div>

          <div className="first_part_header">
            <h6>لومړۍ برخ: د مراجعه کونکي شرکت لخوا</h6>
          </div>
          <div className="first_part_section_A_header">
            <h6>الف: د توریدي شرکت او صادر کونکې کمپنۍ مشخصات</h6>
          </div>
          <div>
            <table id="customers">
              <tr className="text-center">
                <th colSpan={9}>
                  1- د غوښتونکي شرکت مشخصات (ثبت شوی تورید کونکی)
                </th>
              </tr>
              <tr>
                <td colSpan={2}>د شرکت تجارتي نوم</td>
                <td colSpan={4}>
                  <h3> عمر غفاري غزنوي لمتید</h3>
                </td>
              </tr>
              <tr>
                <td>دجواز نمبر</td>
                <td>
                  <h4>564564</h4>
                </td>
                <td>دجواز د اعتبار نیټه</td>
                <td>
                  <h4>5-4-1405</h4>
                </td>
                <td>دقیق آدرس </td>
                <td>
                  <h5>هوټل پروان شمشاد مارکیټ، افغانستان</h5>
                </td>
              </tr>
              <tr>
                <td>ولایت</td>
                <td>
                  <h5>کابل</h5>
                </td>
                <td>هیواد</td>
                <td>
                  <h5>افغانستان</h5>
                </td>
                <td>د اړیکې شمیره</td>
                <td>
                  <h5>564564</h5>
                </td>
              </tr>
              <tr>
                <td>برښنالیک</td>
                <td>
                  <h5>ghafari@frama.af</h5>
                </td>
                <td>د شرکت ویبسایت</td>
                <td>
                  <h5>https:\\ghafari@frama.af</h5>
                </td>
                <td>د پروفورمې د انوایس مجموعي قیمت</td>
                <td>
                  <h5>564564</h5>
                </td>
              </tr>
              <tr>
                <td>د پیسو ډول</td>
                <td>
                  <h5>افغانی</h5>
                </td>
                <td>د اقلامو تعداد</td>
                <td>
                  <h4>15</h4>
                </td>
                <td colSpan={2}></td>
              </tr>
            </table>
          </div>
          <div className="mt-2">
            <table id="customers">
              <tr className="text-center">
                <th colSpan={9}>
                  2- د محصولاتو/درملو د تولید کونکې کمپنۍ مشخصات
                </th>
              </tr>
              <tr>
                <td colSpan={2}>د تولید کونکې کمپنۍ نوم</td>
                <td colSpan={4}>
                  <h3> Martin Dow Marker Ltd</h3>
                </td>
              </tr>
              <tr>
                <td>هیواد</td>
                <td>
                  <h4>پاکستان</h4>
                </td>
                <td>ولایت </td>
                <td>
                  <h3> لاهور</h3>
                </td>
                <td>د اړیکې شمیره</td>
                <td>
                  <h5> +9377234655</h5>
                </td>
              </tr>
              <tr>
                <td>د کمپنۍ دقیق آدرس</td>
                <td>
                  <h5> gulbarg, defense road, Lahore, Pakistan</h5>
                </td>
                <td>برښنالیک</td>
                <td>
                  <h5> martin.dow@farma.gov.pak </h5>
                </td>
                <td>ویبسایت</td>
                <td>
                  <h5>www.martinmarker.com </h5>
                </td>
              </tr>
              <tr>
                <td>د محصولاتو د تورید موخه</td>
                <td>
                  <h5> د انسانی استفادې وړ </h5>
                </td>
                <td colSpan={4}></td>
              </tr>
            </table>
          </div>
        </CCardBody>
      </CCard>
    </>
  );
};
export default ProformaView;
