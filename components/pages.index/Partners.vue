<template>
  <div>
    <v-row class="mx-0 mb-3 pa-0 mt-3" no-gutters>
      <span class="text-body-1 font-weight-medium"> Our Partners </span>
    </v-row>

    <v-row justify="center" justify-sm="center" justify-md="space-between">
      <v-col
        v-for="{ name, ci, link } in partners"
        :key="link"
        cols="4"
        sm="4"
        md="2"
        lg="2"
        class="text-center"
      >
        <a :href="link" target="_blank">
          <img :src="ci" :alt="name" height="25" :width="setSize" />
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        {
          name: '경기도과학진흥원',
          ci: '/img/partners/gbsa.png',
          link: 'https://www.gbsa.or.kr/',
        },
        {
          name: '성균관대학교',
          ci: '/img/partners/성균관대.png',
          link: 'https://www.skku.edu/skku/',
        },
        {
          name: '차의과대학교',
          ci: '/img/partners/차의과대.png',
          link: 'https://www.cha.ac.kr/',
        },
        {
          name: '경민대학교',
          ci: '/img/partners/경민대.png',
          link: 'https://www.kyungmin.ac.kr/homepage/intro.do',
        },
        {
          name: '연성대학교',
          ci: '/img/partners/연성대.png',
          link: 'https://www.yeonsung.ac.kr/sites/ko/index.do',
        },
        // {
        //   name: '소상공인시장진흥공단',
        //   ci: '/img/partners/소상공인.png',
        //   link: 'https://www.semas.or.kr/web/main/index.kmdc',
        // },
      ],
    }
  },

  computed: {
    setSize() {
      return this.$vuetify.breakpoint.xsOnly ? '90' : '110'
    },
  },
}
</script>

<style></style>
