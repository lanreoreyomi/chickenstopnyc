<template>
  <div class="container">
    <div class="map">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d756.3222961589028!2d-73.9783091!3d40.6896283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25be8cf7e861d%3A0x4bc6faa1ce76030f!2sChicken%20Stop!5e0!3m2!1sen!2sca!4v1619124527411!5m2!1sen!2sca"
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div class="contact_us">
      <div class="contact_info">
        <div class="contact_details">
          <div class="contact">
            <h3 class="socials">Social Media</h3>
            <div class="socialMedia">
              <p>
                <a href="https://www.instagram.com/chickenstopnyc/" target="_blank">
                  <img src="https://img.icons8.com/ios-filled/24/FFDB16/instagram-new.png" alt="instagrem"/> Instagram
                </a>
              </p>
            </div>
          </div>
          <div class="address">
            <h3>Address</h3>
            <div class="location_address">
              <div class="dekab">
                Chicken Stop (Fort Greene)
                <br>
                110 Dekalb Avenue
                <br>
                Brooklyn NY 11201
                <br>
                Tel: 917-909-1599
                <br>
                Info@ChickenStopnyc.com
              </div>
              <div class="fulton">
                Chicken Stop (Bed Stuy)
                <br>
                1274 Fulton Street
                <br>
                Brooklyn NY 11216
                <br>
                Tel: 347-240-9855
                <br>
                Info@ChickenStopnyc.com
              </div>
            </div>


          </div>
          <div class="hours">
            <h3>Hours</h3>
            <br>
            MON-SUNDAY
            <br>
            11am - 10pm
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "footers"
}
</script>

<style lang="scss" scoped>
@import "/src/assets/Colors/colors.scss";
@import "/src/assets/Fonts/fonts.scss";
@import "/src/assets/Buttons/Buttons.scss";

.container {

  .contact_us {
    background: lighten($bgColor, 5%);
    padding: 20px;

    color: $accentColor;
    text-align: center !important;

    .contact_details {
      text-align: center !important;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 20px;
      padding: 10px;
      margin: 0 auto;
      width: 80%;

      .contact {
        border-right: 2px solid $accentColor;
        text-align: center !important;

        .socials {
          text-align: center !important;
          text-decoration: underline;

        }

        .socialMedia {
          text-align: center !important;

          h3 {
            text-decoration: underline !important;
            text-align: center !important;
          }

          p {
            text-align: center !important;
            position: relative;
            color: $accentColor;


            img {
              text-align: center !important;
              cursor: pointer;

            }

            a {
              text-align: center !important;
              color: $accentColor;


              &:hover {
                opacity: 1 !important;
              }
            }

          }

        }

        .name {
          opacity: 1;
          text-align: center !important;


        }

        p {
          color: $accentColor;
          text-align: center !important;


          line-height: 40px;
          opacity: 0.8;

          a {
            display: inline-block;
            text-align: center !important;

            color: $accentColor;
            text-decoration: none;
            position: relative;

            img {
              text-align: center !important;

            }

          }
        }
      }

      .address {
        border-right: 2px solid $accentColor;
        text-align: center !important;
        grid-column-start: 2;
        grid-column-end: 4;
        padding-right: 15px;


        h3 {
          text-align: center !important;
          text-decoration: underline;
          color: $accentColor;

        }

        .location_address {
          text-align: center !important;
          margin-top: 20px;
          display: grid;
          grid-gap: 20px;
          grid-template-columns: 1fr 1fr;
          color: $accentColor;

        }


      }

      .hours {
        text-align: center !important;


        h3 {
          color: $accentColor;
          text-decoration: underline;

        }

        p {
          color: $accentColor;
          margin-top: 20px;
          opacity: 0.8;

          a {
            color: $accentColor;
            text-decoration: none;

          }
        }
      }
    }

  }

  .map {
    margin-top: 5vh;

    iframe {
      width: 100%;
    }

  }

}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .container {
    border-right: unset;

    .socials {
      margin-bottom: 20px;
      text-align: start !important;
      border-right: unset;
     }

    .contact_us {
      background: lighten($bgColor, 5%);
      padding: 10px;

      .contact {
        margin-top: 5vh;
        border-right: unset !important;

        p {

          font-weight: bolder;
          line-height: 60px;
          opacity: 0.4;

        }
      }

      .contact_details {
        text-align: center;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr !important;
        grid-gap: 0px;
        padding: 10px;
        margin: 5vh auto;
        position: relative;

        .hours, .support {
          margin-top: 5vh;
        }

        .address {
          border-right: unset;
          grid-column-start: unset;
          grid-column-end: unset;
          margin-top: 20px;

          h3 {
            text-align: start;

          }

          .location_address {
            margin-top: 20px;
            display: grid;
            grid-gap: 20px;
            grid-template-columns: 1fr;
            color: $accentColor;

          }

          .dekab {
            border-bottom: 2px solid $accentColor;
            padding-bottom: 20px;

            margin: 0 auto;
          }

        }
      }


    }

    .map {
      iframe {
        width: 100%;
      }

    }

  }
}


/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    border-right: unset;

    .socials {
      margin-bottom: 20px;
      text-align: start !important;
      border-right: unset;
     }

    .contact_us {
      background: lighten($bgColor, 5%);
      padding: 10px;

      .contact {
        margin-top: 5vh;
        border-right: unset !important;

        p {

          font-weight: bolder;
          line-height: 60px;
          opacity: 0.4;

        }
      }

      .contact_details {
        text-align: center;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr !important;
        grid-gap: 0px;
        padding: 10px;
        margin: 5vh auto;
        position: relative;

        .hours, .support {
          margin-top: 5vh;
        }

        .address {
          border-right: unset;
          grid-column-start: unset;
          grid-column-end: unset;
          margin-top: 20px;
          width: 100%;
          h3 {
            text-align: start;
          }

          .location_address {
            margin-top: 20px;
            display: grid;
            grid-gap: 20px;
            grid-template-columns: 1fr;
            color: $accentColor;
            .dekab {
              border-bottom: 2px solid $accentColor;
              padding-bottom: 20px;
              width: 50%;
              margin: 0 auto;
            }
          }


        }
      }


    }

    .map {
      iframe {
        width: 100%;
      }

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