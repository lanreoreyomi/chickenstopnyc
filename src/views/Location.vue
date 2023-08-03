<template>
  <div class="container">
    <div class="serveYou">
      <div class="serve_you_text">
        <h2>Here to serve you!</h2>
        <div class="locations">
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
            Chicken Stop (Bedford Stuyvesant)
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
      <div class="serve_you_img"><img src="../assets/Images/serveyou_location.jpeg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
// import ServeYou from '@/components/ServeYou'


export default {
  name: "Location",
  components: {
    // ServeYou,
  },
  data() {
    return {
      serve_text: "110 Dekalb Avenue " +
          "Brooklyn NY 11201",
      deliver: "We Deliver 7 Days",
      sitting: "Backyard Seating"
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/Colors/colors.scss";
@import "/src/assets/Fonts/fonts.scss";
@import "/src/assets/Buttons/Buttons.scss";

.container {
  padding-top: 8vh;

  .serveYou {

    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 86%;

    .serve_you_text {
      color: #B3B3B3;
      text-align: center;

      p {
        padding: 10px;
      }

      #deliver {
        color: #FFDB16;
      }
    }

    h2 {
      margin-top: 25%;
      margin-bottom: 5%;
      font-size: 50px;

    }

    .locations {
      color: $accentColor;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  .serve_you_img {

    img {
      max-width: 100%;
    }
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .container {


    .serveYou {
      display: grid;
      grid-template-columns: 1fr;
      width: 100%;

      .locations {
      grid-gap: 20px;
        margin-bottom: 20px;
        grid-template-columns: 1fr;
      }
    }
  }

}

</style>