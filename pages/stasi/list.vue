<template>
  <!-- static -->
  <div class="main-container mx-auto">
    <!-- <SearchContainer
      :data="categoryList"
    /> -->
    <section class="body-section mt-8 ">
      <h1 class="text-center mx-auto">
        Daftar Stasi
      </h1>
      <div class="d-flex flex-column mt-10">
        <v-row no-gutters class="inner-contain">
          <v-col
            v-for="(item, i) in dataList"
            :key="i"
            class="mt-5"
            cols="4"
          >
            <ParokiCard
              :item="item"
              class="d-flex mx-auto"
            />
          </v-col>
        </v-row>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  // static
  data: () => ({
    dataList: [
      {
        title: 'Kristus Raja',
        ketua: '',
        ling: [
          'St. Barnabas', 'St. Yohanes', 'St. Lukas', 'St. Vincentius', 'St. Guadalope', 'St. Markus'
        ],
        slug: 'kristus-raja'

      },
      {
        title: 'Santo Yohanes Pembaptis Walikukun',
        ketua: 'Stevanus Sri Bintono',
        ling: [
          'St.Antonius', 'St.Yusup', 'St.Yohanes', 'St.Petrus'],
        slug: 'yohanes-pembaptis'
      },

      {
        title: 'Santa Maria Assumpta Ngerendeng',
        ketua: 'Irine Tatik',
        ling: [
          'St. Petrus Jamus', 'St. Fransiskus Xaverius Banjaran', 'St. Maria Assumpta'
        ],
        slug: 'maria-assumpta'
      },

      {
        title: 'Santo Yohanes Rasul',
        ketua: 'Timotius Hariyono',
        ling: [
          'Sine'],
        slug: 'yohanes-rasul'
      },
      {
        title: 'Hati Kudus Yesus',
        ketua: 'Lukas Eko Prasetyo',
        ling: [
          'Bulak'],
        slug: 'hati-kudus-yesus'
      },
      {
        title: 'Santa Maria Ratu Surga',
        ketua: 'Simon Dwi Hari Purnomo',
        ling: [
          'Ngroto'],
        slug: 'maria-ratu-surga'

      },
      {
        title: 'Matheus Pengarang Injil',
        ketua: 'Agustinus Sumarjo',
        ling: [
          'St.Matheus', 'St.Brayat Minulyo'],
        slug: 'matheus-pengarang-injil'
      },
      {
        title: 'Santo Paulus Kedungharjo',
        ketua: 'Yosef Supriyanto',
        ling: [
          'St.Rafael', 'St.Mikhael'],
        slug: 'paulus-kedungharjo'
      },
      {
        title: 'Santo Lukas Jatimulyo',
        ketua: 'Paulus Risdi Purwanta',
        ling: [
          'St.Yohanes', 'St. Maria'],
        slug: 'lukas-jatimulyo'
      },
      {
        title: 'Santo Petrus Kedungmiri',
        ketua: 'Bonaventura Suprapto',
        ling: [
          'St.Thomas', 'St.Paulus'],
        slug: 'petrus-kedungmiri'
      },
      {

        title: 'Santo Fransiskus Xaverius Pondok ',
        ketua: 'Aloysius Sumarsono',
        ling: [
          'Pondok'],
        slug: 'fransiskus-xaverius'
      }

    ]
  })

}

</script>
