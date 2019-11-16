<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>HTML to Wordpress: Quick Tutorial</title>
    <meta name="theme-color" content="#c9e0e04d" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <link
      rel="shortcut icon"
      href="<?php echo bloginfo('template_url'); ?>/assets/img/favicons/favicon.ico"
      type="image/x-icon"
    />
    <link rel="apple-touch-icon" href="<?php echo bloginfo('template_url'); ?>/assets/img/favicons/apple-touch-icon.png" />
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="<?php echo bloginfo('template_url'); ?>/assets/img/favicons/apple-touch-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="<?php echo bloginfo('template_url'); ?>/assets/img/favicons/apple-touch-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="<?php echo bloginfo('template_url'); ?>/assets/img/favicons/apple-touch-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="<?php echo bloginfo('template_url'); ?>/assets/img/favicons/apple-touch-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="<?php echo bloginfo('template_url'); ?>/assets/img/favicons/apple-touch-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="<?php echo bloginfo('template_url'); ?>/assets/img/favicons/apple-touch-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="<?php echo bloginfo('template_url'); ?>/assets/img/favicons/apple-touch-icon-180x180.png"
    />
    <link rel="stylesheet" href="./styles/main.css" />
    <?php
      wp_head()
    ?>
  </head>
  <body class="no-svg">
    <header>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-11 col-sm-12 col-md-12 col-lg-3">
            <a href="#" class="header__logo">
              <img
                src="<?php echo bloginfo('template_url'); ?>/assets/img/icons/svg/logo.svg"
                alt="Logo"
                class="header__logo-img"
              />
              <div class="header__logo-text">Logo</div>
            </a>
          </div>
          <div class="col-md-12 col-lg-9 offset-lg-0 col-xl-7 offset-xl-2 ">
            <div class="header__contacts">
              <div class="header__contacts-item">
                <img
                  src="<?php echo bloginfo('template_url'); ?>/assets/img/icons/svg/email.svg"
                  alt="email"
                  class="header__contacts-logo"
                />
                <a href="mailto:sudexp@icloud.com" class="header__contacts-mail"
                  >sudexp@icloud.com</a
                >
              </div>
              <div class="header__contacts-item">
                <img
                  src="<?php echo bloginfo('template_url'); ?>/assets/img/icons/svg/phone.svg"
                  alt="phone"
                  class="header__contacts-logo"
                />
                <div class="header__contacts-tel">
                  <a href="tel:+358400000000">+358400000000</a>
                  <a href="tel:+358500000000">+358500000000</a>
                </div>
              </div>
              <div class="header__contacts-item">
                <img
                  src="<?php echo bloginfo('template_url'); ?>/assets/img/icons/svg/pointer.svg"
                  alt="pointer"
                  class="header__contacts-logo"
                />
                <address>
                  Piippukatu 2<br />
                  Jyväskylä, 40100
                </address>
              </div>
            </div>
          </div>
        </div>
        <nav class="row" data-slide="1">
          <ul class="header__nav">
            <li>
              <a class="header__nav-item" href="#about">About company</a>
            </li>
            <li>
              <a class="header__nav-item" href="#specialists">Our team</a>
            </li>
            <li>
              <a class="header__nav-item" href="#products">Products</a>
            </li>
            <li>
              <a class="header__nav-item" href="#aboutus">Our history</a>
            </li>
            <li>
              <a class="header__nav-item" href="#contacts"
                >Contacts and feedback</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="header__hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>

    <div class="mainslider glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li
            style="background-image: url('<?php echo bloginfo('template_url'); ?>/assets/img/bg_1.jpg')"
            class="glide__slide"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-7 offset-1">
                  <h2 class="slider__title">Dreams come true</h2>
                  <a href="#" class="button">Learn more</a>
                </div>
              </div>
              <button
                class="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                <svg
                  width="15"
                  height="25"
                  viewBox="0 0 15 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.982942 13.3923L12.2253 24.631C12.7186 25.123 13.5179 25.123 14.0124 24.631C14.5057 24.1389 14.5057 23.3397 14.0124 22.8476L3.66178 12.5007L14.0112 2.15378C14.5045 1.66172 14.5045 0.862477 14.0112 0.369169C13.5179 -0.122894 12.7174 -0.122894 12.2241 0.369169L0.981696 11.6077C0.495966 12.0947 0.495966 12.9065 0.982942 13.3923Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button
                class="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                <svg
                  width="15"
                  height="25"
                  viewBox="0 0 15 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0171 11.6077L2.77467 0.369029C2.28137 -0.123032 1.48213 -0.123032 0.987571 0.369029C0.494263 0.861093 0.494264 1.66033 0.987572 2.15239L11.3382 12.4993L0.98882 22.8462C0.495512 23.3383 0.495512 24.1375 0.98882 24.6308C1.48213 25.1229 2.28261 25.1229 2.77592 24.6308L14.0183 13.3923C14.504 12.9053 14.504 12.0935 14.0171 11.6077Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </li>
          <li
            style="background-image: url('<?php echo bloginfo('template_url'); ?>/assets/img/bg_2.jpg')"
            class="glide__slide"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-7 offset-1">
                  <h2 style="color: #fff" class="slider__title">
                    Goods for all tastes
                  </h2>
                  <a href="#" class="button">Learn more</a>
                </div>
                <button
                  class="glide__arrow glide__arrow--left"
                  data-glide-dir="<"
                >
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.982942 13.3923L12.2253 24.631C12.7186 25.123 13.5179 25.123 14.0124 24.631C14.5057 24.1389 14.5057 23.3397 14.0124 22.8476L3.66178 12.5007L14.0112 2.15378C14.5045 1.66172 14.5045 0.862477 14.0112 0.369169C13.5179 -0.122894 12.7174 -0.122894 12.2241 0.369169L0.981696 11.6077C0.495966 12.0947 0.495966 12.9065 0.982942 13.3923Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button
                  class="glide__arrow glide__arrow--right"
                  data-glide-dir=">"
                >
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0171 11.6077L2.77467 0.369029C2.28137 -0.123032 1.48213 -0.123032 0.987571 0.369029C0.494263 0.861093 0.494264 1.66033 0.987572 2.15239L11.3382 12.4993L0.98882 22.8462C0.495512 23.3383 0.495512 24.1375 0.98882 24.6308C1.48213 25.1229 2.28261 25.1229 2.77592 24.6308L14.0183 13.3923C14.504 12.9053 14.504 12.0935 14.0171 11.6077Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </li>
          <li
            style="background-image: url('<?php echo bloginfo('template_url'); ?>/assets/img/bg_3.jpg')"
            class="glide__slide"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-7 offset-1">
                  <h2 class="slider__title">Always with you.</h2>
                  <a href="#" class="button">Learn more</a>
                </div>
                <button
                  class="glide__arrow glide__arrow--left"
                  data-glide-dir="<"
                >
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.982942 13.3923L12.2253 24.631C12.7186 25.123 13.5179 25.123 14.0124 24.631C14.5057 24.1389 14.5057 23.3397 14.0124 22.8476L3.66178 12.5007L14.0112 2.15378C14.5045 1.66172 14.5045 0.862477 14.0112 0.369169C13.5179 -0.122894 12.7174 -0.122894 12.2241 0.369169L0.981696 11.6077C0.495966 12.0947 0.495966 12.9065 0.982942 13.3923Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button
                  class="glide__arrow glide__arrow--right"
                  data-glide-dir=">"
                >
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0171 11.6077L2.77467 0.369029C2.28137 -0.123032 1.48213 -0.123032 0.987571 0.369029C0.494263 0.861093 0.494264 1.66033 0.987572 2.15239L11.3382 12.4993L0.98882 22.8462C0.495512 23.3383 0.495512 24.1375 0.98882 24.6308C1.48213 25.1229 2.28261 25.1229 2.77592 24.6308L14.0183 13.3923C14.504 12.9053 14.504 12.0935 14.0171 11.6077Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="about" id="about">
      <div class="container">
        <div class="row">
          <div class="col-md-10 offset-md-1 col-lg-5 offset-lg-1">
            <div class="about__img">
              <img src="<?php echo bloginfo('template_url'); ?>/assets/img/about.jpg" alt="about company" />
            </div>
          </div>
          <div
            class="col-md-10 offset-md-1 offset-lg-0 col-lg-6 col-xl-5 offset-xl-1"
          >
            <h1 class="title underlined">About the company</h1>
            <div class="about__text">
              Our company has been giving positive emotions for more than ten
              years! We embody all your dreams and help to find happiness!
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <a href="#" class="button">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="specialists" id="specialists">
      <div class="container">
        <div class="title">Our team</div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <img class="specialists__img" src="<?php echo bloginfo('template_url'); ?>/assets/img/team.jpg" alt="our team" />
          </div>
        </div>
      </div>
    </div>

    <div class="products" id="products">
      <div class="container">
        <h2 class="subtitle">Product line 1</h2>
        <div class="products__wrapper">
          <div
            class="products__item"
            style="background-image: url(<?php echo bloginfo('template_url'); ?>/assets/img/product_1.jpg)"
          >
            <div class="products__item-info">
              <div class="products__item-title">Product title 1</div>
              <div class="products__item-descr">
                Erat imperdiet sed euismod nisi porta. Tempus urna et pharetra
                pharetra massa massa ultricies mi quis.
              </div>
              <div class="minibutton products__trigger">More details</div>
            </div>
          </div>

          <div
            class="products__item"
            style="background-image: url(<?php echo bloginfo('template_url'); ?>/assets/img/product_2.jpg)"
          >
            <div class="products__item-info">
              <div class="products__item-title">Product title 2</div>
              <div class="products__item-descr">
                Nulla malesuada pellentesque elit eget gravida cum sociis
                natoque penatibus. Mi ipsum faucibus vitae aliquet nec
                ullamcorper sit amet risus.
              </div>
              <div class="minibutton products__trigger">More details</div>
            </div>
          </div>

          <div
            class="products__item"
            style="background-image: url(<?php echo bloginfo('template_url'); ?>/assets/img/product_3.jpg)"
          >
            <div class="products__item-info">
              <div class="products__item-title">Product title 3</div>
              <div class="products__item-descr">
                Ornare quam viverra orci sagittis. Vitae justo eget magna
                fermentum iaculis. Nunc mi ipsum faucibus vitae.
              </div>
              <div class="minibutton products__trigger">More details</div>
            </div>
          </div>

          <div
            class="products__item"
            style="background-image: url(<?php echo bloginfo('template_url'); ?>/assets/img/product_4.jpg)"
          >
            <div class="products__item-info">
              <div class="products__item-title">Product title 4</div>
              <div class="products__item-descr">
                Mauris vitae ultricies leo integer. Suspendisse faucibus
                interdum posuere lorem ipsum dolor sit amet. Vitae tortor
                condimentum lacinia quis vel eros.
              </div>
              <div class="minibutton products__trigger">More details</div>
            </div>
          </div>
          <div
            class="products__item"
            style="background-image: url(<?php echo bloginfo('template_url'); ?>/assets/img/product_5.jpg)"
          >
            <div class="products__item-info">
              <div class="products__item-title">Product title 5</div>
              <div class="products__item-descr">
                Sem fringilla ut morbi tincidunt augue. Enim sit amet venenatis
                urna cursus eget nunc. Lacinia quis vel eros donec acodio
                tempor.
              </div>
              <div class="minibutton products__trigger">More details</div>
            </div>
          </div>
          <div
            class="products__item"
            style="background-image: url(<?php echo bloginfo('template_url'); ?>/assets/img/product_6.jpg)"
          >
            <div class="products__item-info">
              <div class="products__item-title">Product title 6</div>
              <div class="products__item-descr">
                Laoreet id donec ultrices tincidunt arcu. A scelerisque purus
                semper eget duis. Elit scelerisque mauris pellentesque pulvinar
                pellentesque habitant morbi.
              </div>
              <div class="minibutton products__trigger">More details</div>
            </div>
          </div>
        </div>
        <h2 class="subtitle">Product line 2</h2>
        <div class="products__wrapper">
          <div
            class="products__item"
            style="background-image: url(<?php echo bloginfo('template_url'); ?>/assets/img/product_7.jpg)"
          >
            <div class="products__item-info">
              <div class="products__item-title">Product title 1</div>
              <div class="products__item-descr">
                Posuere lorem ipsum dolor sit amet consectetur. Tincidunt nunc
                pulvinar sapien et ligula ullamcorper malesuada proin. Viverra
                mauris in aliquam sem fringilla.
              </div>
              <div class="minibutton products__trigger">More details</div>
            </div>
          </div>
          <div
            class="products__item"
            style="background-image: url(<?php echo bloginfo('template_url'); ?>/assets/img/product_8.jpg)"
          >
            <div class="products__item-info">
              <div class="products__item-title">Product title 2</div>
              <div class="products__item-descr">
                Sed odio morbi quis commodo odio aenean sed. Morbi tempus
                iaculis urna id volutpat. Massa tincidunt dui ut ornare lectus
                sit amet. Eget est lorem ipsum dolor.
              </div>
              <div class="minibutton products__trigger">More details</div>
            </div>
          </div>
          <div
            class="products__item"
            style="background-image: url(<?php echo bloginfo('template_url'); ?>/assets/img/product_9.jpg)"
          >
            <div class="products__item-info">
              <div class="products__item-title">Product title 3</div>
              <div class="products__item-descr">
                Quisque sagittis purus sit amet. Posuere lorem ipsum dolor sit
                amet. A iaculis at erat pellentesque. Ut aliquam purus sit amet
                luctus venenatis lectus magna fringilla.
              </div>
              <div class="minibutton products__trigger">More details</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="products__alert">
              <span>Didn't find what you were looking for?</span> Eget gravida
              cum sociis natoque. Elementum nibh tellus molestie nunc. Viverra
              nibh cras pulvinar mattis nunc sed. In metus vulputate eu
              scelerisque felis imperdiet proin.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="aboutus" id="aboutus">
      <div class="container">
        <h1 class="title">Our history</h1>
        <div class="row">
          <div class="col-lg-6">
            <div class="subtitle">
              It all began with a desire
            </div>
            <div class="aboutus__text">
              Morbi leo urna molestie at elementum. Nulla pharetra diam sit
              amet. Augue interdum velit euismod in pellentesque massa placerat.
              <br /><br />
              Vel eros donec ac odio tempor orci dapibus ultrices in. Blandit
              massa enim nec dui nunc. Dolor sit amet consectetur adipiscing
              elit. Porttitor massa id neque aliquam vestibulum. Ac turpis
              egestas maecenas pharetra convallis posuere morbi leo. Nibh tellus
              molestie nunc non blandit massa enim nec dui. Enim facilisis
              gravida neque convallis.
            </div>
          </div>
          <div class="col-lg-6">
            <img class="aboutus__img" src="<?php echo bloginfo('template_url'); ?>/assets/img/about_1.jpg" alt="company" />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <img class="aboutus__img" src="<?php echo bloginfo('template_url'); ?>/assets/img/about_2.jpg" alt="company" />
          </div>
          <div class="col-lg-6">
            <div class="subtitle">
              The main thing is quality.
            </div>
            <div class="aboutus__text">
              Et netus et malesuada fames ac turpis. Nunc pulvinar sapien et
              ligula ullamcorper. A scelerisque purus semper eget duis at
              tellus. Sed egestas egestas fringilla phasellus faucibus
              scelerisque eleifend donec pretium. Sed ullamcorper morbi
              tincidunt ornare massa eget.
              <br /><br />
              Nunc sed blandit libero volutpat sed cras. Est sit amet facilisis
              magna. Sagittis nisl rhoncus mattis rhoncus urna neque viverra
              justo nec. Placerat vestibulum lectus mauris ultrices.
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div class="subtitle">
              Modern technologies
            </div>
            <div class="aboutus__text">
              Tempus iaculis urna id volutpat lacus laoreet non curabitur.
              Egestas egestas fringilla phasellus faucibus scelerisque eleifend
              donec. Purus in mollis nunc sed id semper. Vel pharetra vel turpis
              nunc eget lorem. Non enim praesent elementum facilisis leo vel.
              <br /><br />
              In mollis nunc sed id semper risus in hendrerit. Magnis dis
              parturient montes nascetur ridiculus. Nisl suscipit adipiscing
              bibendum est ultricies.
            </div>
          </div>
          <div class="col-lg-6">
            <img class="aboutus__img" src="<?php echo bloginfo('template_url'); ?>/assets/img/about_3.jpg" alt="company" />
          </div>
        </div>
      </div>
    </div>

    <div class="contacts" id="contacts">
      <h1 class="title">Where to find us</h1>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="contacts__descr underlined">
              We are in Jyväskylä, augue ut lectus arcu bibendum at varius vel.
              <br />
              <br />
              Piippukatu 2, Jyväskylä, 40340
            </div>
          </div>
          <div class="col-lg-6">
            <!-- GIS http://firmsonmap.api.2gis.ru/firmsconstructor/project/32
              <div id="map" class="contacts__map"></div> 
            -->
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="550"
                  height="350"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=piippukatu%202%20jyv%C3%A4skyl%C3%A4&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"></iframe><a href="https://www.whatismyip-address.com"
                  >whatismyip-address.com</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="title contacts__minititle">Contact us</div>
            <div class="contacts__info">
              <div class="contacts__phones">
                <div class="contacts__phoneblock">
                  Phone №1
                  <div class="contacts__phonewrap">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4887 0.000305176H5.51165C4.74276 0.000305176 4.1167 0.626369 4.1167 1.39525V17.6055C4.1167 18.3747 4.74276 19.0007 5.51165 19.0007H13.4883C14.2575 19.0007 14.8836 18.3747 14.8836 17.6058V1.39525C14.8836 0.626369 14.2575 0.000305176 13.4887 0.000305176ZM4.75005 2.5337H14.2503V14.5673H4.75005V2.5337ZM5.51165 0.633653H13.4883C13.9086 0.633653 14.2503 0.975344 14.2503 1.39525V1.90035H4.75005V1.39525C4.75005 0.975344 5.09174 0.633653 5.51165 0.633653ZM13.4887 18.3674H5.51165C5.09174 18.3674 4.75005 18.0257 4.75005 17.6058V15.2006H14.2503V17.6058C14.2503 18.0257 13.9086 18.3674 13.4887 18.3674Z"
                        fill="url(#paint0_linear)"
                      />
                      <path
                        d="M9.49961 15.5173C8.80102 15.5173 8.23291 16.0854 8.23291 16.784C8.23291 17.4826 8.80102 18.0507 9.49961 18.0507C10.1982 18.0507 10.7663 17.4826 10.7663 16.784C10.7663 16.0854 10.1982 15.5173 9.49961 15.5173ZM9.49961 17.4174C9.15031 17.4174 8.86626 17.1333 8.86626 16.784C8.86626 16.4347 9.15031 16.1507 9.49961 16.1507C9.8489 16.1507 10.133 16.4347 10.133 16.784C10.133 17.1333 9.8489 17.4174 9.49961 17.4174Z"
                        fill="url(#paint1_linear)"
                      />
                      <path
                        d="M8.23318 1.58367H9.49987C9.67499 1.58367 9.81655 1.44211 9.81655 1.26699C9.81655 1.09187 9.67499 0.950317 9.49987 0.950317H8.23318C8.05806 0.950317 7.9165 1.09187 7.9165 1.26699C7.9165 1.44211 8.05806 1.58367 8.23318 1.58367Z"
                        fill="url(#paint2_linear)"
                      />
                      <path
                        d="M10.45 1.58367H10.7666C10.9418 1.58367 11.0833 1.44211 11.0833 1.26699C11.0833 1.09187 10.9418 0.950317 10.7666 0.950317H10.45C10.2749 0.950317 10.1333 1.09187 10.1333 1.26699C10.1333 1.44211 10.2749 1.58367 10.45 1.58367Z"
                        fill="url(#paint3_linear)"
                      />
                      <path
                        d="M17.9274 1.44717C17.8035 1.32335 17.6034 1.32335 17.4796 1.44717C17.3558 1.57099 17.3558 1.77113 17.4796 1.89495C18.6627 3.07804 18.6627 5.0031 17.4796 6.18652C17.3558 6.31033 17.3558 6.51047 17.4796 6.63429C17.5413 6.69604 17.6224 6.72708 17.7035 6.72708C17.7845 6.72708 17.8656 6.69604 17.9274 6.63429C19.3575 5.20451 19.3575 2.87727 17.9274 1.44717Z"
                        fill="url(#paint4_linear)"
                      />
                      <path
                        d="M16.5939 2.168C16.47 2.04418 16.2699 2.04418 16.1461 2.168C16.0223 2.29182 16.0223 2.49196 16.1461 2.61578C16.5378 3.0075 16.7535 3.52938 16.7535 4.08483C16.7535 4.64027 16.5378 5.16183 16.1461 5.55356C16.0223 5.67738 16.0223 5.87752 16.1461 6.00134C16.2078 6.06309 16.2889 6.09412 16.37 6.09412C16.451 6.09412 16.5321 6.06309 16.5939 6.00134C17.1053 5.49023 17.3868 4.80938 17.3868 4.08483C17.3868 3.36028 17.1056 2.67911 16.5939 2.168Z"
                        fill="url(#paint5_linear)"
                      />
                      <path
                        d="M1.52035 1.89495C1.64417 1.77113 1.64417 1.57099 1.52035 1.44717C1.39653 1.32335 1.19639 1.32335 1.07257 1.44717C-0.357525 2.87727 -0.357525 5.20419 1.07257 6.63429C1.13433 6.69604 1.21539 6.72708 1.29646 6.72708C1.37753 6.72708 1.4586 6.69604 1.52035 6.63429C1.64417 6.51047 1.64417 6.31033 1.52035 6.18652C0.336941 5.00342 0.336941 3.07836 1.52035 1.89495Z"
                        fill="url(#paint6_linear)"
                      />
                      <path
                        d="M2.85352 2.08057C2.7297 1.95675 2.52956 1.95675 2.40574 2.08057C1.89432 2.59168 1.61279 3.27253 1.61279 3.99708C1.61279 4.72163 1.89432 5.40247 2.40574 5.9139C2.4675 5.97565 2.54856 6.00669 2.62963 6.00669C2.7107 6.00669 2.79177 5.97565 2.85352 5.9139C2.97734 5.79008 2.97734 5.58995 2.85352 5.46613C2.4618 5.0744 2.24614 4.55252 2.24614 3.99708C2.24614 3.44163 2.46148 2.92007 2.85352 2.52834C2.97702 2.40484 2.97702 2.20439 2.85352 2.08057Z"
                        fill="url(#paint7_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="9.50016"
                          y1="0.000305176"
                          x2="9.50016"
                          y2="19.0007"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#1C609E" />
                          <stop offset="1" stop-color="#1C609E" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear"
                          x1="9.49961"
                          y1="15.5173"
                          x2="9.49961"
                          y2="18.0507"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#1C609E" />
                          <stop offset="1" stop-color="#1C609E" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear"
                          x1="8.86652"
                          y1="0.950317"
                          x2="8.86652"
                          y2="1.58367"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#1C609E" />
                          <stop offset="1" stop-color="#1C609E" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear"
                          x1="10.6083"
                          y1="0.950317"
                          x2="10.6083"
                          y2="1.58367"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#1C609E" />
                          <stop offset="1" stop-color="#1C609E" />
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear"
                          x1="18.1933"
                          y1="1.35431"
                          x2="18.1933"
                          y2="6.72708"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#1C609E" />
                          <stop offset="1" stop-color="#1C609E" />
                        </linearGradient>
                        <linearGradient
                          id="paint5_linear"
                          x1="16.72"
                          y1="2.07513"
                          x2="16.72"
                          y2="6.09412"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#1C609E" />
                          <stop offset="1" stop-color="#1C609E" />
                        </linearGradient>
                        <linearGradient
                          id="paint6_linear"
                          x1="0.806608"
                          y1="1.35431"
                          x2="0.806608"
                          y2="6.72708"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#1C609E" />
                          <stop offset="1" stop-color="#1C609E" />
                        </linearGradient>
                        <linearGradient
                          id="paint7_linear"
                          x1="2.27959"
                          y1="1.9877"
                          x2="2.27959"
                          y2="6.00669"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#1C609E" />
                          <stop offset="1" stop-color="#1C609E" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <a href="tel:+358400000000">+358400000000</a>
                  </div>
                </div>
                <div class="contacts__phoneblock">
                  Phone №2
                  <div class="contacts__phonewrap">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4887 0.000305176H5.51165C4.74276 0.000305176 4.1167 0.626369 4.1167 1.39525V17.6055C4.1167 18.3747 4.74276 19.0007 5.51165 19.0007H13.4883C14.2575 19.0007 14.8836 18.3747 14.8836 17.6058V1.39525C14.8836 0.626369 14.2575 0.000305176 13.4887 0.000305176ZM4.75005 2.5337H14.2503V14.5673H4.75005V2.5337ZM5.51165 0.633653H13.4883C13.9086 0.633653 14.2503 0.975344 14.2503 1.39525V1.90035H4.75005V1.39525C4.75005 0.975344 5.09174 0.633653 5.51165 0.633653ZM13.4887 18.3674H5.51165C5.09174 18.3674 4.75005 18.0257 4.75005 17.6058V15.2006H14.2503V17.6058C14.2503 18.0257 13.9086 18.3674 13.4887 18.3674Z"
                        fill="url(#paint0_linear)"
                      />
                      <path
                        d="M9.49961 15.5173C8.80102 15.5173 8.23291 16.0854 8.23291 16.784C8.23291 17.4826 8.80102 18.0507 9.49961 18.0507C10.1982 18.0507 10.7663 17.4826 10.7663 16.784C10.7663 16.0854 10.1982 15.5173 9.49961 15.5173ZM9.49961 17.4174C9.15031 17.4174 8.86626 17.1333 8.86626 16.784C8.86626 16.4347 9.15031 16.1507 9.49961 16.1507C9.8489 16.1507 10.133 16.4347 10.133 16.784C10.133 17.1333 9.8489 17.4174 9.49961 17.4174Z"
                        fill="url(#paint1_linear)"
                      />
                      <path
                        d="M8.23318 1.58367H9.49987C9.67499 1.58367 9.81655 1.44211 9.81655 1.26699C9.81655 1.09187 9.67499 0.950317 9.49987 0.950317H8.23318C8.05806 0.950317 7.9165 1.09187 7.9165 1.26699C7.9165 1.44211 8.05806 1.58367 8.23318 1.58367Z"
                        fill="url(#paint2_linear)"
                      />
                      <path
                        d="M10.45 1.58367H10.7666C10.9418 1.58367 11.0833 1.44211 11.0833 1.26699C11.0833 1.09187 10.9418 0.950317 10.7666 0.950317H10.45C10.2749 0.950317 10.1333 1.09187 10.1333 1.26699C10.1333 1.44211 10.2749 1.58367 10.45 1.58367Z"
                        fill="url(#paint3_linear)"
                      />
                      <path
                        d="M17.9274 1.44717C17.8035 1.32335 17.6034 1.32335 17.4796 1.44717C17.3558 1.57099 17.3558 1.77113 17.4796 1.89495C18.6627 3.07804 18.6627 5.0031 17.4796 6.18652C17.3558 6.31033 17.3558 6.51047 17.4796 6.63429C17.5413 6.69604 17.6224 6.72708 17.7035 6.72708C17.7845 6.72708 17.8656 6.69604 17.9274 6.63429C19.3575 5.20451 19.3575 2.87727 17.9274 1.44717Z"
                        fill="url(#paint4_linear)"
                      />
                      <path
                        d="M16.5939 2.168C16.47 2.04418 16.2699 2.04418 16.1461 2.168C16.0223 2.29182 16.0223 2.49196 16.1461 2.61578C16.5378 3.0075 16.7535 3.52938 16.7535 4.08483C16.7535 4.64027 16.5378 5.16183 16.1461 5.55356C16.0223 5.67738 16.0223 5.87752 16.1461 6.00134C16.2078 6.06309 16.2889 6.09412 16.37 6.09412C16.451 6.09412 16.5321 6.06309 16.5939 6.00134C17.1053 5.49023 17.3868 4.80938 17.3868 4.08483C17.3868 3.36028 17.1056 2.67911 16.5939 2.168Z"
                        fill="url(#paint5_linear)"
                      />
                      <path
                        d="M1.52035 1.89495C1.64417 1.77113 1.64417 1.57099 1.52035 1.44717C1.39653 1.32335 1.19639 1.32335 1.07257 1.44717C-0.357525 2.87727 -0.357525 5.20419 1.07257 6.63429C1.13433 6.69604 1.21539 6.72708 1.29646 6.72708C1.37753 6.72708 1.4586 6.69604 1.52035 6.63429C1.64417 6.51047 1.64417 6.31033 1.52035 6.18652C0.336941 5.00342 0.336941 3.07836 1.52035 1.89495Z"
                        fill="url(#paint6_linear)"
                      />
                      <path
                        d="M2.85352 2.08057C2.7297 1.95675 2.52956 1.95675 2.40574 2.08057C1.89432 2.59168 1.61279 3.27253 1.61279 3.99708C1.61279 4.72163 1.89432 5.40247 2.40574 5.9139C2.4675 5.97565 2.54856 6.00669 2.62963 6.00669C2.7107 6.00669 2.79177 5.97565 2.85352 5.9139C2.97734 5.79008 2.97734 5.58995 2.85352 5.46613C2.4618 5.0744 2.24614 4.55252 2.24614 3.99708C2.24614 3.44163 2.46148 2.92007 2.85352 2.52834C2.97702 2.40484 2.97702 2.20439 2.85352 2.08057Z"
                        fill="url(#paint7_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="9.50016"
                          y1="0.000305176"
                          x2="9.50016"
                          y2="19.0007"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#1C609E" />
                          <stop offset="1" stop-color="#1C609E" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear"
                          x1="9.49961"
                          y1="15.5173"
                          x2="9.49961"
                          y2="18.0507"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#1C609E" />
                          <stop offset="1" stop-color="#1C609E" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear"
                          x1="8.86652"
                          y1="0.950317"
                          x2="8.86652"
                          y2="1.58367"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#1C609E" />
                          <stop offset="1" stop-color="#1C609E" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear"
                          x1="10.6083"
                          y1="0.950317"
                          x2="10.6083"
                          y2="1.58367"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#1C609E" />
                          <stop offset="1" stop-color="#1C609E" />
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear"
                          x1="18.1933"
                          y1="1.35431"
                          x2="18.1933"
                          y2="6.72708"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#1C609E" />
                          <stop offset="1" stop-color="#1C609E" />
                        </linearGradient>
                        <linearGradient
                          id="paint5_linear"
                          x1="16.72"
                          y1="2.07513"
                          x2="16.72"
                          y2="6.09412"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#1C609E" />
                          <stop offset="1" stop-color="#1C609E" />
                        </linearGradient>
                        <linearGradient
                          id="paint6_linear"
                          x1="0.806608"
                          y1="1.35431"
                          x2="0.806608"
                          y2="6.72708"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#1C609E" />
                          <stop offset="1" stop-color="#1C609E" />
                        </linearGradient>
                        <linearGradient
                          id="paint7_linear"
                          x1="2.27959"
                          y1="1.9877"
                          x2="2.27959"
                          y2="6.00669"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#1C609E" />
                          <stop offset="1" stop-color="#1C609E" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <a href="tel:+358500000000">+358500000000</a>
                  </div>
                </div>
              </div>
              <div class="contacts__mail">
                Or e-mail us
                <a href="mailto:sudexp@icloud.com">sudexp@icloud.com</a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="title contacts__minititle">Leave your feedback</div>
            <form action="#" class="contacts__feed">
              <label for="feedname"> Your name <span>*</span> </label>
              <input required type="text" id="feedname" name="feedname" />

              <label for="feedtext"> Your feedback <span>*</span> </label>
              <textarea required name="feedtext" id="feedtext"></textarea>
              <button class="minibutton">Send</button>

              <svg
                class="lds-spinner"
                width="65px"
                height="65px"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                style="background: none;"
              >
                <g transform="rotate(0 50 50)">
                  <rect
                    x="47"
                    y="24"
                    rx="9.4"
                    ry="4.8"
                    width="6"
                    height="12"
                    fill="#013476"
                  >
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.9166666666666666s"
                      repeatCount="indefinite"
                    ></animate>
                  </rect>
                </g>
                <g transform="rotate(30 50 50)">
                  <rect
                    x="47"
                    y="24"
                    rx="9.4"
                    ry="4.8"
                    width="6"
                    height="12"
                    fill="#013476"
                  >
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.8333333333333334s"
                      repeatCount="indefinite"
                    ></animate>
                  </rect>
                </g>
                <g transform="rotate(60 50 50)">
                  <rect
                    x="47"
                    y="24"
                    rx="9.4"
                    ry="4.8"
                    width="6"
                    height="12"
                    fill="#013476"
                  >
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.75s"
                      repeatCount="indefinite"
                    ></animate>
                  </rect>
                </g>
                <g transform="rotate(90 50 50)">
                  <rect
                    x="47"
                    y="24"
                    rx="9.4"
                    ry="4.8"
                    width="6"
                    height="12"
                    fill="#013476"
                  >
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.6666666666666666s"
                      repeatCount="indefinite"
                    ></animate>
                  </rect>
                </g>
                <g transform="rotate(120 50 50)">
                  <rect
                    x="47"
                    y="24"
                    rx="9.4"
                    ry="4.8"
                    width="6"
                    height="12"
                    fill="#013476"
                  >
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.5833333333333334s"
                      repeatCount="indefinite"
                    ></animate>
                  </rect>
                </g>
                <g transform="rotate(150 50 50)">
                  <rect
                    x="47"
                    y="24"
                    rx="9.4"
                    ry="4.8"
                    width="6"
                    height="12"
                    fill="#013476"
                  >
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.5s"
                      repeatCount="indefinite"
                    ></animate>
                  </rect>
                </g>
                <g transform="rotate(180 50 50)">
                  <rect
                    x="47"
                    y="24"
                    rx="9.4"
                    ry="4.8"
                    width="6"
                    height="12"
                    fill="#013476"
                  >
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.4166666666666667s"
                      repeatCount="indefinite"
                    ></animate>
                  </rect>
                </g>
                <g transform="rotate(210 50 50)">
                  <rect
                    x="47"
                    y="24"
                    rx="9.4"
                    ry="4.8"
                    width="6"
                    height="12"
                    fill="#013476"
                  >
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.3333333333333333s"
                      repeatCount="indefinite"
                    ></animate>
                  </rect>
                </g>
                <g transform="rotate(240 50 50)">
                  <rect
                    x="47"
                    y="24"
                    rx="9.4"
                    ry="4.8"
                    width="6"
                    height="12"
                    fill="#013476"
                  >
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.25s"
                      repeatCount="indefinite"
                    ></animate>
                  </rect>
                </g>
                <g transform="rotate(270 50 50)">
                  <rect
                    x="47"
                    y="24"
                    rx="9.4"
                    ry="4.8"
                    width="6"
                    height="12"
                    fill="#013476"
                  >
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.16666666666666666s"
                      repeatCount="indefinite"
                    ></animate>
                  </rect>
                </g>
                <g transform="rotate(300 50 50)">
                  <rect
                    x="47"
                    y="24"
                    rx="9.4"
                    ry="4.8"
                    width="6"
                    height="12"
                    fill="#013476"
                  >
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="-0.08333333333333333s"
                      repeatCount="indefinite"
                    ></animate>
                  </rect>
                </g>
                <g transform="rotate(330 50 50)">
                  <rect
                    x="47"
                    y="24"
                    rx="9.4"
                    ry="4.8"
                    width="6"
                    height="12"
                    fill="#013476"
                  >
                    <animate
                      attributeName="opacity"
                      values="1;0"
                      keyTimes="0;1"
                      dur="1s"
                      begin="0s"
                      repeatCount="indefinite"
                    ></animate>
                  </rect>
                </g>
              </svg>
              <svg
                class="confirm ldt-bounce-in"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="38px"
                height="38px"
                viewBox="0 0 448.8 448.8"
                style="enable-background:new 0 0 448.8 448.8; color: green"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <polygon
                      fill="green"
                      points="142.8,323.85 35.7,216.75 0,252.45 142.8,395.25 448.8,89.25 413.1,53.55 		"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              <svg
                class="reject ldt-bounce-in "
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="圖層_1"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                style="transform-origin: 50px 50px 0px; width: 40px;"
                xml:space="preserve"
              >
                <g style="transform-origin: 50px 50px 0px;">
                  <g
                    style="transform-origin: 50px 50px 0px; transform: scale(1);"
                  >
                    <g
                      class="ld ldt-bounce-in"
                      style="transform-origin: 50px 50px 0px; animation-duration: 1.7s; animation-delay: 0s; animation-direction: normal;"
                    >
                      <g>
                        <style
                          type="text/css"
                          style="transform-origin: 50px 50px 0px;"
                        >
                          .st0 {
                            fill: #333333;
                          }
                          .st1 {
                            fill: #ffffff;
                          }
                          .st2 {
                            fill: #849b87;
                          }
                          .st3 {
                            fill: #ffffff;
                            stroke: #333333;
                            stroke-width: 6;
                            stroke-miterlimit: 10;
                          }
                          .st4 {
                            fill: #cccccc;
                          }
                          .st5 {
                            fill: #abbd81;
                          }
                          .st6 {
                            fill: #e0e0e0;
                          }
                          .st7 {
                            fill: #77a4bd;
                          }
                          .st8 {
                            fill: #e15b64;
                          }
                          .st9 {
                            fill: #ffffff;
                            stroke: #333333;
                            stroke-width: 12;
                            stroke-miterlimit: 10;
                          }
                          .st10 {
                            fill: #666666;
                          }
                          .st11 {
                            fill-rule: evenodd;
                            clip-rule: evenodd;
                            fill: #666666;
                          }
                          .st12 {
                            fill: none;
                            stroke: #e15b64;
                            stroke-width: 16;
                            stroke-miterlimit: 10;
                          }
                          .st13 {
                            fill: none;
                            stroke: #849b87;
                            stroke-width: 16;
                            stroke-miterlimit: 10;
                          }
                          .st14 {
                            fill: none;
                            stroke: #e15b64;
                            stroke-width: 22;
                            stroke-miterlimit: 10;
                          }
                          .st15 {
                            fill: none;
                            stroke: #849b87;
                            stroke-width: 22;
                            stroke-miterlimit: 10;
                          }
                          .st16 {
                            fill: #a0c8d7;
                          }
                          .st17 {
                            fill: none;
                            stroke: #e0e0e0;
                            stroke-width: 6;
                            stroke-miterlimit: 10;
                          }
                          .st18 {
                            fill: none;
                            stroke: #e0e0e0;
                            stroke-width: 6;
                            stroke-miterlimit: 10;
                            stroke-dasharray: 7.5147, 8.5882;
                          }
                          .st19 {
                            fill: #ffffff;
                            stroke: #e15b64;
                            stroke-width: 6;
                            stroke-miterlimit: 10;
                          }
                          .st20 {
                            fill: #ffffff;
                            stroke: #abbd81;
                            stroke-width: 6;
                            stroke-miterlimit: 10;
                          }
                          .st21 {
                            fill: #e0e0e0;
                            stroke: #b3b3b3;
                            stroke-width: 4;
                            stroke-miterlimit: 10;
                          }
                          .st22 {
                            fill: #e0e0e0;
                            stroke: #abbd81;
                            stroke-width: 4;
                            stroke-miterlimit: 10;
                          }
                          .st23 {
                            fill: #e0e0e0;
                            stroke: #e15b64;
                            stroke-width: 4;
                            stroke-miterlimit: 10;
                          }
                          .st24 {
                            fill: none;
                            stroke: #b3b3b3;
                            stroke-width: 4;
                            stroke-linecap: round;
                            stroke-miterlimit: 10;
                          }
                          .st25 {
                            fill: #ffffff;
                            stroke: #666666;
                            stroke-width: 6;
                            stroke-miterlimit: 10;
                          }
                          .st26 {
                            fill: #ffffff;
                            stroke: #666666;
                            stroke-width: 8;
                            stroke-miterlimit: 10;
                          }
                          .st27 {
                            fill: none;
                            stroke: #f47e60;
                            stroke-width: 19;
                            stroke-linecap: round;
                            stroke-miterlimit: 10;
                          }
                          .st28 {
                            fill: none;
                            stroke: #f47e60;
                            stroke-width: 9;
                            stroke-linecap: round;
                            stroke-miterlimit: 10;
                          }
                          .st29 {
                            fill: none;
                            stroke: #f47e60;
                            stroke-width: 14;
                            stroke-linecap: round;
                            stroke-miterlimit: 10;
                          }
                          .st30 {
                            fill: none;
                            stroke: #f47e60;
                            stroke-width: 10.2857;
                            stroke-linecap: round;
                            stroke-miterlimit: 10;
                          }
                          .st31 {
                            fill: url(#SVGID_1_);
                          }
                          .st32 {
                            fill: url(#SVGID_2_);
                          }
                        </style>
                        <g style="transform-origin: 50px 50px 0px;">
                          <path
                            class="st8"
                            d="M69.863,19.947L50,39.81L30.137,19.946c-2.809-2.809-7.379-2.809-10.189,0s-2.809,7.38,0,10.189l19.863,19.863 L19.948,69.862c-2.809,2.809-2.809,7.38,0,10.189s7.379,2.809,10.189,0L50,60.188l19.863,19.863c2.809,2.809,7.379,2.809,10.189,0 s2.809-7.38,0-10.189L60.189,49.998l19.863-19.863c2.809-2.809,2.809-7.38,0-10.189S72.673,17.138,69.863,19.947z"
                            fill="rgb(225, 91, 100)"
                            style="fill: rgb(225, 91, 100);"
                          />
                        </g>
                        <metadata
                          xmlns:d="https://loading.io/stock/"
                          style="transform-origin: 50px 50px 0px;"
                        >
                          <d:name style="transform-origin: 50px 50px 0px;"
                            >cross</d:name
                          >
                          <d:tags style="transform-origin: 50px 50px 0px;"
                            >times,delete,clear,remove,error,forbid,deny,negative,drop,refuse,reject,cross,form</d:tags
                          >
                          <d:license style="transform-origin: 50px 50px 0px;"
                            >cc0</d:license
                          >
                          <d:slug style="transform-origin: 50px 50px 0px;"
                            >gsd528</d:slug
                          >
                        </metadata>
                      </g>
                    </g>
                  </g>
                </g>
                <style
                  type="text/css"
                  style="transform-origin: 50px 50px 0px;"
                ></style>
              </svg>
            </form>
          </div>
        </div>
        <div class="row mt70">
          <div class="col-lg-8 offset-lg-2">
            <div class="title">feedback</div>
            <div class="feedslider glide">
              <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                  <li class="glide__slide">
                    <div class="feedslider__title">
                      John Lennon
                    </div>
                    <div class="feedslider__text">
                      Thank you so much for your courtesy and patience! Dolor
                      sed viverra ipsum nunc aliquet bibendum. In dictum non
                      consectetur a. Feugiat in fermentum posuere urna nec
                      tincidunt praesent semper. Vivamus at augue eget arcu.
                      Phasellus vestibulum lorem sed risus ultricies tristique
                      nulla aliquet.
                      <br /><br />
                      ОInteger malesuada nunc vel risus. Quis hendrerit dolor
                      magna eget est.
                    </div>
                  </li>
                  <li class="glide__slide">
                    <div class="feedslider__title">
                      Freddie Mercury
                    </div>
                    <div class="feedslider__text">
                      Est pellentesque elit ullamcorper dignissim cras. Luctus
                      venenatis lectus magna fringilla urna porttitor rhoncus
                      dolor. Mauris vitae ultricies leo integer malesuada nunc.
                      Ac tortor vitae purus faucibus. Leo vel fringilla est
                      ullamcorper eget. Arcu bibendum at varius vel pharetra
                      vel.
                    </div>
                  </li>
                  <li class="glide__slide">
                    <div class="feedslider__title">
                      Kurt Cobain
                    </div>
                    <div class="feedslider__text">
                      Integer eget aliquet nibh praesent tristique magna sit.
                      Massa tincidunt nunc pulvinar sapien et ligula ullamcorper
                      malesuada. Tincidunt id aliquet risus feugiat in ante
                      metus dictum at. Velit sed ullamcorper morbi tincidunt
                      ornare massa eget egestas purus.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="question">
      <div class="question__text">
        Any questions? Write to us!
      </div>
      <div id="reply" class="minibutton">Write</div>
      <div class="question__close">&times</div>
    </div>

    <div class="reply">
      <div class="reply__body">
        <div class="reply__title">
          Leave your question here
        </div>
        <form action="#">
          <div class="reply__wrapper">
            <div>
              <label for="name">Your name <span>*</span></label>
              <input name="name" id="name" type="text" required />
            </div>
          </div>
          <div class="reply__wrapper">
            <div>
              <label for="mail">Email</label>
              <input name="mail" id="mail" type="email" />
            </div>
            <div>
              <label for="phone">Your phone <span>*</span></label>
              <input name="phone" id="phone" type="tel" required />
            </div>
          </div>
          <label for="text">Your question <span>*</span></label>
          <textarea required name="text" id="text"></textarea>
          <button class="minibutton">Send</button>
          <svg
            class="lds-spinner"
            width="65px"
            height="65px"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            style="background: none;"
          >
            <g transform="rotate(0 50 50)">
              <rect
                x="47"
                y="24"
                rx="9.4"
                ry="4.8"
                width="6"
                height="12"
                fill="#013476"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.9166666666666666s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(30 50 50)">
              <rect
                x="47"
                y="24"
                rx="9.4"
                ry="4.8"
                width="6"
                height="12"
                fill="#013476"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.8333333333333334s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(60 50 50)">
              <rect
                x="47"
                y="24"
                rx="9.4"
                ry="4.8"
                width="6"
                height="12"
                fill="#013476"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.75s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(90 50 50)">
              <rect
                x="47"
                y="24"
                rx="9.4"
                ry="4.8"
                width="6"
                height="12"
                fill="#013476"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.6666666666666666s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(120 50 50)">
              <rect
                x="47"
                y="24"
                rx="9.4"
                ry="4.8"
                width="6"
                height="12"
                fill="#013476"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.5833333333333334s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(150 50 50)">
              <rect
                x="47"
                y="24"
                rx="9.4"
                ry="4.8"
                width="6"
                height="12"
                fill="#013476"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.5s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(180 50 50)">
              <rect
                x="47"
                y="24"
                rx="9.4"
                ry="4.8"
                width="6"
                height="12"
                fill="#013476"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.4166666666666667s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(210 50 50)">
              <rect
                x="47"
                y="24"
                rx="9.4"
                ry="4.8"
                width="6"
                height="12"
                fill="#013476"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.3333333333333333s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(240 50 50)">
              <rect
                x="47"
                y="24"
                rx="9.4"
                ry="4.8"
                width="6"
                height="12"
                fill="#013476"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.25s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(270 50 50)">
              <rect
                x="47"
                y="24"
                rx="9.4"
                ry="4.8"
                width="6"
                height="12"
                fill="#013476"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.16666666666666666s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(300 50 50)">
              <rect
                x="47"
                y="24"
                rx="9.4"
                ry="4.8"
                width="6"
                height="12"
                fill="#013476"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.08333333333333333s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
            <g transform="rotate(330 50 50)">
              <rect
                x="47"
                y="24"
                rx="9.4"
                ry="4.8"
                width="6"
                height="12"
                fill="#013476"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="0s"
                  repeatCount="indefinite"
                ></animate>
              </rect>
            </g>
          </svg>
          <svg
            class="confirm ldt-bounce-in"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="38px"
            height="38px"
            viewBox="0 0 448.8 448.8"
            style="enable-background:new 0 0 448.8 448.8; color: green"
            xml:space="preserve"
          >
            <g>
              <g>
                <polygon
                  fill="green"
                  points="142.8,323.85 35.7,216.75 0,252.45 142.8,395.25 448.8,89.25 413.1,53.55 		"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
          <svg
            class="reject ldt-bounce-in "
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="圖層_1"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            style="transform-origin: 50px 50px 0px; width: 40px;"
            xml:space="preserve"
          >
            <g style="transform-origin: 50px 50px 0px;">
              <g style="transform-origin: 50px 50px 0px; transform: scale(1);">
                <g
                  class="ld ldt-bounce-in"
                  style="transform-origin: 50px 50px 0px; animation-duration: 1.7s; animation-delay: 0s; animation-direction: normal;"
                >
                  <g>
                    <style
                      type="text/css"
                      style="transform-origin: 50px 50px 0px;"
                    >
                      .st0 {
                        fill: #333333;
                      }
                      .st1 {
                        fill: #ffffff;
                      }
                      .st2 {
                        fill: #849b87;
                      }
                      .st3 {
                        fill: #ffffff;
                        stroke: #333333;
                        stroke-width: 6;
                        stroke-miterlimit: 10;
                      }
                      .st4 {
                        fill: #cccccc;
                      }
                      .st5 {
                        fill: #abbd81;
                      }
                      .st6 {
                        fill: #e0e0e0;
                      }
                      .st7 {
                        fill: #77a4bd;
                      }
                      .st8 {
                        fill: #e15b64;
                      }
                      .st9 {
                        fill: #ffffff;
                        stroke: #333333;
                        stroke-width: 12;
                        stroke-miterlimit: 10;
                      }
                      .st10 {
                        fill: #666666;
                      }
                      .st11 {
                        fill-rule: evenodd;
                        clip-rule: evenodd;
                        fill: #666666;
                      }
                      .st12 {
                        fill: none;
                        stroke: #e15b64;
                        stroke-width: 16;
                        stroke-miterlimit: 10;
                      }
                      .st13 {
                        fill: none;
                        stroke: #849b87;
                        stroke-width: 16;
                        stroke-miterlimit: 10;
                      }
                      .st14 {
                        fill: none;
                        stroke: #e15b64;
                        stroke-width: 22;
                        stroke-miterlimit: 10;
                      }
                      .st15 {
                        fill: none;
                        stroke: #849b87;
                        stroke-width: 22;
                        stroke-miterlimit: 10;
                      }
                      .st16 {
                        fill: #a0c8d7;
                      }
                      .st17 {
                        fill: none;
                        stroke: #e0e0e0;
                        stroke-width: 6;
                        stroke-miterlimit: 10;
                      }
                      .st18 {
                        fill: none;
                        stroke: #e0e0e0;
                        stroke-width: 6;
                        stroke-miterlimit: 10;
                        stroke-dasharray: 7.5147, 8.5882;
                      }
                      .st19 {
                        fill: #ffffff;
                        stroke: #e15b64;
                        stroke-width: 6;
                        stroke-miterlimit: 10;
                      }
                      .st20 {
                        fill: #ffffff;
                        stroke: #abbd81;
                        stroke-width: 6;
                        stroke-miterlimit: 10;
                      }
                      .st21 {
                        fill: #e0e0e0;
                        stroke: #b3b3b3;
                        stroke-width: 4;
                        stroke-miterlimit: 10;
                      }
                      .st22 {
                        fill: #e0e0e0;
                        stroke: #abbd81;
                        stroke-width: 4;
                        stroke-miterlimit: 10;
                      }
                      .st23 {
                        fill: #e0e0e0;
                        stroke: #e15b64;
                        stroke-width: 4;
                        stroke-miterlimit: 10;
                      }
                      .st24 {
                        fill: none;
                        stroke: #b3b3b3;
                        stroke-width: 4;
                        stroke-linecap: round;
                        stroke-miterlimit: 10;
                      }
                      .st25 {
                        fill: #ffffff;
                        stroke: #666666;
                        stroke-width: 6;
                        stroke-miterlimit: 10;
                      }
                      .st26 {
                        fill: #ffffff;
                        stroke: #666666;
                        stroke-width: 8;
                        stroke-miterlimit: 10;
                      }
                      .st27 {
                        fill: none;
                        stroke: #f47e60;
                        stroke-width: 19;
                        stroke-linecap: round;
                        stroke-miterlimit: 10;
                      }
                      .st28 {
                        fill: none;
                        stroke: #f47e60;
                        stroke-width: 9;
                        stroke-linecap: round;
                        stroke-miterlimit: 10;
                      }
                      .st29 {
                        fill: none;
                        stroke: #f47e60;
                        stroke-width: 14;
                        stroke-linecap: round;
                        stroke-miterlimit: 10;
                      }
                      .st30 {
                        fill: none;
                        stroke: #f47e60;
                        stroke-width: 10.2857;
                        stroke-linecap: round;
                        stroke-miterlimit: 10;
                      }
                      .st31 {
                        fill: url(#SVGID_1_);
                      }
                      .st32 {
                        fill: url(#SVGID_2_);
                      }
                    </style>
                    <g style="transform-origin: 50px 50px 0px;">
                      <path
                        class="st8"
                        d="M69.863,19.947L50,39.81L30.137,19.946c-2.809-2.809-7.379-2.809-10.189,0s-2.809,7.38,0,10.189l19.863,19.863 L19.948,69.862c-2.809,2.809-2.809,7.38,0,10.189s7.379,2.809,10.189,0L50,60.188l19.863,19.863c2.809,2.809,7.379,2.809,10.189,0 s2.809-7.38,0-10.189L60.189,49.998l19.863-19.863c2.809-2.809,2.809-7.38,0-10.189S72.673,17.138,69.863,19.947z"
                        fill="rgb(225, 91, 100)"
                        style="fill: rgb(225, 91, 100);"
                      />
                    </g>
                    <metadata
                      xmlns:d="https://loading.io/stock/"
                      style="transform-origin: 50px 50px 0px;"
                    >
                      <d:name style="transform-origin: 50px 50px 0px;"
                        >cross</d:name
                      >
                      <d:tags style="transform-origin: 50px 50px 0px;"
                        >times,delete,clear,remove,error,forbid,deny,negative,drop,refuse,reject,cross,form</d:tags
                      >
                      <d:license style="transform-origin: 50px 50px 0px;"
                        >cc0</d:license
                      >
                      <d:slug style="transform-origin: 50px 50px 0px;"
                        >gsd528</d:slug
                      >
                    </metadata>
                  </g>
                </g>
              </g>
            </g>
            <style
              type="text/css"
              style="transform-origin: 50px 50px 0px;"
            ></style>
          </svg>
          <div class="reply__close">&times</div>
        </form>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3">
            <a href="#" class="footer__logo">
              <img
                src="<?php echo bloginfo('template_url'); ?>/assets/img/icons/svg/logo.svg"
                alt="Company"
                class="footer__logo-img"
              />
              <div class="footer__logo-text">Company</div>
            </a>
          </div>
          <div class="col-md-4 col-lg-3">
            <div class="footer__social">
              <div class="footer__social-item">
                We're on social media:
              </div>
              <a href="#" class="footer__social-item">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0959 0.442627H6.40873C3.11902 0.442627 0.442627 3.11915 0.442627 6.40885V16.096C0.442627 19.3858 3.11902 22.0622 6.40873 22.0622H16.0959C19.3858 22.0622 22.0622 19.3857 22.0622 16.096V6.40885C22.0624 3.11915 19.3858 0.442627 16.0959 0.442627ZM20.1442 16.096C20.1442 18.3281 18.3281 20.144 16.096 20.144H6.40873C4.17671 20.1442 2.36082 18.3281 2.36082 16.096V6.40885C2.36082 4.17684 4.17671 2.36082 6.40873 2.36082H16.0959C18.328 2.36082 20.144 4.17684 20.144 6.40885V16.096H20.1442Z"
                    fill="white"
                  />
                  <path
                    d="M11.2525 5.68188C8.18067 5.68188 5.68164 8.18091 5.68164 11.2527C5.68164 14.3244 8.18067 16.8233 11.2525 16.8233C14.3243 16.8233 16.8233 14.3244 16.8233 11.2527C16.8233 8.18091 14.3243 5.68188 11.2525 5.68188ZM11.2525 14.905C9.23849 14.905 7.59984 13.2666 7.59984 11.2526C7.59984 9.23847 9.23836 7.59995 11.2525 7.59995C13.2666 7.59995 14.9051 9.23847 14.9051 11.2526C14.9051 13.2666 13.2664 14.905 11.2525 14.905Z"
                    fill="white"
                  />
                  <path
                    d="M17.0568 4.0553C16.6873 4.0553 16.3242 4.20492 16.0632 4.46707C15.8009 4.72795 15.6501 5.09112 15.6501 5.46198C15.6501 5.83168 15.801 6.19473 16.0632 6.45688C16.3241 6.71775 16.6873 6.86865 17.0568 6.86865C17.4277 6.86865 17.7896 6.71775 18.0517 6.45688C18.3139 6.19473 18.4635 5.83155 18.4635 5.46198C18.4635 5.09112 18.3139 4.72795 18.0517 4.46707C17.7909 4.20492 17.4277 4.0553 17.0568 4.0553Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#" class="footer__social-item">
                <svg
                  width="13"
                  height="24"
                  viewBox="0 0 13 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0252 0.237307L9.05681 0.232544C5.72194 0.232544 3.5668 2.44365 3.5668 5.86592V8.46328H0.582228C0.324325 8.46328 0.115479 8.67236 0.115479 8.93026V12.6935C0.115479 12.9514 0.324563 13.1603 0.582228 13.1603H3.5668V22.6562C3.5668 22.9142 3.77565 23.123 4.03355 23.123H7.92757C8.18547 23.123 8.39432 22.9139 8.39432 22.6562V13.1603H11.884C12.1419 13.1603 12.3507 12.9514 12.3507 12.6935L12.3522 8.93026C12.3522 8.80643 12.3029 8.68784 12.2155 8.60021C12.1281 8.51257 12.009 8.46328 11.8852 8.46328H8.39432V6.26146C8.39432 5.20318 8.6465 4.66594 10.0251 4.66594L12.0247 4.66523C12.2824 4.66523 12.4912 4.45614 12.4912 4.19848V0.704055C12.4912 0.446629 12.2826 0.237783 12.0252 0.237307Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#" class="footer__social-item">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.8697 6.04738C26.8228 4.803 24.8901 4.29541 21.1991 4.29541H7.80063C4.02511 4.29541 2.05965 4.83575 1.01678 6.16058C0 7.45229 0 9.35554 0 11.9897V17.0103C0 22.1135 1.2064 24.7045 7.80063 24.7045H21.1992C24.4 24.7045 26.1737 24.2566 27.3212 23.1584C28.4979 22.0323 29 20.1936 29 17.0103V11.9897C29 9.21175 28.9213 7.29728 27.8697 6.04738ZM18.6181 15.1931L12.5339 18.3729C12.3979 18.444 12.2491 18.4793 12.1006 18.4793C11.9324 18.4793 11.7646 18.434 11.6159 18.344C11.336 18.1744 11.1651 17.8711 11.1651 17.5438V11.2046C11.1651 10.8779 11.3355 10.5748 11.6149 10.4051C11.8943 10.2355 12.2418 10.2239 12.5317 10.3745L18.6159 13.5338C18.9255 13.6945 19.1199 14.0141 19.1204 14.3627C19.1207 14.7116 18.9272 15.0317 18.6181 15.1931Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="col-md-8 offset-md-0 col-lg-6 col-xl-5 offset-xl-1">
            <div class="footer__contacts">
              <div class="footer__contacts-item">
                <img
                  src="<?php echo bloginfo('template_url'); ?>/assets/img/icons/svg/phone.svg"
                  alt="phone"
                  class="footer__contacts-logo"
                />
                <div class="footer__contacts-tel">
                  <a href="tel:+358400000000">+358400000000</a>
                  <a href="tel:+358500000000">+358500000000</a>
                </div>
              </div>
              <div class="footer__contacts-item">
                <img
                  src="<?php echo bloginfo('template_url'); ?>/assets/img/icons/svg/pointer.svg"
                  alt="pointer"
                  class="footer__contacts-logo"
                />
                <address>
                  Piippukatu 2<br />
                  40320 Jyväskylä
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <?php
      wp_footer();
    ?>
  </body>
</html>
