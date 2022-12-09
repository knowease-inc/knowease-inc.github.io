<template>
  <v-container class="d-flex justify-center align-center" fluid>
    <v-card
      flat
      tile
      :max-width="mainCardMaxWidth"
      :min-height="$vuetify.breakpoint.height - 220"
      class="d-flex justify-center align-center mt-2"
    >
      <v-card flat tile>
        <!-- ### Start : Top Carousel ### -->
        <index-carousel></index-carousel>

        <!-- ### Start : Service Link ### -->
        <v-card flat tile class="contentTitleCard">
          <v-list-item two-line>
            <v-list-item-content>
              <div class="d-flex justify-center align-center contentTitle">
                게타(GET-A)'s 서비스
              </div>
              <div class="d-flex justify-center align-center contentSubTitle">
                지식이 쉽게 전달되고 습득될 수 있도록 만드는
              </div>
              <div class="d-flex justify-center align-center contentSubTitle">
                모든 서비스를 고민하고 그것들에 도전하고 있습니다.
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <!-- ### Start : Our Service ### -->
        <services></services>

        <!-- ### Start : History ### -->
        <v-card flat tile class="contentTitleCard">
          <v-list-item two-line>
            <v-list-item-content>
              <div class="d-flex justify-center align-center contentTitle">
                연혁
              </div>
              <div class="d-flex justify-center align-center contentSubTitle">
                게타(GET-A)을 위했던 지난 여정
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <timeline />

        <!-- ### Start : Linked In Badges ### -->
        <v-card flat tile class="contentTitleCard">
          <v-list-item two-line>
            <v-list-item-content>
              <div class="d-flex justify-center align-center contentTitle">
                함께하는 사람들
              </div>
              <div class="d-flex justify-center align-center contentSubTitle">
                게타(GET-A)을 위해 고군분투하는 이들
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <founders />
      </v-card>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import IndexCarousel from '@/components/pages.index/Carousel.vue'
import Services from '@/components/pages.index/Services.vue'
import Founders from '~/components/pages.index/Founders.vue'
import Timeline from '~/components/pages.index/Timeline.vue'

@Component({
  components: {
    Founders,
    Timeline,
    IndexCarousel,
    Services,
  },
})
class PagesIndex extends Vue {
  // computed

  get mainCardMaxWidth(): number {
    const maxWidth: number =
      this.$vuetify.breakpoint.width < 860
        ? this.$vuetify.breakpoint.width
        : 860
    return maxWidth
  }
}

export default PagesIndex
</script>

<style scoped>
.contentTitleCard {
  margin-top: 95px;
  margin-bottom: 25px;
}
.contentTitle {
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 10px;
}
.contentSubTitle {
  font-size: 1.5rem;
  font-weight: 400;
}
</style>
