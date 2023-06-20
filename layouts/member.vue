<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title>
              Selamat datang,<br>
              {{ profileStore.fullName }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in filterMenu "
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          router
          exact
          @click="logout"
        >
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Keluar'" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <img
        src="https://static.imavi.org/cim/logo.svg"
        width="36"
        style="border-radius: 4px; margin-right: 10px;"
      >
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container class="main-app-container">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy;{{ new Date().getFullYear() }}Centrum Ivan Merz - IMAVI. All rights reserved.</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    const items = [{
      icon: 'mdi-home',
      title: 'Beranda',
      to: '/member'
    },
    // Ujiannya telah dihubungkan dengan ACP
    // namun tetap perlu menampilkan ujians yang tombol kerjakannya sudah ditekan
    // agar tahu apa yang sedang dikerjakannya
    // {
    //   icon: 'mdi-file-document',
    //   title: 'Kerjakan Ujian',
    //   to: '/member/ujians/do',
    //   roles: ['cimStudent']
    // },
    {
      icon: 'mdi-file-document',
      title: 'Ujian Telah Dikerjakan',
      to: '/member/ujians/list-done',
      roles: ['cimStudent']
    },
    {
      icon: 'mdi-book-open-variant',
      title: 'Kursus Saya',
      to: '/member/enrollments/my-list',
      roles: ['cimStudent']
    },
    {
      icon: 'mdi-account',
      title: 'Profil Anda',
      to: '/member/profile',
      roles: ['cimStudent']
    },
    {
      icon: 'mdi-book-open-variant',
      title: 'Kurikulum',
      to: '/member/curriculums/list',
      roles: ['cimStudent']
    },
    {
      icon: 'mdi-account-group',
      title: 'Daftar Dosen',
      to: '/dosens/list',
      roles: ['cimStudent']
    },
    {
      icon: 'mdi-help-circle',
      title: 'Tanya Ivan',
      to: '/tanya-ivan'
    },
    {
      icon: 'mdi-format-list-checks',
      title: 'Daftar Pertanyaan Tim',
      to: '/member/tanya-ivan/team-question/list',
      roles: ['tiPenjawab', 'tiEditor']
    },
    {
      icon: 'mdi-format-list-bulleted-square',
      title: 'Daftar Pertanyaan',
      to: '/member/tanya-ivan/submitted-question/list',
      roles: ['tiAdmin']
    }

      // disembunyikan dahulu
      // {
      //   icon: 'mdi-book-open-variant',
      //   title: 'Kursus Saya',
      //   to: '/member/enrollments/my-list'
      // }
      // {
      //   icon: 'mdi-newspaper',
      //   title: 'Berita',
      //   to: '/news/list'
      // },
      // {
      //   icon: 'mdi-book-open-variant',
      //   title: 'Daftar Program',
      //   to: '/courses/list'
      // }
    ]
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items,
      miniVariant: false,
      right: true,
      title: 'Centrum Ivan Merz'
    }
  },
  computed: {
    profileStore () {
      return this.$store.state.users.profile
    },
    filterMenu () {
      const filteredData = []
      this.profileStore.roles.forEach((myRole) => {
        this.items.forEach((item) => {
          if (item.roles) {
            item.roles.forEach((role) => {
              if (role === myRole) {
                filteredData.push(item)
              }
            })
          } else {
            filteredData.push(item)
          }
        })
      })
      const filteredSet = new Set(filteredData)
      return filteredSet
    }
  },
  async mounted () {
    if (this.$cookies.get('cimProfile')) {
      if (!this.profileStore.fetched) {
        try {
          const profile = await this.$axios.$post('/.netlify/functions/profile', {
            profileToken: this.$cookies.get('cimProfile').profileToken
          })
          this.$store.commit('users/setProfile', profile)
        } catch (error) {
          if (error.response.data.includes('Authorization token expired') ||
              error.response.data.includes('No token was found')) {
            this.$cookies.remove('cimProfile')
            this.$router.replace('/login')
          } else {
            this.showMessage = true
            this.notifMessage = error.response.data
          }
        }
      }
    } else {
      this.$router.replace('/login')
    }
  },
  methods: {
    logout () {
      try {
        this.$axios.$post('/.netlify/functions/logout', {
          profileToken: this.$cookies.get('cimProfile').profileToken
        })
        this.$cookies.remove('cimProfile')
        this.$router.replace('/')
      } catch (error) {
        this.$cookies.remove('cimProfile')
        this.$router.replace('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-app-container {
    min-height: 85vh;
    background-image: url('~/assets/img/bg/ornament.svg');
    background-position: bottom right;
    background-size: 300px;
  }
</style>
