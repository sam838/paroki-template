<template>
  <div>
    <header class="site-header site-header__header-one ">
      <nav class="navbar navbar-expand-lg navbar-light header-navigation stricky">
        <div class="container clearfix">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="logo-box clearfix">
            <a class="navbar-brand" href="/">
              <img src="/assets/images/logo-ngrambe.png" class="main-logo" width="100" alt="Awesome Image">
            </a>
            <div class="header__social">
              <a href="https://id-id.facebook.com/pages/category/Community/GEREJA-KATOLIK-KRISTUS-RAJA-NGRAMBE-293767663988876/"><i class="fab fa-facebook-square" /></a>
              <a href="https://www.youtube.com/channel/UCNvTbTtaERT4T6F3gDNCdrg"><i class="fab fa-youtube" /></a>
              <!-- <a href="#"><i class="fab fa-instagram" /></a> -->
            </div><!-- /.header__social -->
            <button class="menu-toggler" data-target=".main-navigation">
              <span class="kipso-icon-menu" />
            </button>
          </div><!-- /.logo-box -->
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="main-navigation">
            <ul class=" navigation-box">
              <li class="current">
                <nuxt-link to="/">
                  Beranda
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/articles/list">
                  Artikel
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/news/list">
                  Berita
                </nuxt-link>
              </li>
              <li class="nav-item-dropdown">
                <a
                  id="navbarDropdown"
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Tentang
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <nuxt-link to="/about" class="dropdown-item">
                    Profil
                  </nuxt-link>
                  <nuxt-link to="/sejarah" class="dropdown-item">
                    Sejarah
                  </nuxt-link>
                  <nuxt-link to="/stasi/list" class="dropdown-item">
                    Daftar Stasi
                  </nuxt-link>
                </div>
              </li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
      </nav>
      <div class="site-header__decor">
        <div class="site-header__decor-row">
          <div class="site-header__decor-single">
            <div class="site-header__decor-inner-1" /><!-- /.site-header__decor-inner -->
          </div><!-- /.site-header__decor-single -->
          <div class="site-header__decor-single">
            <div class="site-header__decor-inner-2" /><!-- /.site-header__decor-inner -->
          </div><!-- /.site-header__decor-single -->
          <div class="site-header__decor-single">
            <div class="site-header__decor-inner-3" /><!-- /.site-header__decor-inner -->
          </div><!-- /.site-header__decor-single -->
        </div><!-- /.site-header__decor-row -->
      </div><!-- /.site-header__decor -->
    </header>
  </div>
</template>

<script>
export default {
  name: 'NavOne',
  mounted () {
    if ($('.main-navigation .navigation-box').length) {
      const subMenu = $('.main-navigation .sub-menu')
      subMenu
        .parent('li')
        .children('a')
        .append(function () {
          return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>'
        })
      const mainNavToggler = $('.header-navigation .menu-toggler')
      const subNavToggler = $('.main-navigation .sub-nav-toggler')
      mainNavToggler.on('click', function () {
        // alert()
        const Self = $(this)
        const menu = Self.data('target')
        $(menu).slideToggle()
        $(menu).toggleClass('showen')
        return false
      })
      subNavToggler.on('click', function () {
        const Self = $(this)
        Self.parent().parent().children('.sub-menu').slideToggle()
        return false
      })
    }
  }
}
</script>

<style scoped>

</style>
