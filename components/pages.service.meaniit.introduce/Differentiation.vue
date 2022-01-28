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
      content: '내용 길이가 짧게 제한됩니다.',
      subcontent: '누가 요약 좀? 그 누구와 요약이 여기 있습니다.',
    },
    {
      titleFirst: 'S',
      title: 'imple',
      content: '한 용어/주제의 다양한 설명을 한 장에 보여줍니다.',
      subcontent: '들어왔다 나갔다 다음거 누르고 그럴 필요없어요.',
    },
    {
      titleFirst: 'Y',
      title: 'ours',
      content: '작성자 활동은 개인 페이지에 능력으로 인증됩니다.',
      subcontent:
        '설명과 같은 추상적인 능력이 객관적으로 인정받을 수 있도록 합니다.',
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
