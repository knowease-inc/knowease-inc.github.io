<template>
  <v-theme-provider theme="light">
    <v-row justify="center" class="py-8 py-sm-16">
      <v-col cols="10" lg="10" class="d-flex flex-column">
        <p :class="xs ? 'section-title-xs text-center' : 'section-title'">
          {{ t('pages.index.pageTitle.partners') }}
        </p>

        <p
          class="text-sm-start mt-4"
          :class="xs ? 'section-subtitle-xs' : 'section-subtitle'"
        >
          {{ t('pages.index.partners.title') }}
        </p>

        <v-col
          cols="12"
          justify="center"
          class="overflow-x-hidden px-sm-3 px-0"
        >
          <v-row
            justify="start"
            class="py-4"
            style="line-height: 1.8"
            :no-gutters="xs"
          >
            <v-col
              v-for="{ name, ci, link } in partners"
              :key="link"
              class="my-sm-8 mx-auto"
              cols="4"
              sm="auto"
            >
              <a :href="link" target="_blank">
                <img
                  :src="ci"
                  :alt="name"
                  :height="setSize.height"
                  :width="setSize.width"
                />
              </a>
            </v-col>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
  </v-theme-provider>
</template>

<script setup>
const { xs } = useDisplay()
const { t } = useI18n()

const partners = [
  {
    name: '경기도과학진흥원',
    ci: '/img/partners/gbsa.jpg',
    link: 'https://www.gbsa.or.kr/',
  },
  {
    name: '성균관대학교',
    ci: '/img/partners/성균관대.jpg',
    link: 'https://www.skku.edu/skku/',
  },
  {
    name: '차의과대학교',
    ci: '/img/partners/차의과대.jpg',
    link: 'https://www.cha.ac.kr/',
  },
  {
    name: '경민대학교',
    ci: '/img/partners/경민대.jpg',
    link: 'https://www.kyungmin.ac.kr/homepage/intro.do',
  },
  {
    name: '연성대학교',
    ci: '/img/partners/연성대.jpg',
    link: 'https://www.yeonsung.ac.kr/sites/ko/index.do',
  },
  // {
  //   name: '소상공인시장진흥공단',
  //   ci: '/img/partners/소상공인.jpg',
  //   link: 'https://www.semas.or.kr/web/main/index.kmdc',
  // },
]

const setSize = computed(() => {
  return xs.value
    ? { width: '105', height: '45' }
    : { width: '282', height: '120' }
})
</script>

<style></style>
