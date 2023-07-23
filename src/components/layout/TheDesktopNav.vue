<template>
  <div class="container">
    <div class="header" :class="{changeNav: scrollPosition>400}">
      <div class="brand_logo">
        <router-link :to="{name: 'Home'}" class="router-link">
          <img src="/src/assets/Images/logo.svg" alt="Brand Logo" v-on:click="toggleMenu = 'false'"></router-link>

      </div>
      <div class="header_menu">
        <ul>
          <li>
            <router-link :to="{name: 'Home'}" exact class="router-link"> Home</router-link>
          </li>
<!--          <li>-->
<!--            <router-link :to="{name: 'Menu'}" exact class="router-link"> Menu</router-link>-->
<!--          </li>-->
          <li>
            <router-link :to="{name: 'OurStory'}" exact class="router-link"> Our Story</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Location'}" exact class="router-link"> Location</router-link>
          </li>


          <li id="order_now" @click="toggleDropdown">
            <a class="btn_filled" href="#">Order Now</a>

            <ul v-if="showDropdown" class="dropdown-menu">
              <li v-for="(link, index) in links" :key="index">
                <a :href="link.url" target="_blank">
                  {{ link.name }}
                </a>
              </li>
            </ul>

          </li>
        </ul>

      </div>

    </div>

  </div>
</template>

<script>

// import logo from "src/assets/Images/logo.svg";
export default {
  name: 'Main',
  data() {
    return {
      dark_switch: true,
      scrollPosition: null,
      // logo: logo
      showDropdown: false,
      links: [
        {name: 'Fulton St, Brooklyn', url: 'https://direct.chownow.com/order/33509/locations/57470'},
        {name: 'Dekalb Av., Brooklyn', url: 'https://direct.chownow.com/order/33509/locations/50235'},
      ],
    };

  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    navigate(url) {
      // Use Vue Router's programmatic navigation
      this.$router.push(url);
    },

  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "/src/assets/Colors/colors.scss";
@import "/src/assets/Fonts/fonts.scss";
@import "/src/assets/Buttons/Buttons.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $textFont;

}

.changeNav {
  background-color: $bgColor;

}

.container {
  color: $textColor;
  background: $bgColor;

  .header {
    z-index: 99;
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    top: 0;
    position: fixed;
    margin: 0 auto;
    background: $bgColor;

    .brand_logo {
      margin-left: 30px;
      margin-top: 0px;

      img {
        width: 240px;
      }
    }

    .header_menu {
      width: 89%;
      padding: 0;
      margin: 0 auto;
      grid-column-start: 2;
      grid-column-end: 4;

      ul {
        text-align: end;
        margin-top: 30px;
        margin-right: 29px;

        li {
          list-style: none;
          text-align: start;
          display: inline-block;
          cursor: pointer;
          padding: 10px;
          margin: 0 auto 0 30px;
          text-decoration: none;
          opacity: 0.6;
          color: $textColor;
          font-weight: bold;

          .router-link {
            list-style: none;
            text-align: start;
            display: inline-block;
            cursor: pointer;
            text-decoration: none;
            color: $textColor;
            padding: 10px;
            font-weight: bold;

            &:hover {
              color: red;
              border-bottom: 1px solid $accentColor;
            }
          }

          &:hover {

            border-bottom: none;
          }
        }

        #order_now {
          opacity: 1;
          position: relative;


          a {
            text-align: center;
            @include homeButton;
            opacity: 1;
            border-radius: 6px;

            background: $redFill;
            color: $textColor;
            font-weight: bold;
            padding: 12px 30px 12px 30px;
            text-decoration: none;

            &:before {
              color: $bgColor !important;
              background: $accentColor;
            }

            &:hover {
              color: $bgColor !important;
              opacity: 1;
              border-bottom: none;
            }
          }

          &:hover {

            opacity: 1;
            border-bottom: none;
          }

          .dropdown-menu {
            opacity: 1;
            width: 100%;
            position: absolute;
            z-index: 99999;
            margin-top: 20px;
            //background: $accentColor;
            height: 120px;

            li {
              //background: $accentColor;
              padding: unset !important;
              opacity: 1;
              margin: 0;
              width: 100% !important;
              margin-top: 20px !important;;

              a {

                font-size: 8px !important;
                font-weight: bold;


              }
            }
          }
        }


      }
    }

  }
}

@media only screen and (min-width: 768px) and (max-width: 1256px) {

  .container {
    .header {
      .header_menu {
        width: 100%;

        ul {
          text-align: end;

          li {
            margin: 0 auto 0 0;
            margin-right: 0 !important;
            padding-right: 0 !important;
          }

          #order_now {
            opacity: 1;

            a {
              opacity: 1;
              border-radius: 6px;
              margin-left: 0px;
              background: $redFill;
              color: $textColor;
              font-weight: bold;
              padding: 12px 20px 12px 20px;

            }


          }
        }
      }
    }
  }
}
</style>
