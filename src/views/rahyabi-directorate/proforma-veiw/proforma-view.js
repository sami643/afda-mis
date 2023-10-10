import { CCardBody, CCard, CRow, CCol } from "@coreui/react";
import Imarat_Logo from "./../../../assets/images/imarat_logo.png";
import AFDA_Logo from "./../../../assets/images/afda_logo.png";
import React from "react";
import { Divider } from "antd";
import "./proforma-view-style.css";

const ProformaView = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <div className="header-body d-flex decrease-font-size ">
            <div className="  decrease-font-size  col-3  ">
              <div className=" imarat_logo ">
                <img src={Imarat_Logo} alt="" />
              </div>
            </div>

            <div className="col-6   decrease-font-size title_middle_div">
              <h5 className=" text-center m-0  decrease-font-size font_grade_l">
                د افغانستان د خوړو او درملو ملي اداره
              </h5>
              <h5 className=" text-center m-0 decrease-font-size font_grade_l ">
                د مجازه درملو د تورید غوښتنلیک
              </h5>
            </div>

            <div className=" text-end decrease-font-size col-3">
              <div className="AfdaLogo  px-0">
                <img src={AFDA_Logo} alt="" />
              </div>
            </div>
          </div>
          <div className="formNo decrease-font-size font_grade_ll">
            د مسلسل شمیره:
            <span>
              <b>58465</b>
            </span>
          </div>
          <div className="">
            <Divider className="divider" />
          </div>

          <div className="first_part_section_A_header ">
            <h6 className="decrease-font-size font_grade_ll">
              الف: د توریدي شرکت او صادر کونکې کمپنۍ مشخصات
            </h6>
          </div>
          <div>
            <table id="customers" className="profomaDetails">
              <tr className="text-center">
                <th colSpan={12} className="col-12 font_grade_l">
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
                <td className="importantData font_grade_lll">9898</td>
                <td>دجواز د اعتبار نیټه</td>
                <td>
                  <h4 className="font_grade_lll ">5-4-1405</h4>
                </td>
                <td>دقیق آدرس </td>
                <td>
                  <h5 className="font_grade_lll">
                    هوټل پروان شمشاد مارکیټ، افغانستان
                  </h5>
                </td>
              </tr>
              <tr>
                <td>ولایت</td>
                <td>
                  <h5 className="font_grade_lll">کابل</h5>
                </td>
                <td>هیواد</td>
                <td>
                  <h5 className="font_grade_lll">افغانستان</h5>
                </td>
                <td>برښنالیک</td>
                <td>
                  <h5 className="font_grade_lll">ghafari@frama.af</h5>
                </td>
              </tr>
              <tr>
                <td>د اړیکې شمیره</td>

                <td>
                  <h5 className="font_grade_lll">563243244564</h5>
                </td>
                <td>د شرکت ویبسایت</td>
                <td>
                  <h5 className="font_grade_lll" style={{ maxWidth: "200px" }}>
                    https:\\ghafari@frama.af
                  </h5>
                </td>
                <td>د انوایس مجموعي قیمت</td>
                <td>
                  <h5 className="font_grade_lll">564564</h5>
                </td>
              </tr>
              <tr>
                <td>د پیسو ډول</td>
                <td>
                  <h5 className="font_grade_lll">افغانی</h5>
                </td>
                <td>د اقلامو تعداد</td>
                <td>
                  <h4 className="font_grade_lll">15</h4>
                </td>
                <td colSpan={2}>
                  <h4 colSpan={3} className="font_grade_lll"></h4>
                </td>
              </tr>
              <tr>
                <th colSpan={12} className="col-12 font_grade_l">
                  1.1- د شرکت د نماینده مشخصات
                </th>
              </tr>

              <tr>
                <td className="">نوم</td>
                <td className="">
                  <h4 className="font_grade_lll">حاجی احمد خان</h4>
                </td>
                <td className="">د تذکرې شمیره</td>
                <td className="">
                  <h4 className="font_grade_lll">423423234</h4>
                </td>
                <td className="">د اړیکې شمیره</td>
                <td className="">
                  <h4 className="font_grade_lll">078644564</h4>
                </td>
              </tr>
            </table>
          </div>
          <div className="mt-2">
            <table id="customers" className="profomaDetails">
              <tr className="text-center">
                <th colSpan={12} className="col-12 font_grade_l">
                  2- د محصولاتو/درملو د تولید کونکې کمپنۍ مشخصات
                </th>
              </tr>
              <tr>
                <td colSpan={1}>د تولید کونکې کمپنۍ نوم</td>
                <td colSpan={5}>
                  <h3> Martin Dow Marker Ltd</h3>
                </td>
              </tr>
              <tr>
                <td>هیواد</td>
                <td>
                  <h4 className="font_grade_lll">پاکستان</h4>
                </td>
                <td>ولایت </td>
                <td>
                  <h3 className="font_grade_lll"> لاهور</h3>
                </td>

                <td>برښنالیک</td>
                <td className="font_grade_lll">
                  <b> martin.dow@farma.gov.pak</b>
                </td>
              </tr>
              <tr>
                <td>د کمپنۍ دقیق آدرس</td>
                <td>
                  <h5 className="font_grade_lll">
                    gulbarg, defense road, Lahore, Pakistan
                  </h5>
                </td>
                <td className="font_grade_lll">د اړیکې شمیره</td>
                <td>
                  <h5 className="font_grade_lll"> +9377234655</h5>
                </td>
                <td>ویبسایت</td>
                <td className="font_grade_lll">
                  <b> martin.dow@farma.gov.pak</b>
                </td>
              </tr>
              <tr>
                <td>د محصولاتو د تورید موخه</td>
                <td>
                  <h5 className="font_grade_lll"> د انسانی استفادې وړ </h5>
                </td>
                <td colSpan={12} className=""></td>
              </tr>
            </table>
          </div>
          <div className="first_part_header decrease-font-size mt-4 ">
            <h6 className="decrease-font-size ">
              ب: د درملو/ صحي محصولاتو لست
            </h6>
          </div>
          <div class="table-wrapper mt-2 ">
            <table id="customers">
              <thead>
                <tr className="text-center">
                  <th colSpan={9}>
                    <h4>
                      <b>د توریدي درملو لست</b>
                    </h4>
                  </th>
                </tr>
              </thead>
              <thead>
                <th className="medicine_table_head">شماره</th>
                <th className="medicine_table_head">د درملو مشخصات</th>
                <th className="medicine_table_head">شکل</th>
                <th className="medicine_table_head">واحد</th>
                <th className="medicine_table_head">مقدار فی واحد</th>
                <th className="medicine_table_head">تعداد واحد</th>
                <th className="medicine_table_head">قیمت فی واحد</th>
                <th className="medicine_table_head">تعداد واحد</th>
              </thead>
              <tbody>
                <tr>
                  <td>4</td>
                  <td>
                    <h4>Esomaprazole</h4>
                  </td>
                  <td>Capsole</td>
                  <td>
                    <h3>بسته</h3>
                  </td>
                  <td>1x24</td>
                  <td>
                    <h5>188990</h5>
                  </td>
                  <td>180000</td>
                  <td>
                    <h5>234</h5>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    <h4>Esomaprazole</h4>
                  </td>
                  <td>Capsole</td>
                  <td>
                    <h3>بسته</h3>
                  </td>
                  <td>1x24</td>
                  <td>
                    <h5>188990</h5>
                  </td>
                  <td>180000</td>
                  <td>
                    <h5>234</h5>
                  </td>
                </tr>

                <tr>
                  <td>6</td>
                  <td>
                    <h4>Esomaprazole</h4>
                  </td>
                  <td>Capsole</td>
                  <td>
                    <h3>بسته</h3>
                  </td>
                  <td>1x24</td>
                  <td>
                    <h5>188990</h5>
                  </td>
                  <td>180000</td>
                  <td>
                    <h5>234</h5>
                  </td>
                </tr>

                <tr>
                  <td>7</td>
                  <td>
                    <h4>Esomaprazole</h4>
                  </td>
                  <td>Capsole</td>
                  <td>
                    <h3>بسته</h3>
                  </td>
                  <td>1x24</td>
                  <td>
                    <h5>188990</h5>
                  </td>
                  <td>180000</td>
                  <td>
                    <h5>234</h5>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    <h4>Esomaprazole</h4>
                  </td>
                  <td>Capsole</td>
                  <td>
                    <h3>بسته</h3>
                  </td>
                  <td>1x24</td>
                  <td>
                    <h5>188990</h5>
                  </td>
                  <td>180000</td>
                  <td>
                    <h5>234</h5>
                  </td>
                </tr>

                <tr>
                  <td>9</td>
                  <td>
                    <h4>Esomaprazole</h4>
                  </td>
                  <td>Capsole</td>
                  <td>
                    <h3>بسته</h3>
                  </td>
                  <td>1x24</td>
                  <td>
                    <h5>188990</h5>
                  </td>
                  <td>180000</td>
                  <td>
                    <h5>234</h5>
                  </td>
                </tr>

                <tr>
                  <td>10</td>
                  <td>
                    <h4>Esomaprazole</h4>
                  </td>
                  <td>Capsole</td>
                  <td>
                    <h3>بسته</h3>
                  </td>
                  <td>1x24</td>
                  <td>
                    <h5>188990</h5>
                  </td>
                  <td>180000</td>
                  <td>
                    <h5>234</h5>
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>
                    <h4>Esomaprazole</h4>
                  </td>
                  <td>Capsole</td>
                  <td>
                    <h3>بسته</h3>
                  </td>
                  <td>1x24</td>
                  <td>
                    <h5>188990</h5>
                  </td>
                  <td>180000</td>
                  <td>
                    <h5>234</h5>
                  </td>
                </tr>

                <tr>
                  <td>12</td>
                  <td>
                    <h4>Esomaprazole</h4>
                  </td>
                  <td>Capsole</td>
                  <td>
                    <h3>بسته</h3>
                  </td>
                  <td>1x24</td>
                  <td>
                    <h5>188990</h5>
                  </td>
                  <td>180000</td>
                  <td>
                    <h5>234</h5>
                  </td>
                </tr>

                <tr>
                  <td colSpan={7} className="text-center">
                    <h3>مجموعی قیمت</h3>
                  </td>

                  <td>
                    <b>180000$</b>
                  </td>
                </tr>
                {/* <tr>
                  <td colSpan={7} className="text-center">
                    <h3>متفرقه مصارف</h3>
                  </td>

                  <td>
                    <b>120$</b>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </CCardBody>
      </CCard>
    </>
  );
};
export default ProformaView;
