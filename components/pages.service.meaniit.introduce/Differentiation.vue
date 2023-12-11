<template>
  <v-card flat tile>
    <v-container fluid>
      <v-row
        v-for="(item, index) in items"
        :key="index"
        no-gutters
        justify="center"
      >
        <v-col cols="12" sm="7" class="justify-start">
          <v-card flat class="my-1">
            <v-list-item>
              <span class="contentTitleFirst">
                {{ item.titleFirst }}
              </span>
              <span class="contentTitle">
                {{ item.title }}
              </span>
              <v-divider vertical class="mx-3 mx-sm-5 my-6" />

              <v-card-text class="px-1">
                <div class="contentText">
                  {{ item.content }}
                </div>
                <div class="contentSubText">
                  {{ item.subcontent }}
                </div>
              </v-card-text>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
@Component({})
class PagesServiceEasyxplainDifferentiation extends Vue {
  @Provide() items: Array<{
    titleFirst: string
    title: string
    content: string
    subcontent: string
  }> = [
    {
      titleFirst: 'E',
      title: 'asy',
      content: "최상위 가치는 '쉬움'입니다.",
      subcontent: '시작할 수 있어야 다음이 있잖아요.',
    },
    {
      titleFirst: 'S',
      title: 'hort',
      content: '사용 과정은 짧은 것이 기본입니다.',
      subcontent: '\'필요할 수 있는 기능\'은 필요한 경우가 아니면 복잡함일 뿐이죠.',
    },
    {
      titleFirst: 'A',
      title: 'ccessible',
      content: '\'모두\'가 쉽게 접근할 수 있는지 고려합니다.',
      subcontent: '그게 좋잖아요.',
    },
    {
      titleFirst: 'Y',
      title: 'ours',
      content: '사용자가 제공해준 것을 잊지 않습니다.',
      subcontent:
        '사용자가 준 데이터라면, 그 보답도 있어야죠.',
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
  color: #2979ff;
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
