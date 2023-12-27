<template>
  <v-row no-gutters>
    <v-col v-for="(item, index) in items" :key="index" cols="12" sm="6">
      <v-card justify="center" flat class="my-1 d-flex flex-column">
        <v-card-text class="pa-0">
          <div class="contentTitle contentTitleFirst mb-2">
            {{ item.title }}
          </div>
        </v-card-text>

        <v-divider class="mr-2" />

        <v-card-text class="px-1 py-2 py-sm-4">
          <div class="contentText">
            {{ item.content }}
          </div>
          <div class="contentSubText">
            {{ item.subcontent }}
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
@Component({})
class PagesServiceEasyxplainDifferentiation extends Vue {
  @Provide() items: Array<{
    title: string
    content: string
    subcontent: string
  }> = [
    {
      title: 'Easy',
      content: "최상위 가치는 '쉬움'입니다.",
      subcontent: '시작할 수 있어야 다음이 있잖아요.',
    },
    {
      title: 'Short',
      content: '사용 과정은 짧은 것이 기본입니다.',
      subcontent:
        "'필요할 수 있는 기능'은 필요한 경우가 아니면 복잡함일 뿐이죠.",
    },
    {
      title: 'Accessible',
      content: "'모두'가 쉽게 접근할 수 있는지 고려합니다.",
      subcontent: '그게 좋잖아요.',
    },
    {
      title: 'Yours',
      content: '사용자가 제공해준 것을 잊지 않습니다.',
      subcontent: '사용자가 준 데이터라면, 그 보답도 있어야죠.',
    },
  ]
}

export default PagesServiceEasyxplainDifferentiation
</script>

<style scoped>
.contentTitle,
.contentTitleFirst {
  font-size: 20px;
  font-weight: 800;
}
.contentTitleFirst {
  color: #3746fb;
}
.contentText {
  font-size: 15px;
  font-weight: 600;
}
.contentSubText {
  font-size: 13px;
  font-weight: 400;
  color: rgba(90, 90, 90, 1);
}
</style>
