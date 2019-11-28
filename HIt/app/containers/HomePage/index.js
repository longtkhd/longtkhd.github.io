/*
 * ProfilePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';


// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
// import H2 from 'components/H2';
// import ReposList from 'components/ReposList';
// import AtPrefix from './AtPrefix';
// import CenteredSection from './CenteredSection';
// import Form from './Form';
// import Input from './Input';
// import Section from './Section';
// import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function ProfilePage({
  username,
  // loading,
  // error,
  // repos,
  onSubmitForm,
  // onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  // const reposListProps = {
  //   loading,
  //   error,
  //   repos,
  // };

  return (
    <div className="home header-has-img ">
      {/* mobile nav */}
      <div className="mobile-nav">
        <button className="btn-mobile mobile-nav-close">
          <i className="rsicon rsicon-close" />
        </button>
        <div className="mobile-nav-inner">
          <nav id="mobile-nav" className="nav">
            <ul className="clearfix">
              <li>
                <a href="#about">Giới thiệu</a>
              </li>
              <li>
                <a href="#skills">Kĩ năng</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>{' '}
              </li>
              <li>
                <a href="#experience">Kinh nghiệm</a>
              </li>
              <li>
                <a href="#references">Tham chiếu</a>
              </li>
              <li>
                <a href="#contact">
                  Liên hệ <span />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <header className="header">
        <div
          className="head-bg bg-img"
          style={{ backgroundImage: 'url(img/uploads/rs-cover.jpg)' }}
        />

        <div className="head-bar">
          <div className="head-bar-inner">
            <div className="row">
              <div className="col-sm-3 col-xs-6">
                <a className="logo" href="/">
                  <img src="img/uploads/logoHITTT.png" />
                  <span
                    style={{
                      fontFamily: 'Arial',
                      paddingLeft: '10px',
                    }}
                  >
                    Do Thang
                  </span>
                </a>
                {/* <!-- <a class="head-logo" href=""><img src="img/rs-logo.png" alt="RScard"/></a> --> */}
              </div>

              <div className="col-sm-9 col-xs-6">
                <div className="nav-wrap">
                  <nav id="nav" className="nav">
                    <ul className="clearfix">
                      <li>
                        <a href="#about">Giới thiệu</a>
                      </li>
                      <li>
                        <a href="#skills">Kĩ năng</a>
                      </li>
                      <li>
                        <a href="#portfolio">Portfolio</a>{' '}
                      </li>
                      <li>
                        <a href="#experience">Kinh nghiệm</a>
                      </li>
                      <li>
                        <a href="#references">Tham chiếu</a>
                      </li>
                      <li>
                        <a href="#contact">
                          Liên hệ <span />
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <button className="btn-mobile btn-mobile-nav">Menu</button>
                </div>
                {/* <!-- .nav-wrap --> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <section id="about" className="section section-about">
            <div className="animate-up">
              <div className="section-box">
                <div className="profile">
                  <div className="row">
                    <div className="col-xs-5">
                      <div className="profile-photo">
                        <img src="img/uploads/thang2.jpg" alt="Đỗ Đình Thắng" />
                      </div>
                    </div>
                    <div className="col-xs-7">
                      <div className="profile-info">
                        <div className="profile-preword">
                          <span>Hello</span>
                        </div>
                        <h1 className="profile-title">
                          <span>Tôi là</span> Đỗ Đình Thắng
                        </h1>
                        <h2 className="profile-position">
                          Sinh viên và Lập trình viên
                        </h2>
                      </div>
                      <ul className="profile-list">
                        <li className="clearfix">
                          <strong className="title">Tuổi</strong>
                          <span className="cont">21</span>
                        </li>
                        <li className="clearfix">
                          <strong className="title">Địa chỉ</strong>
                          <span className="cont">Hà Nội - Việt Nam</span>
                        </li>
                        <li className="clearfix">
                          <strong className="title">E-mail</strong>
                          <span className="cont">
                            <a href="mailto:dothang.hit@gmail.com">
                              dothang.hit@gmail.com
                            </a>
                          </span>
                        </li>
                        <li className="clearfix">
                          <strong className="title">Số điện thoại</strong>
                          <span className="cont">
                            <a href="tel:+841659943355">+841659943355</a>
                          </span>
                        </li>
                        <li className="clearfix">
                          <strong className="title">Sinh viên</strong>
                          <span className="cont">Từ 2015 </span>
                        </li>
                        <li className="clearfix">
                          <strong className="title">
                            <span className="button">Lập trình viên</span>
                          </strong>
                          <span className="cont">
                            <i className="rsicon rsicon-calendar" />
                            Từ 2017
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="profile-social">
                  <ul className="social">
                    <li>
                      <a
                        className="ripple-centered"
                        href="https://www.facebook.com/yeu.manutd.37"
                        target="_blank"
                      >
                        <i className="rsicon rsicon-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="ripple-centered"
                        href="https://twitter.com/caybap"
                        target="_blank"
                      >
                        <i className="rsicon rsicon-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="ripple-centered"
                        href="https://www.linkedin.com/in/th%E1%BA%AFng-%C4%91%E1%BB%97-13021815b/"
                        target="_blank"
                      >
                        <i className="rsicon rsicon-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="ripple-centered"
                        href="https://plus.google.com/103467486855618651826"
                        target="_blank"
                      >
                        <i className="rsicon rsicon-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="ripple-centered"
                        href="https://dribbble.com/"
                        target="_blank"
                      >
                        <i className="rsicon rsicon-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="ripple-centered"
                        href="https://www.instagram.com/dothanghit"
                        target="_blank"
                      >
                        <i className="rsicon rsicon-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="section-txt-btn">
                <p>
                  Xin chào ! Tôi là Thắng , hiện tại tôi đang là sinh viên ngành
                  khoa học máy tính trường Đại học Công Nghiệp Hà Nội và là một
                  lập trình viên Web.
                </p>
              </div>
            </div>
          </section>
          <section id="skills" className="section section-skills">
            <div className="animate-up">
              <h2 className="section-title">Kĩ năng</h2>
              <div className="section-box">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="progress-bar">
                      <div className="bar-data">
                        <span className="bar-title">C#</span>
                        <span className="bar-value">60%</span>
                      </div>
                      <div className="bar-line">
                        <span className="bar-fill" data-width="60%" />
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="progress-bar">
                      <div className="bar-data">
                        <span className="bar-title">JavaScript</span>
                        <span className="bar-value">80%</span>
                      </div>
                      <div className="bar-line">
                        <span className="bar-fill" data-width="80%" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="progress-bar">
                      <div className="bar-data">
                        <span className="bar-title">C++</span>
                        <span className="bar-value">60%</span>
                      </div>
                      <div className="bar-line">
                        <span className="bar-fill" data-width="60%" />
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="progress-bar">
                      <div className="bar-data">
                        <span className="bar-title">HTML & CSS</span>
                        <span className="bar-value">80%</span>
                      </div>
                      <div className="bar-line">
                        <span className="bar-fill" data-width="80%" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="progress-bar">
                      <div className="bar-data">
                        <span className="bar-title">Nodejs + MongooDB</span>
                        <span className="bar-value">70%</span>
                      </div>
                      <div className="bar-line">
                        <span className="bar-fill" data-width="70%" />
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="progress-bar">
                      <div className="bar-data">
                        <span className="bar-title">Photoshop</span>
                        <span className="bar-value">70%</span>
                      </div>
                      <div className="bar-line">
                        <span className="bar-fill" data-width="70%" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- #skills --> */}

          <section id="portfolio" className="section section-portfolio">
            <div className="animate-up">
              <h2 className="section-title">Portfolio</h2>

              <div className="filter">
                <div className="filter-inner">
                  <div className="filter-btn-group">
                    <button data-filter="*">All</button>
                    <button data-filter=".photography">Photography</button>
                    <button data-filter=".nature">Nature</button>
                  </div>
                  <div className="filter-bar">
                    <span className="filter-bar-line" />
                  </div>
                </div>
              </div>

              <div className="grid">
                <div className="grid-sizer" />

                <div className="grid-item size22 photography">
                  <div className="grid-box">
                    <figure className="portfolio-figure">
                      <img src="img/uploads/portfolio/thang1.jpg" alt="" />
                      <figcaption className="portfolio-caption">
                        <div className="portfolio-caption-inner">
                          <h3 className="portfolio-title">
                            Bản Lác - Mai Châu
                          </h3>
                          <h4 className="portfolio-cat">Du lịch</h4>

                          <div className="btn-group">
                            <a
                              className="btn-link"
                              href="https://fb.com/yeu.manutd.37"
                              target="_blank"
                            >
                              <i className="rsicon rsicon-link" />
                            </a>
                            <a
                              className="portfolioFancybox btn-zoom"
                              data-fancybox-group="portfolioFancybox1"
                              href="#portfolio1-inline1"
                            >
                              <i className="rsicon rsicon-eye" />
                            </a>
                            <a
                              className="portfolioFancybox hidden"
                              data-fancybox-group="portfolioFancybox1"
                              href="#portfolio1-inline2"
                            />
                            <a
                              className="portfolioFancybox hidden"
                              data-fancybox-group="portfolioFancybox1"
                              href="#portfolio1-inline3"
                            />
                          </div>
                        </div>
                      </figcaption>
                    </figure>

                    {/* <!-- Start: Portfolio Inline Boxes --> */}
                    <div
                      id="portfolio1-inline1"
                      className="fancybox-inline-box"
                    >
                      <div
                        className="inline-embed"
                        data-embed-type="image"
                        data-embed-url="img/uploads/portfolio/thang1.jpg"
                      />
                      <div className="inline-cont">
                        <h2 className="inline-title">Câu lạc bộ Tin học HIT</h2>
                        <div className="inline-text">
                          <p>
                            Thời sinh viên của tôi gắn liền với câu lạc bộ tin
                            học HIT , ở đó với nhưng người bạn, người anh ,
                            người thầy. Nơi tôi được sống với đúng niềm đam mê
                            của bản thân.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      id="portfolio1-inline2"
                      className="fancybox-inline-box"
                    >
                      <div
                        className="inline-embed"
                        data-embed-type="image"
                        data-embed-url="img/uploads/portfolio/thang2.jpg"
                      />
                      <div className="inline-cont">
                        <div className="inline-text">
                          <h2 className="inline-title">
                            3 anh em chụp chung ngày HIT Open Day
                          </h2>
                          <p>
                            Bên tay trái là Phó chủ nhiệm câu lạc bộ Tin học HIT
                            Nguyễn Xuân Trường bên phải là chủ nhiệm câu lạc bộ
                            Phùng Thế Lâm
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      id="portfolio1-inline3"
                      className="fancybox-inline-box"
                    >
                      <div
                        className="inline-embed"
                        data-embed-type="iframe"
                        data-embed-url="https://www.youtube.com/watch?v=cZUwH1uEmbY"
                      />
                      <div className="inline-cont">
                        <div className="inline-text">
                          <h2 className="inline-title">
                            Câu lạc bộ Tin học HIT
                          </h2>
                          <p>
                            Câu lạc bộ HIT là câu lạc bộ Tin học trực thuộc khoa
                            CNTT trường Đại học Công Nghiệp Hà Nội
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End: Portfolio Inline Boxes --> */}
                  </div>
                </div>
                {/* <!-- .grid-item -->			 */}

                <div className="grid-item size11 bridge">
                  <div className="grid-box">
                    <figure className="portfolio-figure">
                      <img src="img/uploads/portfolio/thang3.jpg" alt="" />
                      <figcaption className="portfolio-caption">
                        <div className="portfolio-caption-inner">
                          <h3 className="portfolio-title">Thiên Phú Lâm</h3>
                          <h4 className="portfolio-cat">Du lịch</h4>

                          <div className="btn-group">
                            <a
                              className="btn-link"
                              href="https://fb.com/yeu.manutd.37"
                              target="_blank"
                            >
                              <i className="rsicon rsicon-link" />
                            </a>
                            <a
                              className="portfolioFancybox btn-zoom"
                              data-fancybox-group="portfolioFancybox2"
                              href="#portfolio2-inline1"
                            >
                              <i className="rsicon rsicon-eye" />
                            </a>
                          </div>
                        </div>
                      </figcaption>
                    </figure>

                    {/* <!-- Start: Portfolio Inline Boxes --> */}
                    <div
                      id="portfolio2-inline1"
                      className="fancybox-inline-box"
                    >
                      <div className="inline-cont">
                        <h2 className="inline-title">
                          Suspension Bridges - Design Technology
                        </h2>
                        <div className="inline-text" />
                      </div>
                    </div>
                    {/* <!-- End: Portfolio Inline Boxes --> */}
                  </div>
                </div>
                {/* <!-- .grid-item --> */}

                <div className="grid-item size11 nature photography">
                  <div className="grid-box">
                    <figure className="portfolio-figure">
                      <img src="img/uploads/portfolio/thang2.JPG" alt="" />
                      <figcaption className="portfolio-caption">
                        <div className="portfolio-caption-inner">
                          <h3 className="portfolio-title">Người bạn</h3>
                          <h4 className="portfolio-cat">
                            Những người bạn tại trường
                          </h4>

                          <div className="btn-group">
                            <a
                              className="portfolioFancybox btn-zoom"
                              data-fancybox-group="portfolioFancybox3"
                              href="#portfolio3-inline1"
                            >
                              <i className="rsicon rsicon-eye" />
                            </a>
                            <a
                              className="portfolioFancybox hidden"
                              data-fancybox-group="portfolioFancybox3"
                              href="#portfolio3-inline2"
                            />
                            <a
                              className="portfolioFancybox hidden"
                              data-fancybox-group="portfolioFancybox3"
                              href="#portfolio3-inline3"
                            />
                          </div>
                        </div>
                      </figcaption>
                    </figure>

                    {/* <!-- Start: Portfolio Inline Boxes --> */}
                    <div
                      id="portfolio3-inline1"
                      className="fancybox-inline-box"
                    >
                      <div
                        className="inline-embed"
                        data-embed-type="image"
                        data-embed-url="img/uploads/portfolio/portfolio-thumb-08-large.jpg"
                      />
                    </div>

                    <div
                      id="portfolio3-inline2"
                      className="fancybox-inline-box"
                    >
                      <div
                        className="inline-embed"
                        data-embed-type="image"
                        data-embed-url="img/uploads/portfolio/portfolio-thumb-04-large.jpg"
                      />
                    </div>

                    <div
                      id="portfolio3-inline3"
                      className="fancybox-inline-box"
                    >
                      <div
                        className="inline-embed"
                        data-embed-type="image"
                        data-embed-url="img/uploads/portfolio/portfolio-thumb-02-large.jpg"
                      />
                    </div>
                    {/* <!-- End: Portfolio Inline Boxes --> */}
                  </div>
                </div>
                {/* <!-- .grid-item --> */}
              </div>
            </div>
          </section>
          {/* <!-- #portfolio --> */}

          <section id="experience" className="section section-experience">
            <div className="animate-up">
              <h2 className="section-title">Kinh nghiệm làm việc</h2>

              <div className="timeline">
                <div className="timeline-bar" />
                <div className="timeline-inner clearfix">
                  <div className="timeline-box timeline-box-left">
                    <span className="dot" />
                    <div className="timeline-box-inner animate-right">
                      <span className="arrow" />
                      <div className="date">2016 - 2017</div>
                      <h3>I-SoftG</h3>
                      <h4>Fesher web </h4>
                      <p>nghiên cứu phát triển website cho khách hàng.</p>
                    </div>
                  </div>

                  <div className="timeline-box timeline-box-right">
                    <span className="dot" />
                    <div className="timeline-box-inner animate-left">
                      <span className="arrow" />
                      <div className="date">2011 - 2014</div>
                      <h3>TT CNTT - HaUI</h3>
                      <h4>Web Developer</h4>
                      <p>
                        Nghiên cứu phát triển hệ thống website Trường Đại học
                        Công Nghiệp Hà Nội
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- #experience --> */}

          <section id="education" className="section section-education">
            <div className="animate-up">
              <h2 className="section-title">Học vấn</h2>
              <div className="timeline">
                <div className="timeline-bar" />
                <div className="timeline-inner clearfix">
                  <div className="timeline-box timeline-box-compact timeline-box-left">
                    <span className="dot" />

                    <div className="timeline-box-inner animate-right">
                      <span className="arrow" />
                      <div className="date">
                        <span>2015 - 2018</span>
                      </div>
                      <h3>Trường Đại học Công Nghiệp Hà Nội</h3>
                      <h4>Ngành khoa học máy tính</h4>
                    </div>
                  </div>

                  <div className="timeline-box timeline-box-compact timeline-box-right">
                    <span className="dot" />

                    <div className="timeline-box-inner animate-left">
                      <span className="arrow" />
                      <div className="date">
                        <span>2012 - 2015</span>
                      </div>
                      <h3>Trường Phổ thông Hồng Đức</h3>
                      <h4>12A1</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="text-section" className="section section-text">
            <div className="animate-up animated">
              <h2 className="section-title">Châm ngôn sống</h2>
              <div className="section-box">
                <p>
                  "Hãy cố để có được thứ mình muốn nhưng đừng cố bằng mọi cách"
                </p>
              </div>
            </div>
          </section>
          {/* <!-- #text-section --> */}

          <section id="interests" className="section section-interests">
            <div className="animate-up">
              <h2 className="section-title">Sở thích</h2>

              <div className="section-box">
                <p>
                  Tôi thích được đi du lịch, khám phá những miền đất lạ và thăm
                  thú những cái mưới. Đặc biệt tôi rất thích nấu ăn, thích ẩm
                  thực của các vùng miền khác nhau
                  <br />
                  Đôi lúc tôi cũng thích sự yên tĩnh, nhất là khi được tĩnh tâm
                  ngồi thiên, nó thật đặc biệt.
                </p>

                <ul className="interests-list">
                  <li>
                    <i className="map-icon map-icon-bicycling" />
                    <span>Đi xe đạp</span>
                  </li>
                  <li>
                    <i className="map-icon map-icon-movie-theater" />
                    <span>Xem phim</span>
                  </li>

                  <li>
                    <i className="map-icon map-icon-shopping-mall" />
                    <span>Mua lặt vặt</span>
                  </li>
                  <li>
                    <i className="map-icon map-icon-tennis" />
                    <span>Cầu lông</span>
                  </li>

                  <li>
                    <i className="map-icon map-icon-swimming" />
                    <span>Bơi</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* <!-- #interests --> */}
        </div>
      </div>
      <footer className="footer">
        <div className="footer-social">
          <div>
            <span
              style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: '25px',
                fontWeightL: 'bold',
                color: 'white',
              }}
            >
              {' '}
              Power By HIT CLUB
            </span>
          </div>
          <ul className="social">
            <li>
              <a
                className="ripple-centered"
                href="https://www.facebook.com/HITClub.HaUI/"
                target="_blank"
              >
                <i className="rsicon rsicon-facebook" />
              </a>
            </li>
            <li>
              <a
                className="ripple-centered"
                href="https://www.youtube.com/user/HitClubHaui"
                target="_blank"
              >
                <i className="rsicon rsicon-youtube" />
              </a>
            </li>
            <li>
              <a className="ripple-centered" href="#" target="_blank">
                <i className="rsicon rsicon-google-plus" />
              </a>
            </li>
            <li>
              <a className="ripple-centered" href="#" target="_blank">
                <i className="rsicon rsicon-dribbble" />
              </a>
            </li>
            <li>
              <a
                className="ripple-centered"
                href="https://instagram.com/dothang.hit"
                target="_blank"
              >
                <i className="rsicon rsicon-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      {/* <!-- .footer --> */}
    </div>
    // </div>
  );
}

ProfilePage.propTypes = {
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  // onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ProfilePage);
