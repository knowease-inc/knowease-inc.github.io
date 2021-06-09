<template>
  <v-card flat tile>
    <v-container fluid class="pt-0">
      <v-row justify="center" align="center" no-gutters>
        <v-col
          v-for="(item, i) in parentItems"
          :key="i"
          cols="12"
          sm="6"
          class="d-flex justify-center"
        >
          <v-card flat :max-width="maxWidthOfCard" class="ma-1">
            <!-- Start: Image -->
            <v-list-item class="d-flex justify-center">
              <v-list-item-avatar :size="avatarSize" tile>
                <v-img :src="item.image" />
              </v-list-item-avatar>
            </v-list-item>

            <!-- Start: Text -->
            <v-list-item three-line>
              <v-list-item-content class="pt-0">
                <v-list-item-title class="text-center contentTitle">
                  {{ item.title }}
                </v-list-item-title>

                <v-list-item-subtitle class="text-center">
                  {{ item.description }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from 'nuxt-property-decorator'

@Component({})
class PagesServiceEasyxplainAchievementsCardList extends Vue {
  @Prop({ type: Array, default: '' }) parentItems!: Array<{
    image: string
    title: string
    description: string
  }>

  @Provide() maxWidthOfCard: string = '300'
  @Provide() avatarSize: string = '80px'
}
export default PagesServiceEasyxplainAchievementsCardList
</script>

<style scoped>
.contentTitle {
  font-weight: 600;
  margin-bottom: 6px;
}
</style>
