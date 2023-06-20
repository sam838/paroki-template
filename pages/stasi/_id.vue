<template>
  <div
    class="main-container mx-auto article-detail py-5"
  >
    <div class="d-flex">
      <h1 class=" my-5 mx-auto">
        {{ detailContent.title }}
      </h1>
    </div>

    <div class="d-flex" v-html="detailContent.content">
      <h7 class=" my-5 mx-auto">
        {{ detailContent.content }}
      </h7>
    </div>
    <!-- <LabelContainer2 :author="pageData.author" :date="pageData.publishDate" /> -->
    <section class="image-section d-flex mx-auto">
      <img
        class="news-image-small mx-2 mt-4"
        style="max-width : 300px"
        :src="detailContent.url"
      >
    </section>

    <div
      v-for="data in detailContent.profilStasi_asisten"
      :key="data"
      class="table table-borderless"
    >
      <span class="text"> {{ data.ling }}</span>
      <table>
        <tr>
          <td>Ketua</td>
          <td>:</td>
          <td>{{ data.name }}</td>
        </tr>
        <tr>
          <td>Sekretaris</td>
          <td>:</td>
          <td>{{ data.sekre }}</td>
        </tr>
        <tr>
          <td>Bendahara</td>
          <td>:</td>
          <td>{{ data.benda }}</td>
        </tr>
        <tr>
          <td>Asisten Imam</td>
          <td>:</td>
          <td>{{ data.asisten }}</td>
        </tr>
        <tr>
          <td>Jumlah Keluarga</td>
          <td>:</td>
          <td>{{ data.kk }}</td>
        </tr>

        <tr>
          <td>Jumlah Umat</td>
          <td>:</td>
          <td>{{ data.jiwa }}</td>
        </tr>
      </table>
    </div>

    <div
      v-for="data in detailContent.profilStasi_mojo"
      :key="data"
      class="table table-borderless"
    >
      <span class="text"> {{ data.ling }}</span>
      <table>
        <tr>
          <td>Ketua</td>
          <td>:</td>
          <td>{{ data.name }}</td>
        </tr>
        <tr>
          <td>Sekretaris</td>
          <td>:</td>
          <td>{{ data.sekre }}</td>
        </tr>
        <tr>
          <td>Bendahara</td>
          <td>:</td>
          <td>{{ data.benda }}</td>
        </tr>
        <tr>
          <td>Seksi BIAK</td>
          <td>:</td>
          <td>{{ data.biak }}</td>
        </tr>
        <tr>
          <td>Seksi OMK</td>
          <td>:</td>
          <td>{{ data.omk }}</td>
        </tr>
        <tr>
          <td>Seksi Sosial</td>
          <td>:</td>
          <td>{{ data.sosial }}</td>
        </tr>
        <tr>
          <td>Seksi Bangunan</td>
          <td>:</td>
          <td>{{ data.bangunan }}</td>
        </tr>
        <tr>
          <td>Jumlah Keluarga</td>
          <td>:</td>
          <td>{{ data.kk }}</td>
        </tr>

        <tr>
          <td>Jumlah Umat</td>
          <td>:</td>
          <td>{{ data.jiwa }}</td>
        </tr>
      </table>
    </div>

    <div
      v-for="data in detailContent.profilStasi"
      :key="data"
      class="table table-borderless"
    >
      <span>{{ data.ling }}</span>
      <table>
        <tr>
          <td>Ketua</td>
          <td>:</td>
          <td>{{ data.name }}</td>
        </tr>
        <tr>
          <td>Sekretaris</td>
          <td>:</td>
          <td>{{ data.sekre }}</td>
        </tr>
        <tr>
          <td>Bendahara</td>
          <td>:</td>
          <td>{{ data.benda }}</td>
        </tr>
        <tr>
          <td>Jumlah Keluarga</td>
          <td>:</td>
          <td>{{ data.kk }}</td>
        </tr>
        <tr>
          <td>Jumlah Umat</td>
          <td>:</td>
          <td>{{ data.jiwa }}</td>
        </tr>
      </table>
    </div>

    <div
      v-for="data in detailContent.profilStasi_lengkap"
      :key="data"
      class="table table-borderless"
    >
      <span>{{ data.ling }}</span>
      <table>
        <tr>
          <td>Ketua</td>
          <td>:</td>
          <td>{{ data.name }}</td>
        </tr>
        <tr>
          <td>Wakil</td>
          <td>:</td>
          <td>{{ data.wakil }}</td>
        </tr>
        <tr>
          <td>Sekretaris</td>
          <td>:</td>
          <td>{{ data.sekre }}</td>
        </tr>
        <tr>
          <td>Bendahara</td>
          <td>:</td>
          <td>{{ data.benda }}</td>
        </tr>
        <tr>
          <td>Jumlah Keluarga</td>
          <td>:</td>
          <td>{{ data.kk }}</td>
        </tr>
        <tr>
          <td>Jumlah Umat</td>
          <td>:</td>
          <td>{{ data.jiwa }}</td>
        </tr>
        <tr>
          <td>Ketua Bidang Pembinaan Kristiani</td>
          <td>:</td>
          <td>{{ data.bidang_bina }}</td>
        </tr>
        <tr>
          <td>Seksi Bina Iman Anak</td>
          <td>:</td>
          <td>{{ data.biak }}</td>
        </tr>
        <tr>
          <td>Seksi Remaja Katolik</td>
          <td>:</td>
          <td>{{ data.remaja }}</td>
        </tr>
        <tr>
          <td>Seksi Orang Muda Katolik</td>
          <td>:</td>
          <td>{{ data.omk }}</td>
        </tr>
        <tr>
          <td>Ketua Bidang Sumber</td>
          <td>:</td>
          <td>{{ data.bidang_sumber }}</td>
        </tr>
        <tr>
          <td>Seksi Katakese</td>
          <td>:</td>
          <td>{{ data.katakese }}</td>
        </tr>
        <tr>
          <td>Seksi Liturgi</td>
          <td>:</td>
          <td>{{ data.liturgi }}</td>
        </tr>
        <tr>
          <td>Seksi Kerasulan Kitab Suci</td>
          <td>:</td>
          <td>{{ data.rasul_kitab }}</td>
        </tr>
        <tr>
          <td>Ketua Bidang Kerasulan Khusus</td>
          <td>:</td>
          <td>{{ data.bidang_khusus }}</td>
        </tr>
        <tr>
          <td>Seksi Komunikasi Sosial</td>
          <td>:</td>
          <td>{{ data.komsos }}</td>
        </tr>
        <tr>
          <td>Seksi Pendidikan</td>
          <td>:</td>
          <td>{{ data.pendidikan }}</td>
        </tr>
        <tr>
          <td>Seksi Karya Misionaris</td>
          <td>:</td>
          <td>{{ data.misioner }}</td>
        </tr>
        <tr>
          <td>Ketua Bidang Kerasulan Umum</td>
          <td>:</td>
          <td>{{ data.bidang_umum }}</td>
        </tr>
        <tr>
          <td>Seksi Pengembangan Sosial Ekonomi</td>
          <td>:</td>
          <td>{{ data.sosek }}</td>
        </tr>
        <tr>
          <td>Seksi Hubungan Agama dan Kepercayaan</td>
          <td>:</td>
          <td>{{ data.agama }}</td>
        </tr>
      </table>
    </div>

    <div
      v-for="data in detailContent.profilStasi_wakil"
      :key="data"
      class="table table-borderless"
    >
      <span> {{ data.ling }}</span>
      <table>
        <tr>
          <td>Ketua</td>
          <td>:</td>
          <td>{{ data.name }}</td>
        </tr><tr>
          <td>Wakil Ketua</td>
          <td>:</td>
          <td>{{ data.wakil }}</td>
        </tr>
        <tr>
          <td>Sekretaris</td>
          <td>:</td>
          <td>{{ data.sekre }}</td>
        </tr>
        <tr>
          <td>Bendahara</td>
          <td>:</td>
          <td>{{ data.benda }}</td>
        </tr>
        <tr>
          <td>Jumlah Keluarga</td>
          <td>:</td>
          <td>{{ data.kk }}</td>
        </tr>
        <tr>
          <td>Jumlah Umat</td>
          <td>:</td>
          <td>{{ data.jiwa }}</td>
        </tr>
      </table>
    </div>

    <div
      v-for="data in detailContent.profilLing"
      :key="data"
      class="table table-borderless"
    >
      <span class="text"> {{ data.ling }}</span>
      <table>
        <tr>
          <td>Ketua</td>
          <td>:</td>
          <td>{{ data.name }}</td>
        </tr>

        <tr>
          <td>Jumlah Keluarga</td>
          <td>:</td>
          <td>{{ data.kk }}</td>
        </tr>

        <tr>
          <td>Jumlah Umat</td>
          <td>:</td>
          <td>{{ data.jiwa }}</td>
        </tr>
      </table>
    </div>
    <!-- <v-img
        v-if="pageData.imageLink && pageData.imageLink !== ''"
        width="270"
        height="270"
        class="mx-auto news-image"
        :src="pageData.imageLink"
      /> -->
    <!-- <section class="content-section mt-5">
      <div class="post-content mx-auto" v-html="pageData.content">
        {{ detailContent.content }}
      </div>
    </section> -->

  </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    pageData: [
      {
        title: 'Kristus Raja Ngrambe',
        slug: 'kristus-raja',
        content: 'Gereja Pusat Kuasi Paroki yang mana meliputi 6 lingkungan',
        url: require('@/assets/img/ngrambe.png'),
        profilLing: [
          {
            ling: 'Lingkungan St.Yohanes',
            name: 'CH. Didik Asih',
            kk: '26 KK',
            jiwa: '65 Jiwa'
          },
          {
            ling: 'Lingkungan St.Lukas',
            name: 'JH Budi Santoso',
            kk: '34 KK',
            jiwa: '79 Jiwa'
          },
          {
            ling: 'Lingkungan St.Barnabas',
            name: 'JH Budi Santoso',
            kk: '18 KK',
            jiwa: '44 Jiwa'
          },
          {
            ling: 'Lingkungan St.Vinsensius',
            name: 'Heribertus Wahyu Hendrat Wijaya',
            kk: '24 KK',
            jiwa: '65 Jiwa'
          },
          {
            ling: 'Lingkungan St.Maria Guadalope',
            name: 'Stevanus Dwi Prasetyo',
            kk: '14 KK',
            jiwa: '37 Jiwa'
          },
          {
            ling: 'Lingkungan St.Markus',
            name: 'Yohakim Hariyanto',
            kk: '12 KK',
            jiwa: '32 Jiwa'
          }
        ]
      },
      {
        title: 'Stasi Yohanes Pembaptis Walikukun',
        slug: 'yohanes-pembaptis',
        url: require('@/assets/img/ngrambe.png'),
        profilStasi_lengkap: [
          {
            name: 'Stevanus Sri Bintono',
            wakil: '-',
            remaja: '-',
            sekre: 'Andreas Herlianto Mariagus Budiawan, Lidia Lany Hastuti',
            benda: 'Anastasia Sulistyorini,Caecilia Dwi Nurwati',
            bidang_bina: 'Agustinus Varianto Kurniawan Jatmiko',
            biak: 'Anna Suherci Dwi Ratnawati, Margareta Rendrasari Herminingsih',
            omk: 'Theresia Nunuk Lestyaningrum, Emilia Nugraheni Cahyaningtyas',
            bidang_sumber: 'Victoria Widhiastuti',
            katakese: 'Laurensia Dwi Anjani, Caecilia Eny Widyaretna',
            liturgi: 'Lidia Lany Hastuti, Christina Rini Dwi Purwati',
            rasul_kitab: 'Andreas Agus Suratman',
            bidang_khusus: 'Lukas Ari Muliana',
            komsos: 'Lusius Kabul Santoso',
            pendidikan: 'Yusephine Katirah',
            misioner: 'Elisabeth Evi Nurhayati',
            bidang_umum: 'Ignatius Sudalyadi',
            rasul_awam: 'Yustinus Adi Purwanto',
            sosek: 'Christin Tri Maeni Hartati',
            agama: 'Petrus Bambang Tri Sudarsono',

            kk: '80 KK',
            jiwa: '225 Jiwa'
          }
        ]
      },
      {
        title: 'Stasi Santa Maria Assumpta Ngerendeng',
        slug: 'maria-assumpta',
        url: require('@/assets/img/ngrambe.png'),
        profilLing: [
          {
            ling: 'Lingkungan Tomas Becket',
            name: 'Stevanus Irine Tatik',
            kk: '16 KK',
            jiwa: '33 jiwa'
          },
          {
            ling: 'Lingkungan St. Fransiskus Xaverius Banjaran',
            name: 'Harminto',
            kk: '8 KK',
            jiwa: '24 jiwa'
          },
          {
            ling: 'Lingkungan St. Petrus Jamus',
            name: 'Robertus Tarmono',
            kk: '8 KK',
            jiwa: '24 jiwa'
          }
        ]
      },
      {
        title: 'Stasi Santo Yohanes Rasul',
        slug: 'yohanes-rasul',
        url: require('@/assets/img/ngrambe.png'),
        profilStasi_asisten: [
          {
            name: 'Timotius Hariyono',
            sekre: 'Marta Riris Umaryani',
            benda: 'Veronika Widi Mulyani',
            asisten: 'Agustinus Supriyadi',
            kk: '25 KK',
            jiwa: '72 Jiwa'
          }
        ]
      },
      {
        title: 'Stasi Hati Kudus Yesus',
        slug: 'hati-kudus-yesus',
        url: require('@/assets/img/ngrambe.png'),
        profilStasi_asisten: [
          {
            name: 'Lukas Eko Prasetyo',
            sekre: 'Agnes Pipa Heryani',
            benda: 'Agustina Sri Wahyuni',
            asisten: 'Aloysius Sungkono, Fransiskus Xaverius Pairi Imanto',
            kk: '53 KK',
            jiwa: '143 Jiwa'
          }
        ],
        profilLing: [
          {
            ling: 'Lingkungan St. Yohanes',
            name: 'Wahyudi',
            kk: '-',
            jiwa: '-'
          },
          {
            ling: 'Lingkungan St. Teresia',
            name: 'Robertus Suparno',
            kk: '-',
            jiwa: '-'
          },
          {
            ling: 'Lingkungan St. Petrus',
            name: 'Andriana Sri Suwarti',
            kk: '-',
            jiwa: '-'
          }
        ]
      },
      {
        title: 'Stasi Santa Maria Ratu Surga',
        slug: 'maria-ratu-surga',
        url: require('@/assets/img/ngrambe.png'),
        profilStasi_asisten: [
          {
            name: 'Simon Dwi Hari Purnomo',
            sekre: 'Benedikta Dwi A.',
            benda: 'Yulia Kasmini',
            asisten: 'T. Suparli, Antonius Tukiman',
            kk: '33 KK',
            jiwa: '89 jiwa'
          }
        ]
      },
      {
        title: 'Stasi Matheus Pengarang Injil',
        slug: 'matheus-pengarang-injil',
        url: require('@/assets/img/ngrambe.png'),
        profilStasi_mojo: [
          {
            name: 'Agustinus Sumarjo',
            sekre: 'Lusia Siswantini',
            benda: 'Fransiskus Ayom Krisnoto, Maria Erna Sulistyowati',
            biak: 'Theresia Sri Purwati',
            omk: 'Aloysius Supangat',
            sosial: 'Agustinus Setyo Wiyanto, Yuliana Yasini',
            bangunan: 'Antonius Sutrisno',
            kk: '43 KK',
            jiwa: '148 Jiwa'
          }
        ],
        profilLing: [
          {
            ling: 'Lingkungan St. Mateus',
            name: 'Fransiskus Xaverius Sugimin'
          },
          {
            ling: 'Lingkungan Brayat Minulyo',
            name: 'Aloysius Sumarno'
          }
        ]
      },
      {
        title: 'Stasi Santo Paulus Kedungharjo',
        slug: 'paulus-kedungharjo',
        url: require('@/assets/img/ngrambe.png'),
        profilStasi: [
          {
            name: 'Yosef Supriyanto',
            sekre: 'Antonius Tripurnomo',
            benda: 'Maria Magdalena Kuntiyah',
            kk: '39 KK',
            jiwa: '88 Jiwa'
          }
        ]
      },
      {
        title: 'Stasi Santo Lukas Jatimulyo',
        slug: 'lukas-jatimulyo',
        url: require('@/assets/img/ngrambe.png'),
        profilStasi_wakil: [
          {
            name: 'Paulus Risdi Purwanta',
            wakil: 'Yohanes Sulistyo',
            sekre: 'Florentina Sri Hartini, Andread Parmin',
            benda: 'Falentinus Suwarno, Yanuarius Sugomanto',
            kk: '39 KK',
            jiwa: '88 Jiwa'
          }
        ]
      },
      {
        title: 'Stasi Santo Petrus Kedungmiri',
        slug: 'petrus-kedungmiri',
        url: require('@/assets/img/ngrambe.png'),
        profilStasi_lengkap: [
          {
            name: 'Bonaventurra Suprapto',
            wakil: 'Yustina Eny Pancariswati',
            sekre: 'Kristiana Endrawati',
            benda: 'Christiana Wahyu Wigati',
            kk: '34 KK',
            jiwa: '91 Jiwa',
            bidang_bina: 'Stepahnus Hery Supatno',
            biak: 'Angela Dwi Handayani',
            remaja: 'Vincentius Supripto',
            omk: 'Roderikus Hendrikus Kunto W.',
            bidang_sumber: 'Yuliana Endang Sulistyowati',
            katakese: 'Yustona Partiati',
            liturgi: 'Fransiska Nurhayati',
            rasul_kitab: 'Robertus Supadi',
            bidang_khusus: 'Yulita Erningsih',
            komsos: 'Leonardo Sriyanto',
            pendidikan: 'Eustachia Titik Sartijah',
            bidang_umum: 'Lucia Esti Rahayu',
            sosek: 'Yovita Nanik Mardaningsih',
            agama: 'FX Sugiyanto',
            misioner: '-'
          }
        ],
        profilLing: [
          {
            ling: 'Lingkungan St. Paulus',
            name: 'Fransiska Rusmini'
          },
          {
            ling: 'Lingkungan St. Thomas',
            name: 'Margareta Ismini'
          }
        ]
      },
      {
        title: 'Stasi Santo Fransiskus Xaverius Pondok',
        slug: 'fransiskus-xaverius',
        url: require('@/assets/img/ngrambe.png'),
        profilStasi: [
          {
            name: 'Aloysius Sumarsono',
            sekre: 'Scolastika Eny',
            benda: 'Rosalia Y',
            kk: '29 KK',
            jiwa: '80 Jiwa'
          }
        ]
      }
    ],
    detailContent: [],
    slug: '',
    type: 'news'
  }),
  // di local bisa dijadikan satu yang didalam fetch dan mountednya
  // karena tidak statis
  // jika statis maka harus dipecah, karena fetch ada atau tidak ada hasilnya
  // akan dianggap ada hasil dan fetchnya tidak dijalankan lagi
  fetch () {
    // const payload = this.$nuxt.context.payload
    // if (payload) {
    //   this.pageData = payload
    // }
    this.slug = this.$route.params.id
    this.pageData.forEach((value, index) => {
      if (this.slug === value.slug) {
        this.detailContent = value
      }
    })
    console.log(this.detailContent)
  }
  //   async mounted () {
  //     if (Object.keys(this.pageData).length === 0) {
  //       this.pageData = await this.$axios.$post('/.netlify/functions/imavi-detail', {
  //         type: this.type,
  //         code: this.$route.params.id
  //       })
  //     }
  //   }
}
</script>
