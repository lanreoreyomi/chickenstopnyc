<template>
  <div class="container" id="home">

    <swiper
        :slides-per-view="1"
        :space-between="0"
        @swiper="onSwiper"
        @slideChange="onSlideChange">

      <swiper-slide class="landing_info">
        <div class="landing_text">
          <h1>The <span>Flame Grilled </span> <span class="way">Way</span></h1>
          <a class="btn_filled" href="https://direct.chownow.com/order/33509/locations/50235" target="_blank">Order from
            Dekalb Ave.(Fort Greene)</a>
          <a class="btn_filled" href="https://direct.chownow.com/order/33509/locations/57470" target="_blank">Order from
            Fulton St.(Bed-Stuy)</a>
          <!--          <router-link :to="{name: 'Menu'}" class="routerlink btn_outline" v-scroll-to="'#menu_home'">SEE-->
          <!--            MENU-->
          <!--          </router-link>-->
        </div>
        <div class="landing_img">
          <img src="../assets/Images/Flame-Grilled-Way.jpg" alt="slider Image">
        </div>

      </swiper-slide>
      <swiper-slide class="landing_info">

        <div class="landing_text">
          <h1>Citrus <span>  Marinated Chicken </span><span class="way">and Grilled Slow</span></h1>
          <a class="btn_filled" href="https://direct.chownow.com/order/33509/locations/50235" target="_blank">Order from
            Dekalb Ave.(Fort Greene)</a>
          <a class="btn_filled" href="https://direct.chownow.com/order/33509/locations/57470" target="_blank">Order from
            Fulton St. (Bed-Stuy)</a>
          <!--          <router-link :to="{name: 'Menu'}" class="routerlink btn_outline" v-scroll-to="'#menu_home'">SEE-->
          <!--            MENU-->
          <!--          </router-link>-->
        </div>
        <div class="landing_img">
          <img src="../assets/Images/IMAGE_2.jpg" alt="slider Image">
        </div>


      </swiper-slide>
      <swiper-slide class="landing_info">

        <div class="landing_text">
          <h1>Our Sides are <span>  Made Fresh </span><span class="way"> & Hand-Made Daily</span></h1>
          <a class="btn_filled" href="https://direct.chownow.com/order/33509/locations/50235" target="_blank">Order from
            Dekalb Ave.(Fort Greene)</a>
          <a class="btn_filled" href="https://direct.chownow.com/order/33509/locations/57470" target="_blank">Order from
            Fulton St.(Bed-Stuy)</a>
          <!--          <router-link :to="{name: 'Menu'}" class="routerlink btn_outline" v-scroll-to="'#menu_home'">SEE-->
          <!--            MENU-->
          <!--          </router-link>-->

        </div>
        <div class="landing_img">
          <img src="../assets/Images/Image3.jpg" alt="slider Image">
        </div>

      </swiper-slide>
      <swiper-slide class="landing_info">

        <div class="landing_text">
          <h1> Flame-Grilled <span>  Ribs lightly glazed</span><span
              class="way">in housemade BBQ Sauce!</span></h1>
          <a class="btn_filled" href="https://direct.chownow.com/order/33509/locations/50235" target="_blank">Order from
            Dekalb Ave.(Fort Greene)</a>

          <a class="btn_filled" href="https://direct.chownow.com/order/33509/locations/57470" target="_blank">Order from
            Fulton St.(Bed-Stuy)</a>
          <!--          <router-link :to="{name: 'Menu'}" class="routerlink btn_outline" v-scroll-to="'#menu_home'">SEE-->
          <!--            MENU-->
          <!--          </router-link>-->

        </div>
        <div class="landing_img">
          <img src="../assets/Images/Flame-Grilled-Ribs-lightly-glazed-in-housemade-BBQ-Sauce.jpg"
               alt="slider Image">
        </div>

      </swiper-slide>

    </swiper>


  </div>

  <div class="picandvid">

    <div class="pic">

      <img src="../assets/Images/pic&vid.jpeg" alt="">
    </div>
    <div class="vidoe-space">
      <video controls="true" autoplay muted>
        <source src="../assets/Images/vidoe.mp4" type="video/mp4">
      </video>
    </div>
  </div>

  <div class="featured_menu">
    <h2>Some of Our Best Sellers</h2>
    <div class="featured_menu_items">
      <featured-menu :img="threepcChickenMeal" menu_name="3pc Chicken Meal"></featured-menu>
      <featured-menu :img="crispychknSdwtch"
                     menu_name="Crispy Chicken Sandwich"></featured-menu>
      <featured-menu :img="ChickenRibsCombo"
                     menu_name="Chicken Ribs and Combo"></featured-menu>

      <featured-menu :img="goAvocadoSalad"
                     menu_name="Go Avocado Salad"></featured-menu>
      <featured-menu :img="ChickenStopPita"
                     menu_name="Chicken Stop Pita"></featured-menu>
      <featured-menu :img="Tenders"
                     menu_name="Hand-Breaded Tenders "></featured-menu>
    </div>

  </div>


  <div class="serveYou">
    <div class="serve_you_text"><h2>
      Here to serve you!
    </h2></div>
    <div class="serve_you_img"><img src="../assets/Images/DSC04859-Edit.jpeg" alt="">
    </div>
  </div>
  <div class="users_review">
    <user-reviews/>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import featuredMenu from "@/components/FeaturedMenu.vue";
import userReviews from "@/components/UserReviews.vue";
import goAvocadoSalad from '../assets/Images/AVOCADOSALAD.jpg';
import threepcChickenMeal from '../assets/Images/3pcchicken.jpg';
import ChickenRibsCombo from '../assets/Images/ComboImage.jpg';
import crispychknSdwtch from '../assets/Images/CrispyChicken.jpg';
import ChickenStopPita from '../assets/Images/ChickenStopPita.jpg';
import Tenders from '../assets/Images/TENDERS.jpg';


// Import Swiper styles
import 'swiper/css';

export default {
  name: "LandingSection",
  components: {
    Swiper,
    SwiperSlide,
    featuredMenu,
    userReviews
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      threepcChickenMeal: threepcChickenMeal,
      crispychknSdwtch: crispychknSdwtch,
      ChickenStopPita: ChickenStopPita,
      Tenders: Tenders,
      goAvocadoSalad: goAvocadoSalad,
      ChickenRibsCombo: ChickenRibsCombo
    };
  },
  data() {
    return {
      settings: {
        "infinite": true,
        "autoplay": true,
        "autoplaySpeed": 3000,
        "dots": true,
        "dotsClass": "slick-dots custom-dot-class",
        "edgeFriction": 0.35,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1
      },
      prevArrowSettings: {
        prevArrow: '<button class="slick-prev">Previous</button>',
      },
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/Colors/colors.scss";
@import "/src/assets/Fonts/fonts.scss";
@import "/src/assets/Buttons/Buttons.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  color: $textColor;

  button.slick-prev:before, button.slick-next:before {
    background-color: red !important;
    color: white !important;
  }


  .landing_info {
    padding: 100px !important;
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr;
    outline: none !important;
    //margin-top: 10vh;
    width: 100% !important;
    //margin: 10vh auto;
    justify-content: center;
    align-content: center;
    align-items: center;

    margin: 0 auto;

    .landing_text {
      padding: 0;
      text-align: start;
      margin: 5vh auto 0 0;
      width: 100%;
      outline: none !important;

      h1 {
        font-size: 50px;
        font-weight: normal;

        span {
          font-weight: bolder;
          color: $accentColor;
          font-style: italic;
        }

        .way {
          color: $textColor;
          font-weight: normal;
          font-style: normal;
          margin-left: 10px;
        }
      }

      p {
        line-height: 35px;
        margin-top: 20px;
      }

      //.btn_filled {
      //  @include homeButton;
      //  margin-top: 5vh;
      //  margin-right: 20px;
      //}
      .btn_filled {
        opacity: 1;
        text-align: center;
        @include homeButton;
        border-radius: 6px;
        margin-top: 20px;
        padding: 12px 26px 12px 20px;
        background: $redFill;
        color: $textColor;
        font-weight: bold;
        display: inline-block;
        width: 500px;
        text-decoration: none;
        margin-right: 20px;

        &:before {
          color: $bgColor !important;
          background: $accentColor;
        }

        &:hover {
          color: $bgColor !important;
          opacity: 1;
          border-bottom: none;
        }


        &:hover {

          opacity: 1;
          border-bottom: none;
        }

      }

      .routerlink {
        @include seeMenu;
        color: $textColor;

        text-decoration: none;
        display: inline-block;
        width: 160px;
        text-align: center;
        font-size: 16px;

        img {
          background: none;
          position: absolute;
          top: 10px;
          right: 5px;
          display: none;
        }


      }

    }

    .landing_img {
      grid-column-start: 2;
      grid-column-end: 4;

      img {
        max-width: 100%;
        border-radius: 6px;

      }
    }
  }

  .picandvid {

    h1 {
      font-size: 76px;
      color: #898989;
    }

    padding: 100px !important;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .pic {
      img {
        max-width: 100%;
      }

    }

    .vidoe-space {
      margin-top: 120px;

      video {
        height: 100%;
        width: 100%;
      }
    }
  }

  .featured_menu {
    padding: 100px !important;
    text-align: center;

    .routerlink {
      @include seeMenu;
      color: $textColor;
      text-decoration: none;
      display: inline-block;
      width: 240px;
      text-align: center;
      font-size: 16px;
      margin-top: 70px;
      padding: 20px;
    }

    h2 {
      font-size: 76px;
      color: #898989;
      text-align: center;
    }

    .featured_menu_items {

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
    }


  }

  .orderfrom {
    .btn_filled {
      opacity: 1;
      text-align: center;
      @include homeButton;
      border-radius: 6px;
      margin-top: 20px;
      padding: 12px 26px 12px 20px;
      background: $redFill;
      color: $textColor;
      font-weight: normal;
      display: inline-block;
      width: 500px;
      text-decoration: none;
      margin-right: 20px;

      &:before {
        color: $bgColor !important;
        background: $accentColor;
      }

      &:hover {
        color: $bgColor !important;
        opacity: 1;
        border-bottom: none;
      }


      &:hover {

        opacity: 1;
        border-bottom: none;
      }

    }
  }

  .view-image {

    padding: 100px !important;
    text-align: center;
    padding-top: 10px !important;

    img {
      margin: 0 auto;
      width: 80%;
      //max-width: 100%;
    }
  }

  .serveYou {

    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 86%;

    .serve_you_text {
      text-align: center;

      h2 {
        margin-top: 25%;
        font-size: 50px;
        color: #B3B3B3;
      }
    }

    .serve_you_img {

      img {
        max-width: 100%;
      }
    }
  }

  .users_review {
    width: 72%;
    margin: 0 auto;
  }

}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .container {

    .landing_info {
      display: grid !important;
      grid-template-columns: 1fr !important;
      grid-template-areas:
    "a a a"
    "b b b";
      padding: 20px !important;

      .landing_text {
        text-align: center;
        margin: 5vh auto;
        grid-area: b;


        h1 {
          font-size: 30px;
        }

        .btn_filled {
          width: 100% !important;
          margin: 2vh auto;
          font-size: 12px;
        }

        .routerlink {

          width: 80% !important;
          display: inline-block;
          text-align: center;

          &:hover {
            background: unset;
            color: unset;
          }

        }

      }

      .landing_img {
        grid-column-start: unset;
        grid-column-end: unset;

        img {
          padding-top: 50px !important;
          width: 100% !important;
          border-radius: 6px;
        }
      }
    }

    .featured_menu {
      padding: unset !important;

      .featured_menu_items {
        grid-template-columns: 1fr !important;
        width: 90%;
        margin: 0 auto;
        grid-gap: 20px;
      }

      h2 {
        color: white !important;
        font-size: 40px;
      }
    }

    .picandvid {
      width: 100%;
      text-align: center;
      padding: 10px !important;
      display: grid;
      grid-template-columns: 1fr !important;

      h1 {
        font-size: 30px;
        color: #898989;
        margin-bottom: 20px;
      }


      .pic {
        img {
          max-width: 100%;
        }

      }
    }

    .view-image {

      padding: unset !important;
      text-align: center;

      img {
        padding-top: 50px !important;
        margin: 0 auto;
        width: 100%;

      }
    }

    .serveYou {
      width: 100%;
      grid-template-columns: 1fr !important;

      .serve_you_img {

        img {
          max-width: 100%;
        }
      }

    }

    .users_review {
      width: 100%;
      margin: 0 auto;
    }
  }


}


@media only screen and (min-width: 600px) and (max-width: 786px) {
  .container {

    .landing_info {
      display: grid !important;
      grid-template-columns: 1fr !important;
      grid-template-areas:
    "a a a"
    "b b b";
      padding: 20px !important;

      .landing_text {
        text-align: center;
        margin: 5vh auto;

        grid-area: b;

        h1 {
          font-size: 30px;
        }

        .btn_filled {
          width: 80% !important;
          margin: 2vh auto;
        }

        .routerlink {

          width: 80% !important;
          display: inline-block;
          text-align: center;

          &:hover {
            background: unset;
            color: unset;
          }

        }

      }

      .landing_img {
        grid-column-start: unset;
        grid-column-end: unset;

        img {
          padding-top: 50px !important;
          width: 100% !important;
          border-radius: 6px;
        }
      }
    }

    .featured_menu {

      padding: unset !important;

      .featured_menu_items {
        grid-template-columns: 1fr !important;
        grid-gap: 20px;
      }

      h2 {
        color: white !important;
        font-size: 40px;
      }
    }

    .picandvid {
      width: 100%;
      text-align: center;
      padding: 10px !important;
      display: grid;
      grid-template-columns: 1fr !important;

      h1 {
        font-size: 30px;
        color: #898989;
        margin-bottom: 20px;
      }


      .pic {
        img {
          max-width: 100%;
        }

      }
    }

    .view-image {

      padding: unset !important;
      text-align: center;

      img {
        padding-top: 50px !important;
        margin: 0 auto;
        width: 100%;

      }
    }

    .serveYou {
      width: 100%;
      grid-template-columns: 1fr !important;

      .serve_you_img {

        img {
          max-width: 100%;
        }
      }

    }

    .users_review {
      width: 102%;
      margin: 0 auto;
    }
  }


}


/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container {

    .landing_info {
      display: grid !important;
      grid-template-columns: 1fr !important;
      grid-template-areas:
    "a a a"
    "b b b";
      padding: 20px !important;

      .landing_text {
        text-align: center;
        margin: 5vh auto;

        grid-area: b;

        h1 {
          font-size: 30px;
        }

        .btn_filled {
          width: 80% !important;
          margin: 2vh auto;
        }

        .routerlink {

          width: 80% !important;
          display: inline-block;
          text-align: center;

          &:hover {
            background: unset;
            color: unset;
          }

        }

      }

      .landing_img {
        grid-column-start: unset;
        grid-column-end: unset;

        img {
          padding-top: 50px !important;
          width: 100% !important;
          border-radius: 6px;
        }
      }
    }

    .featured_menu {

      padding: unset !important;

      .featured_menu_items {
        grid-template-columns: 1fr !important;
        grid-gap: 0px;
      }

      h2 {
        color: white !important;
        font-size: 40px;
      }
    }

    .picandvid {
      width: 100%;
      text-align: center;
      padding: 10px !important;
      display: grid;
      grid-template-columns: 1fr !important;

      h1 {
        font-size: 30px;
        color: #898989;
        margin-bottom: 20px;
      }


      .pic {
        img {
          max-width: 100%;
        }

      }
    }

    .view-image {

      padding: unset !important;
      text-align: center;

      img {
        padding-top: 50px !important;
        margin: 0 auto;
        width: 100%;

      }
    }

    .serveYou {
      width: 100%;
      grid-template-columns: 1fr !important;

      .serve_you_img {

        img {
          max-width: 100%;
        }
      }

    }

    .users_review {
      width: 102%;
      margin: 0 auto;
    }
  }

}

@media only screen and (min-width: 1024px) and (max-width: 1366px) {
  .container {

    .landing_info {
      display: grid !important;
      grid-template-columns: 1fr !important;
      grid-template-areas:
    "a a a"
    "b b b";
      padding: 20px !important;

      .landing_text {
        text-align: center;
        margin: 5vh auto;

        grid-area: b;

        h1 {
          font-size: 30px;
        }

        .btn_filled {
          width: 80% !important;
          margin: 2vh auto;
        }

        .routerlink {

          width: 80% !important;
          display: inline-block;
          text-align: center;

          &:hover {
            background: unset;
            color: unset;
          }

        }

      }

      .landing_img {
        grid-column-start: unset;
        grid-column-end: unset;

        img {
          padding-top: 50px !important;
          width: 100% !important;
          border-radius: 6px;
        }
      }
    }

    .featured_menu {

      padding: unset !important;

      .featured_menu_items {
        grid-template-columns: 1fr !important;
        grid-gap: 0px;
      }

      h2 {
        color: white !important;
        font-size: 40px;
      }
    }

    .picandvid {
      width: 100%;
      text-align: center;
      padding: 10px !important;
      display: grid;
      grid-template-columns: 1fr !important;

      h1 {
        font-size: 30px;
        color: #898989;
        margin-bottom: 20px;
      }


      .pic {
        img {
          max-width: 100%;
        }

      }
    }

    .view-image {

      padding: unset !important;
      text-align: center;

      img {
        padding-top: 50px !important;
        margin: 0 auto;
        width: 100%;

      }
    }

    .serveYou {
      width: 100%;
      grid-template-columns: 1fr !important;

      .serve_you_img {

        img {
          max-width: 100%;
        }
      }

    }

    .users_review {
      width: 102%;
      margin: 0 auto;
    }
  }

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>