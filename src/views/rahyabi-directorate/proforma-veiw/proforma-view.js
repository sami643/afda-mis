import { CCardBody, CCard, CRow, CCol } from "@coreui/react";
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
          <div className="header-body d-flex decrease-font-size ">
            <div className="  decrease-font-size  col-3  ">
              <div className=" imarat_logo ">
                <img src={Imarat_Logo} alt="" />
              </div>
            </div>

            <div className="col-6   decrease-font-size title_middle_div">
              <h5 className=" text-center m-0  decrease-font-size">
                د افغانستان د خوړو او درملو ملي اداره
              </h5>
              <h5 className=" text-center m-0 decrease-font-size ">
                د مجازه درملو د تورید غوښتنلیک
              </h5>
            </div>

            <div className=" text-end decrease-font-size col-3">
              <div className="AfdaLogo  px-0">
                <img src={AFDA_Logo} alt="" />
              </div>
            </div>
          </div>
          <div className="formNo decrease-font-size  ">
            د مسلسل شمیره:{" "}
            <span>
              <b>58465</b>
            </span>
          </div>
          <div className="">
            <Divider className="divider" />
          </div>
          <div className="first_part_header decrease-font-size">
            <h6 className="decrease-font-size">
              لومړۍ برخ: د مراجعه کونکي شرکت لخوا
            </h6>
          </div>
          <div className="first_part_section_A_header ">
            <h6 className="decrease-font-size">
              الف: د توریدي شرکت او صادر کونکې کمپنۍ مشخصات
            </h6>
          </div>
          <div>
            <table id="customers" className="profomaDetails">
              <tr className="text-center">
                <th colSpan={12} className="col-12">
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
                <td className="importantData">9898</td>
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
                <td colSpan={2} className="emptyRow"></td>
              </tr>
            </table>
          </div>
          <div className="mt-2">
            <table id="customers" className="profomaDetails">
              <tr className="text-center">
                <th colSpan={12} className="col-12">
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

                <td>برښنالیک</td>
                <td>
                  <b> martin.dow@farma.gov.pak</b>
                </td>
              </tr>
              <tr>
                <td>د کمپنۍ دقیق آدرس</td>
                <td>
                  <h5> gulbarg, defense road, Lahore, Pakistan</h5>
                </td>
                <td>د اړیکې شمیره</td>
                <td>
                  <h5> +9377234655</h5>
                </td>
                <td>ویبسایت</td>
                <td>
                  <b> martin.dow@farma.gov.pak</b>
                </td>
              </tr>
              <tr>
                <td>د محصولاتو د تورید موخه</td>
                <td>
                  <h5> د انسانی استفادې وړ </h5>
                </td>
                <td colSpan={12} className="emptyRow"></td>
              </tr>
            </table>
          </div>
          <div class="outer-wrapper ">
            <div class="table-wrapper">
              <table id="customers">
                <thead>
                  <tr className="text-center">
                    <th colSpan={9}>
                      <h3>د توریدي درملو لست</h3>
                    </th>
                  </tr>
                </thead>
                <thead>
                  <th>شماره</th>
                  <th>د درملو مشخصات</th>
                  <th>شکل</th>
                  <th>واحد</th>
                  <th>مقدار فی واحد</th>
                  <th>تعداد واحد</th>
                  <th>قیمت فی واحد</th>
                  <th>تعداد واحد</th>
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
                      <h3>د درملو مجموعی قیمت</h3>
                    </td>

                    <td>
                      <b>180000$</b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={7} className="text-center">
                      <h3>متفرقه مصارف</h3>
                    </td>

                    <td>
                      <b>120$</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CCardBody>
      </CCard>
    </>
  );
};
export default ProformaView;
