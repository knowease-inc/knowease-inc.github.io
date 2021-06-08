<template>
  <v-card flat tile>
    <v-container fluid>
      <v-row justify="center" align="center" no-gutters>
        <v-col v-for="(item, i) in parentItems" :key="i" cols="12" sm="6">
          <v-card flat outlined class="ma-1">
            <v-list-item three-line class="pl-1 pr-2">
              <!-- Start: Image -->
              <v-list-item-avatar size="80" class="mx-0">
                <v-avatar tile>
                  <img :src="item.image" />
                </v-avatar>
              </v-list-item-avatar>

              <!-- Start: Content -->
              <v-list-item-content>
                <v-list-item-title class="contentTitle">
                  {{ item.title }}
                </v-list-item-title>

                <v-list-item-subtitle>
                  {{ item.detail }}
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
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
class PagesServiceEasyxplainAchievementsCardList extends Vue {
  @Prop({ type: Array, default: '' }) parentItems!: Array<{}>
}
export default PagesServiceEasyxplainAchievementsCardList
</script>

<style scoped>
.contentTitle {
  font-weight: 600;
}
</style>
