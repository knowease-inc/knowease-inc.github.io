<template>
  <v-container class="d-flex flex-column" fluid>
    <!-- ### Start : Service Link ### -->
    <v-row justify="center">
      <v-col class="d-flex flex-column align-center">
        <p class="content-title">게타's 서비스</p>
        <div v-if="smAndUp" class="content-subtitle">
          <div class="font-weight-bold">
            정보, 지식이 쉽고 빠르게 전달 및 소통 되도록 만드는
          </div>
          <div>모든 기술을 고민하고 그것들에 도전하고 있습니다.</div>
        </div>

        <!-- ### Start : Our Service ### -->
        <v-col cols="12" sm="9" md="8">
          <Services />
        </v-col>
      </v-col>
    </v-row>

    <!-- ### Start : Partners ### -->
    <v-row justify="center" class="pt-16">
      <v-col class="d-flex flex-column align-center">
        <p class="content-title">고객사</p>
        <v-col cols="11" sm="8">
          <Partners />
        </v-col>
      </v-col>
    </v-row>

    <!-- ### Start : History ### -->
    <v-row
      justify="center"
      no-gutters
      style="background-color: #2979ff"
      class="mt-16 d-flex flex-column align-center white--text"
    >
      <v-col cols="12" sm="4" class="d-flex flex-column align-center pt-16">
        <p class="content-title white--text">연혁</p>
        <v-col class="d-flex">
          <v-col
            cols="12"
            sm="auto"
            offset-sm="1"
            class="content-subtitle pa-0 pl-9"
          >
            게타(GET-A)을 위했던
            <span class="font-weight-black">지난 여정</span>
          </v-col>

          <v-col v-if="smAndUp" cols="auto" offset="4" class="py-0">
            <v-btn
              :disabled="carouselIndex === 0"
              size="small"
              color="white"
              :icon="mdiChevronLeft"
              variant="text"
              @click="triggerCarouselAction('left')"
            />
            <v-btn
              size="small"
              color="white"
              :icon="mdiChevronRight"
              variant="text"
              @click="triggerCarouselAction('right')"
            />
          </v-col>
        </v-col>
      </v-col>

      <TimelineIndex @update-carousel-index="updateCarouselIndex" />

      <v-col v-if="xs" cols="auto" class="mb-8">
        <v-btn
          :disabled="carouselIndex === 0"
          :icon="mdiChevronLeft"
          @click="triggerCarouselAction('left')"
        />
        <v-btn
          :icon="mdiChevronRight"
          @click="triggerCarouselAction('right')"
        />
      </v-col>
    </v-row>

    <!-- ### Start : Linked In Badges ### -->
    <v-row justify="center" class="pt-16">
      <v-col class="d-flex flex-column align-center">
        <p class="content-title">함께하는 사람들</p>
        <div class="content-subtitle">
          <div>
            게타(GET-A)을 위해 <br v-if="xs" />
            <span class="font-weight-bold"> 고군분투하는 이들</span>
          </div>
        </div>
        <v-col cols="11" sm="8">
          <Founders />
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Services from '@/components/pages.index/Services.vue'
import Founders from '@/components/pages.index/Founders.vue'
import TimelineIndex from '@/components/pages.index/Timeline.vue'
import Partners from '@/components/pages.index/Partners.vue'

import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'

const { xs, smAndUp } = useDisplay()

const emit = defineEmits(['carousel-action'])

const carouselIndex = ref(0)

const triggerCarouselAction = (direction) => {
  emit('carousel-action', direction)
}

const updateCarouselIndex = (newIndex) => {
  carouselIndex.value = newIndex
}

/* SEO */
// head() {
//   const headTitle = '(주)게타'
//   const description = '세상 모든 지식 & 정보격차 해소를 위합니다'
//   const ogDescription = description
//   const ogImgURL =
//     'https://dmq1lrjfpg713.cloudfront.net/og_company_20231227.png'
//   return {
//     title: headTitle,
//     meta: [
//       /*
//        ** OpenGraph(og) ref.https://qiita.com/amishiro/items/b7260116b282d2cf2756
//        ** Basic
//        */
//       {
//         hid: 'og:title',
//         property: 'og:title',
//         content: headTitle,
//       },
//       {
//         hid: 'og:description',
//         property: 'og:description',
//         content: ogDescription,
//       },
//       {
//         hid: 'og:image',
//         property: 'og:image',
//         content: ogImgURL,
//       },
//       /* OpenGraph for twitter */
//       {
//         hid: 'twitter:title',
//         name: 'twitter:title',
//         content: headTitle,
//       },
//       {
//         hid: 'twitter:description',
//         name: 'twitter:description',
//         content: ogDescription,
//       },
//       {
//         hid: 'twitter:image',
//         name: 'twitter:image',
//         content: ogImgURL,
//       },
//       /*
//        ** Etc.
//        */
//       {
//         hid: 'description',
//         name: 'description',
//         content: description,
//       },
//     ],
//   }
// },
</script>

<style scoped>
.content-title {
  color: #2979ff;
  font-weight: 700;
}

.content-subtitle {
  font-size: 20px;
  text-align: center;
}
</style>
