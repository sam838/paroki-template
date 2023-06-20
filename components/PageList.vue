<template>
    <div class="blog-one__single">
        <div class="blog-one__image">
            <img
                :src="item.imageLink ? item.imageLink : defaultThumbnail"
                alt=""/>
            <img

                alt=""/>
            <nuxt-link
                class="blog-one__plus"
                :to="'/articles/' + item.slug">
                <i class="kipso-icon-plus-symbol"></i>
            <!-- /.kipso-icon-plus-symbol --></nuxt-link>
        </div><!-- /.blog-one__image -->
        <div class="blog-one__content text-center">
            <!-- <div class="blog-one__meta">
                <a data-toggle="tooltip" data-placement="top" title="" href="#" data-original-title="Posted On Jan 19"><i class="fa fa-calendar-alt"></i></a>
                <a data-toggle="tooltip" data-placement="top" title="" href="#" data-original-title="No Comments"><i class="fa fa-comments"></i></a>
                <a data-toggle="tooltip" data-placement="top" title="" href="#" data-original-title="Posted By Admin"><i class="fa fa-user"></i></a>
            </div>/.blog-one__meta -->
            <h2 class="blog-one__title"><nuxt-link  :to="'/articles/' + item.slug">{{ item.title }}</nuxt-link>
            </h2><!-- /.blog-one__title -->
            <p class="blog-one__text"> {{ item.excerpt }} </p><!-- /.blog-one__text -->
            <nuxt-link :to="'/articles/' + item.slug" class="blog-one__link">Baca lebih lanjut</nuxt-link><!-- /.blog-one__link -->
        </div><!-- /.blog-one__content -->
    </div><!-- /.blog-one__single -->
</template>

<script>
export default {
  props:
  {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data: () => ({
    defaultThumbnail: require('@/assets/img/ngrambe.png')
  })
}
</script>
<style scoped>

</style>
