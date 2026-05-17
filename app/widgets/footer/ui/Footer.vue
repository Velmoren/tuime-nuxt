<script setup lang="ts"></script>

<template>
  <footer class="footer-area">
    <!--== Start Footer Main ==-->
    <div class="footer-main">
      <div class="container pt--0 pb--0">
        <div class="row">
          <div class="col-md-6 col-lg-3">
            <div class="widget-item widget-about">
              <h4 class="widget-title">About Us</h4>
              <p class="desc">
                Lorem ipsum dolor sit amet, consectel adipisicing elit, sed do eiusmod temp incidid
                ut labore et dolo
              </p>
              <div class="social-icons">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="https://dribbble.com/" target="_blank" rel="noopener">
                  <i class="fa fa-dribbble"></i>
                </a>
                <a href="https://www.pinterest.com/" target="_blank" rel="noopener">
                  <i class="fa fa-pinterest-p"></i>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener">
                  <i class="fa fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="widget-item nav-menu-item1">
              <h4 class="widget-title">Information</h4>
              <h4
                class="widget-collapsed-title collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#widgetId-1"
              >
                Information
              </h4>
              <div id="widgetId-1" class="collapse widget-collapse-body">
                <div class="collapse-body">
                  <div class="widget-menu-wrap">
                    <ul class="nav-menu">
                      <li><a href="about-us.html">About Us</a></li>
                      <li><a href="account-login.html">Delivery Information</a></li>
                      <li><a href="account-login.html">Privacy Policy</a></li>
                      <li><a href="account-login.html">Terms & Conditions</a></li>
                      <li><a href="contact.html">Contact Us</a></li>
                      <li><a href="account-login.html">Loag In Info</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="widget-item nav-menu-item2">
              <h4 class="widget-title">Our Policy</h4>
              <h4
                class="widget-collapsed-title collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#widgetId-2"
              >
                Our Policy
              </h4>
              <div id="widgetId-2" class="collapse widget-collapse-body">
                <div class="collapse-body">
                  <div class="widget-menu-wrap">
                    <ul class="nav-menu">
                      <li><a href="account-login.html">Gallery</a></li>
                      <li><a href="shop.html">Brands</a></li>
                      <li><a href="account-login.html">Gift Certificates</a></li>
                      <li><a href="shop.html">Specials</a></li>
                      <li><a href="account.html">My Account Us</a></li>
                      <li><a href="about-us.html">About Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="widget-item">
              <h4 class="widget-title">Contact Info:</h4>
              <h4
                class="widget-collapsed-title collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#widgetId-3"
              >
                Contact Info:
              </h4>
              <div id="widgetId-3" class="collapse widget-collapse-body">
                <div class="collapse-body">
                  <div class="widget-contact-info">
                    <p class="contact-info-desc">
                      If you have any question.please contact us at
                      <a href="mailto://demo@example.com">demo@example.com</a>
                    </p>
                    <div class="contact-item">
                      <div class="icon">
                        <i class="pe-7s-map-marker"></i>
                      </div>
                      <div class="info">
                        <p>
                          Your address goes here.
                          <br />
                          123, Address.
                        </p>
                      </div>
                    </div>
                    <div class="contact-item phone-info">
                      <div class="icon">
                        <i class="pe-7s-phone"></i>
                      </div>
                      <div class="info">
                        <p>
                          <span>Have any Question</span>
                          <br />
                          <a href="tel://0123456789">+0 123 456 789</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--== End Footer Main ==-->

    <!--== Start Footer Bottom ==-->
    <div class="footer-bottom">
      <div class="container pt--0 pb--0">
        <div class="row">
          <div class="col-12">
            <div class="footer-bottom-content">
              <p class="copyright">
                © 2021 Tuime. Made with
                <i class="fa fa-heart"></i>
                by
                <a target="_blank" href="https://themeforest.net/user/codecarnival">
                  Codecarnival.
                </a>
              </p>
              <div class="payment">
                <a href="account.html">
                  <img
                    src="/images/photos/payment.png"
                    width="192"
                    height="21"
                    alt="Payment Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--== End Footer Bottom ==-->
  </footer>
</template>

<style lang="scss" scoped>
/*
-----------------------------------------------------------------------
  Footer CSS
-----------------------------------------------------------------------
*/

.footer-area {
  .widget-item {
    margin-bottom: 40px;
    @media #{$sm-device} {
      margin-bottom: 30px;
    }
  }
  .nav-menu-item1 {
    padding-left: 68px;
    @media #{$lg-device} {
      padding-left: 50px;
    }
    @media #{$md-device} {
      padding-left: 0;
    }
  }
  .nav-menu-item2 {
    padding-left: 68px;
    @media #{$md-device} {
      padding-left: 0;
    }
  }
  .desc {
    color: #e8e8e8;
    font-size: 16px;
    line-height: 1.75;
    margin-right: -4px;
    margin-bottom: 24px;
    @media #{$lg-device} {
      font-size: 14px;
    }
    @media #{$sm-device} {
      margin-right: 0;
    }
  }

  .widget-title {
    font-size: 30px;
    color: #e8e8e8;
    font-weight: $font-weight-semi-bold;
    text-transform: capitalize;
    margin-bottom: 20px;
    @media #{$lg-device} {
      font-size: 24px;
    }
    @media #{$sm-device} {
      display: none;
    }
  }

  .nav-menu {
    margin-bottom: 0;
    li {
      color: #e8e8e8;
      display: block;
      line-height: 34px;
      a {
        color: #e8e8e8;
        font-size: 16px;
        line-height: 34px;
        padding: 0 0;
        display: block;
        @media #{$lg-device} {
          font-size: 14px;
        }
        &:hover {
          color: $theme-color2;
        }
      }
    }
  }
}

.footer-main {
  background: #474654;
  position: relative;
  padding: 104px 0 30px;
  @media #{$lg-device} {
    padding: 75px 0 25px;
  }
  @media #{$sm-device} {
    padding: 75px 0 50px;
  }

  .widget-about {
    @media #{$sm-device} {
      text-align: center;
    }
    .widget-title {
      @media #{$sm-device} {
        display: block;
        margin-bottom: 0;
      }
    }
    .desc {
      margin-top: 25px;
      @media #{$sm-device} {
        margin-top: 15px;
      }
    }
  }

  .widget-logo {
    margin-bottom: 28px;
  }

  .widget-contact-info {
    .contact-info-desc {
      color: #e8e8e8;
      font-size: 16px;
      line-height: 1.625;
      margin-bottom: 34px;
      margin-top: 24px;
      @media #{$lg-device} {
        font-size: 14px;
        margin-bottom: 20px;
      }
      @media #{$sm-device} {
        margin-top: 8px;
        margin-bottom: 22px;
      }
      a {
        color: $theme-color2;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .contact-item {
      display: flex;
      margin-bottom: 28px;
      @media #{$lg-device} {
        margin-bottom: 22px;
      }
      .icon {
        background-color: #ffd868;
        border-radius: 10px;
        color: #721b65;
        font-size: 30px;
        height: 50px;
        width: 50px;
        display: inline-block;
        text-align: center;
        line-height: 58px;
        @media #{$lg-device} {
          font-size: 24px;
          height: 40px;
          width: 40px;
          line-height: 45px;
        }
      }
      .info {
        margin-left: 21px;
        margin-top: -2px;
        @media #{$lg-device} {
          margin-left: 10px;
        }
        p {
          color: #e8e8e8;
          font-size: 16px;
          font-weight: $font-weight-semi-bold;
          line-height: 1.625;
          @media #{$lg-device} {
            font-size: 14px;
          }
        }
      }
      &.phone-info {
        @media #{$sm-device} {
          margin-bottom: 10px;
        }
        .info {
          span {
            color: $theme-color2;
            font-weight: $font-weight-bold;
          }
          a {
            color: #e8e8e8;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  .social-icons {
    display: flex;
    margin-top: 0;
    @media #{$sm-device} {
      margin-bottom: 0;
      justify-content: center;
    }
    a {
      border-radius: 7px;
      border: 0;
      color: $theme-color;
      display: inline-block;
      height: 36px;
      line-height: 38px;
      font-size: 16px;
      position: relative;
      text-align: center;
      vertical-align: top;
      width: 36px;
      z-index: 1;
      @include transition(all 0.3s ease-out);
      @media #{$lg-device} {
        height: 32px;
        line-height: 33px;
        font-size: 14px;
        width: 32px;
      }
      + {
        a {
          margin-left: 10px;
        }
      }
      &:before {
        border-radius: 7px;
        background-color: #fff;
        position: absolute;
        content: '';
        height: 100%;
        left: 0;
        top: 0;
        width: 100%;
        z-index: -1;
        @include transition(all 0.3s ease-out);
      }
      &:after {
        border-radius: 7px;
        background-color: #b79e55;
        position: absolute;
        content: '';
        height: 100%;
        left: 0;
        top: 0;
        width: 100%;
        z-index: -2;
        @include transition(all 0.3s ease-out);
      }
      &:hover {
        &:before {
          background-color: $theme-color2;
        }
        &:after {
          left: 2px;
          top: 2px;
        }
      }
    }
  }

  .widget-collapsed-title {
    display: block;
    position: relative;
    background-color: #474654;
    border: 1px solid #75757b;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    border-radius: 0;
    cursor: pointer;
    font-size: 15px;
    margin-bottom: 0;
    color: #fff;
    font-weight: 600;
    @include select-none(none);
    @media #{$md-up-device} {
      display: none;
    }
    &:before {
      font-family: 'FontAwesome';
      font-size: 14px;
      content: '\f0d7';
      position: absolute;
      right: 0;
      height: 100%;
      width: 60px;
      text-align: center;
    }
    &:not(.collapsed) {
      &:before {
        content: '\f0d8';
        font-family: 'FontAwesome';
      }
    }
  }

  .widget-collapse-body {
    @include transition(all 0.3s ease-out);
    @media #{$md-up-device} {
      display: block;
    }
    @media #{$sm-device} {
      background-color: #474654;
      border: 1px solid #75757b;
      border-top: none;
    }
    .collapse-body {
      @media #{$sm-device} {
        padding: 19px 24px 17px;
      }
    }
  }
}

.footer-bottom {
  background: #474654;
  padding: 0 0;
  position: relative;
  color: #999;
  .footer-bottom-content {
    align-items: center;
    border-top: 1px solid #75757b;
    display: flex;
    justify-content: space-between;
    padding: 21px 0;
    @media #{$sm-device} {
      text-align: center;
      flex-direction: column-reverse;
    }
  }
  .copyright {
    color: #a1a1a1;
    font-size: 16px;
    margin-bottom: 0;
    line-height: 28px;
    position: relative;
    top: 1px;
    a {
      color: #a1a1a1;
      &:hover {
        color: $white;
      }
    }
    i {
      color: #ff0101;
      font-size: 15px;
      vertical-align: 0px;
      margin: 0 4px;
    }
  }
  .payment {
    @media #{$sm-device} {
      margin-bottom: 16px;
      margin-top: 4px;
    }
  }
}
</style>
