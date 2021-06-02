<template>
  <v-card flat>
    <v-row justify="center">
      <v-col v-for="(item, i) in items" :key="i" cols="12" sm="3">
        <!-- Start: Content -->
        <v-card
          flat
          tile
          width="100%"
          :height="cardHeight"
          class="d-flex justify-center align-center"
        >
          <!-- Start: Explanation -->
          <v-list-item v-if="i === 0" three-line>
            <v-list-item-content>
              <div class="d-flex justify-center align-center">
                {{ item.cardText }}
              </div>
            </v-list-item-content>
          </v-list-item>

          <!-- Start: Service Link -->
          <v-card-actions v-else-if="i === 1">
            <v-btn text class="ml-2 mr-4 px-0" :to="item.to" :href="item.href">
              <v-img
                src="/img/EASYXPLAIN_LOGO.png"
                alt="EASYXPLAIN"
                contain
                height="25"
                max-width="100"
              ></v-img>
            </v-btn>
          </v-card-actions>

          <!-- Start: Introduce & Regulations -->
          <div v-else>
            <v-btn text :to="item.to" :href="item.href">
              {{ item.cardText }}
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'

@Component({})
class PagesIndexServices extends Vue {
  @Provide() cardHeight: Number = 150
  @Provide() items: Array<{
    cardText: string
    href: string | undefined
    to: string | undefined
  }> = [
    {
      cardText: '전문/기술 용어와 각종 가이드의 가장 쉬운 설명 제공',
      href: undefined,
      to: undefined,
    },
    {
      cardText: '바로가기',
      href: 'https://frontend.easyxplain.com/',
      to: undefined,
    },
    {
      cardText: '소개',
      href: undefined,
      to: '/service/easyxplain/introduce',
    },
    {
      cardText: '이용 규정',
      href: undefined,
      to: '/service/easyxplain/regulations',
    },
  ]
}

export default PagesIndexServices
</script>

<style scoped>
.expCard {
  font-size: 16px !important;
  font-weight: 600 !important;
}
</style>
