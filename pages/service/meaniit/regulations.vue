<template>
  <v-row justify="center" align="center">
    <v-card
      flat
      :max-width="mainCardMaxWidth"
      class="mt-sm-0 mx-sm-12 pt-10 pt-sm-0 px-4 pa-sm-10"
    >
      <!-- ### Start : Top List (Main) ### -->
      <v-card flat tile class="contentTitleCard">
        <v-list-item two-line>
          <v-list-item-content>
            <div class="text-center contentTitle">
              {{ titleOfList.name }}
            </div>
            <div class="text-center contentText">
              {{ titleOfList.description }}
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-card>

      <!-- ### Start : MarkDown Component ### -->
      <m-d-of-regulations />
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import MDOfRegulations from '@/components/pages.service.meaniit.regulations/MDOfRegulations.vue'

@Component({
  components: {
    MDOfRegulations,
  },
  head() {
    return {
      title: '미닛 이용 규정',
    }
  },
})
class ServiceEasyxplainRegulations extends Vue {
  @Provide() rowSettings: string = 'mx-0 mt-3 pa-0'
  @Provide() classSettings: string = 'py-5 pl-3 pl-sm-4 pr-13 pr-sm-10'
  @Provide() titleOfList: { name: string; description: string } = {
    name: '이용 규정',
    description: "'미닛' 서비스의 사용 규정 (2021.8.28 기준)",
  }

  // computed
  get mainCardMaxWidth(): number {
    const maxWidth: number =
      this.$vuetify.breakpoint.width < 860
        ? this.$vuetify.breakpoint.width
        : 860
    return maxWidth
  }
}

export default ServiceEasyxplainRegulations
</script>

<style scoped>
.contentTitleCard {
  margin-top: 45px;
  margin-bottom: 5px;
}
.contentTitle {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 10px;
}
.contentText {
  font-size: 14px;
  font-weight: 400;
}
</style>
