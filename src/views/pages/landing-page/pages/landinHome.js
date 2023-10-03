import React, { useRef } from "react";
import Navbar from "src/views/pages/landing-page/components/Navbar/Navbar";
import Footer from "../../landing-page/components/Footer/Footer";
import ChairManPic from "src/views/pages/landing-page/pages/1212.JPG";
import Adminstration from "src/views/pages/landing-page/pages/adminstr.JPG";
import "src/views/pages/landing-page/index.css";
import ScrollAnimation from "react-animate-on-scroll";
const Home = () => {
  const footerRef = useRef(null);

  return (
    <>
      <Navbar />
      <section class="partOne">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-7 col-12 textStyleClass">
              <ScrollAnimation
                animateIn="fadeInDown"
                animateOnce={true}
                duration={2}
              >
                <h2 className="my-3 mt-5 pt-5" data-aos-delay="100">
                  د خوړو او درملو ملي اداري د عمومی ریس پیغام
                </h2>

                <h4 className="mb-4 chairmanMessage">
                  له خوراکي توکو وروسته درمل او طبي محصولات د ژوند له مهمو
                  اړتیاوو څخه ګڼل کیږی. چی باید د نړیوالو ستندردونو سره سم
                  تولید، وارد، ذخیره او وویشل شی
                </h4>
              </ScrollAnimation>
            </div>

            <div className="col-lg-6 col-md-5 col-12  pt-5 px-4 chairManPic">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
                duration={2}
              >
                <div className="contact-image pt-5 ">
                  <img
                    src={ChairManPic}
                    class="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      <section class="PartTwo">
        <div class="container">
          <div class="row">
            <div className="col-lg-6 col-md-5 col-12  pt-5 px-4 chairManPic">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
                duration={2}
              >
                <div className="contact-image pt-5 ">
                  <img
                    src={Adminstration}
                    class="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </ScrollAnimation>
            </div>
            <div class="col-lg-6 col-md-7 col-12 textStyleClass pt-5">
              <ScrollAnimation
                animateIn="fadeInDown"
                animateOnce={true}
                duration={2}
              >
                <h2 class="my-3 mt-5   mt-5" data-aos-delay="100">
                  د ادارې لوری
                </h2>

                <h4 className="mb-4   chairmanMessage  ">
                  د ټولو وګړو با کیفیته ، موثره او خوندي درملو، خوړو او روغتیایي
                  محصولاتو ته لاسرسی.
                </h4>

                <h2 className="my-3 mt-5 pt-5 " data-aos-delay="100">
                  ماموریت
                </h2>

                <h4 className="mb-4 chairmanMessage ">
                  د ټولو خلکو د صحت د خوندیتوب لپاره د درملو، خوړو او روغتیایي
                  محصولاتو د تولید، تورید، لیږد ویش او ګټې اخیستنې تنظیم او
                  کنټرول.
                </h4>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
