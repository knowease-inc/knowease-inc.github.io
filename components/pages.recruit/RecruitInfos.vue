<template>
  <v-card flat tile>
    <v-container fluid class="pt-0">
      <v-row justify="center" align="center" no-gutters>
        <!-- Start: Recruit Infos -->
        <v-col
          v-for="(item, i) in parentItems"
          :key="i"
          cols="12"
          class="d-flex justify-center"
        >
          <v-card id="recruit_position" flat tile>
            <!-- Recruit Title -->
            <v-card-title
              id="position_name"
              class="text-h4 text-sm-h3 font-weight-black"
            >
              {{ item.title }}
            </v-card-title>

            <!-- Detail Infos -->
            <div v-for="(content, j) in item.subtitle" :key="j" class="mb-10">
              <v-card-subtitle class="text-h5 text-sm-h4 font-weight-bold">
                {{ content.title }}
              </v-card-subtitle>
              <v-card-card v-for="(detail, k) in content.contents" :key="k">
                <v-card-text class="text-body-1 text-sm-h5 font-weight-bold">
                  {{ detail.title }}
                </v-card-text>
                <ul class="text-body-2 text-sm-body-1 px-12">
                  <li
                    v-for="(text, l) in detail.content"
                    :key="l"
                    class="pt-0 pb-2"
                  >
                    {{ text }}
                  </li>
                </ul>
              </v-card-card>
            </div>
          </v-card>
        </v-col>
        <!-- End: Recruit Infos -->
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
class PagesRecruitRecruitInfos extends Vue {
  @Prop({ type: Array, default: '' }) parentItems!: Array<{
    title: string
    subtitle: Array<{
      title: string
      contents: Array<{ title: string; content: Array<string> }>
    }>
  }>
}
export default PagesRecruitRecruitInfos
</script>
