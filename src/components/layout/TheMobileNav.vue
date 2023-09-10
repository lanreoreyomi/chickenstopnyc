<template>
  <div class="mobileNav">
    <div class="menu" :class="{db: scrollPosition>800}">
      <div class="mobile_header">
<!--        <div class="order">-->

<!--          <a class="orderbtn " @click="toggleDropdown">Order Now</a>-->
<!--        </div>-->

        <div class="brandName">
          <router-link :to="{name: 'Home'}" class="router-link">
            <img src="/src/assets/Images/logo.svg" alt="Brand Logo" ></router-link>

        </div>

        <div class="menuIcon">
          <img :src="navIcon" @click="toggleMenu"
               alt="menu_icon"/>
        </div>
      </div>


      <div class="navBar" :class="{'expandMenu': !toggle}">
        <div class="navLinks">
          <ul>
            <li @click="toggleMenu">
              <router-link :to="{name: 'Home', hash: '#home'}" exact class="router-link" > Home</router-link>
            </li>
            <li @click="toggleMenu">
              <router-link :to="{name: 'OurStory', hash: '#our_story'}" exact class="router-link" > Our Story</router-link>
            </li>
            <li @click="toggleMenu">
              <router-link :to="{name: 'Location', hash: '#location'}" exact class="router-link"> Locations</router-link>
            </li>

            <li id="order_now" @click="toggleDropdown">
              <a class="btn_filled">Order Now</a>

              <ul v-if="showDropdown" class="dropdown-menu">
                <li v-for="(link, index) in links" :key="index" @click="toggleMenu">
                  <a :href="link.url" target="_blank">
                    {{ link.name }}
                  </a>
                </li>
              </ul>

            </li>
          </ul>
          <div>
          </div>

        </div>

      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "MobileNav",
  data() {
    return {
      // logo: require('/src/assets/Images/logo.svg'),
      scrollPosition: null,
      toggle: true,
      navIcon: "https://img.icons8.com/metro/26/ffffff/menu.png",
      showDropdown: false,
      links: [
        {name: 'ORDER FROM 110 Dekalb Ave (Fort Greene)', url: 'https://direct.chownow.com/order/33509/locations/50235'},
        {name: 'ORDER FROM 1274 Fulton St (Bed-Stuy)', url: 'https://direct.chownow.com/order/33509/locations/57470'},
      ],
    }
  },
  components: {
    // socialButton,
  },
  methods: {
    toggleMenu() {
      this.toggle = !this.toggle;
      if (this.navIcon === "https://img.icons8.com/metro/26/ffffff/menu.png") {
        this.navIcon = "https://img.icons8.com/pastel-glyph/30/ffffff/cancel--v1.png";
      } else {
        this.navIcon = "https://img.icons8.com/metro/26/ffffff/menu.png"
      }

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

<style scoped lang="scss">
@import "/src/assets/Colors/colors.scss";

.desktopNav {
  display: none !important;
}

@keyframes slide-anim {
  //0% {
  //  transform: translateY(150px);
  //}
  //100% {
  //  transform: rotateY(0);
  //}
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
  .mobileNav {
    display: block !important;
  }
}

@media (max-width: 823px) {
  .mobileNav {
    display: block !important;
    position: fixed;
    top: 0;
    z-index: 9999;
    width: 100% !important;
    background: $bgColor;
    font-family: 'Poppins', sans-serif;

    .menu {
      //position: relative;
      .mobile_header {
        display: grid;
        grid-template-columns: 1fr 1fr ;

        .order {
          width: 100%;
          right: 0;
        }
        .brandName {
          padding: 0px;
          margin-top: 1vh;
          text-align: start;
          img {

            width: 140px !important;
           }

        }

        .menuIcon {
          padding-right: 20px;
          padding-top: 30px;
          text-align: end;
        }
      }

      .openNavbar {
        cursor: pointer;
        top: 0;
        right: 0;

      }

    }


    .navBar {
      height: 100%;
      position: fixed;
      z-index: 99999;
      top: 75px;
      right: 0;
      background-color: lighten($bgColor, 7%);
      overflow-y: hidden;
      transition: 0.9s;
      width: 0;

      .navLinks {
        position: relative;
        top: 15%;
        width: 100%;
        text-align: center;
        margin-top: 30px;
        height: 100%;

        ul {
          animation-name: slide-anim;
          animation-duration: 4s;

          li {
            list-style: none;

            a {
              cursor: pointer;
              padding: 8px;
              text-decoration: none;
              font-weight: bold;
              display: block;
              transition: 0.3s;
              color: $accentColor;
              font-size: 16px;

              &:hover {
                color: $textColor;
              }
            }

            .router-link-active {
              border-radius: 6px;
              color: $redFill;
              border-bottom: none !important;
              padding: 8px;


            }

          }
        }
      }


    }
  }
  .expandMenu {
    width: 100% !important;
  }

}
</style>