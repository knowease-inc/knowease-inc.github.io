<template>
  <v-row justify="center" align="center">
    <v-card
      flat
      :max-width="mainCardMaxWidth"
      :min-height="$vuetify.breakpoint.height - 220"
      class="d-flex justify-center align-center ma-8 pa-8"
    >
      <v-card flat>
        <v-card-title class="d-flex justify-center">
          쉬운지식 LLC
        </v-card-title>

        <v-card outlined flat>
          <v-card-actions class="d-flex justify-center">
            <v-btn text class="ml-2 mr-4 px-0">
              <v-img
                src="/img/EASYXPLAIN_LOGO.png"
                alt="EASYXPLAIN"
                contain
                height="46"
                width="70"
              ></v-img>
            </v-btn>
            <v-divider vertical />
            <v-btn text to="/service/easyxplain/introduce">소개</v-btn>
            <v-btn text to="/service/easyxplain/regulations">규정</v-btn>
          </v-card-actions>
        </v-card>

        <v-card-actions v-if="false">
          <founders></founders>
        </v-card-actions>
      </v-card>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import Founders from '@/components/pages.introduce/Founders.vue'

@Component({
  components: {
    Founders,
  },
  computed: {
    mainCardMaxWidth(): number {
      const maxWidth: number =
        this.$vuetify.breakpoint.width < 860
          ? this.$vuetify.breakpoint.width
          : 860
      return maxWidth
    },
  },
})
class PagesIndex extends Vue {
  @Provide() isActive: boolean = false
}

export default PagesIndex
</script>
