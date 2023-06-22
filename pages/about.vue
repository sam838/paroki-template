/* eslint-disable vue/html-indent */
<template>
  <div>
    <section class="about-one">
      <img
        src="/assets/images/circle-stripe.png"
        class="about-one__circle"
        alt=""
      >
      <div class="container-2 text-center">
        <div class="block-title text-center">
          <h2 class="block-title__title">
            Paroki {{ parokiDetail.name }} <br>
            {{ parokiDetail.city }}
          </h2>
          <!-- /.block-title__title -->
        </div>
        <!-- /.block-title -->
        <div class="about-one__img">
          <div class="row">
            <div class="col">
              <img :src="parokiDetail.images[0]" alt="" width="70%">
            </div>
            <!-- /.col-lg-6 -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.about-one__img -->
        <p class="about-one__text" v-html="parokiDetail.description" />
        <!-- /.about-one__text -->
      </div>
      <!-- /.container -->
    </section>
    <section class="team-one team-one__become-teacher">
      <div class="container-2">
        <div class="block-title text-center">
          <h2 class="block-title__title">
            Para Romo Paroki <br>
            {{ parokiDetail.name }} {{ city }}
          </h2>
          <!-- /.block-title__title -->
        </div>
        <!-- /.block-title -->
        <div class="row">
          <div v-for="(item, i) in parokiDetail.pastors" :key="i" class="col-6">
            <div class="team-one__single">
              <div class="team-one__image">
                <img :src="item.profilePicture" alt="">
              </div>
              <!-- /.team-one__image -->
              <div class="team-one__content">
                <h2 class="team-one__name">
                  <a href="#">{{ item.pastorName }}</a>
                </h2>
                <!-- /.team-one__name -->
                <p class="team-one__designation">
                  {{ item.jabatan }}
                </p>
                <!-- /.team-one__designation -->
                <!-- <p class="team-one__text">There are many varia of passages of lorem.</p> -->
                <!-- /.team-one__text -->
              </div>
              <!-- /.team-one__content -->
              <div class="team-one__social">
                <!-- <a href="#"><i class="fab fa-twitter"></i></a>
                          <a href="#"><i class="fab fa-facebook-square"></i></a>
                          <a href="#"><i class="fab fa-pinterest-p"></i></a>
                          <a href="#"><i class="fab fa-instagram"></i></a> -->
              </div>
              <!-- /.team-one__social -->
            </div>
            <!-- /.team-one__single -->
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
  </div>
</template>
<script>
export default {
  data: () => ({
    parokiDetail: []
  }),
  async fetch () {
    let payload = this.$nuxt.context.payload
    if (!payload) {
      payload = await this.$axios.$post(
        '/.netlify/functions/imavi-detail',
        {
          type: 'parokis',
          code: process.env.parokiId
        }
      )
    }
    this.parokiDetail = payload
  }
}
</script>
