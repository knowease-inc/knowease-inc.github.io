<template>
  <v-row justify="center">
    <v-col cols="12" class="d-flex flex-column align-center">
      <p class="content-title mb-12">{{ differTitle }}</p>
    </v-col>

    <v-col
      v-for="(item, index) in items"
      :key="index"
      cols="12"
      sm="6"
      class="d-flex justify-center"
    >
      <v-card
        justify="center"
        variant="flat"
        rounded="xl"
        class="my-1 d-flex flex-column pa-6 pr-16"
        width="550"
        height="300"
      >
        <v-card-title class="d-flex align-center">
          <video
            :src="item.icon"
            autoplay
            loop
            muted
            style="width: 60px; height: 60px"
          />
          <div class="contentTitleFirst">
            {{ item.title }}
          </div>
        </v-card-title>

        <v-divider class="mr-2" />

        <v-card-text>
          <div class="contentText">
            {{ item.content }}
          </div>
        </v-card-text>

        <v-card-subtitle>
          <div class="contentSubText">
            {{ item.subcontent }}
          </div>
        </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const items = [
  {
    title: 'Easy',
    content: "최상위 가치는 '쉬움'입니다.",
    subcontent: '시작할 수 있어야 다음이 있잖아요.',
    icon: '/img/temp/idea.mp4',
  },
  {
    title: 'Short',
    content: '사용 과정은 짧은 것이 기본입니다.',
    subcontent: "'필요할 수 있는 기능'은 필요한 경우가 아니면 복잡함일 뿐이죠.",
    icon: '/img/temp/startUp.mp4',
  },
  {
    title: 'Accessible',
    content: "'모두'가 쉽게 접근할 수 있는지 고려합니다.",
    subcontent: '그게 좋잖아요.',
    icon: '/img/temp/users.mp4',
  },
  {
    title: 'Yours',
    content: '사용자가 제공해준 것을 잊지 않습니다.',
    subcontent: '사용자가 준 데이터라면, 그 보답도 있어야죠.',
    icon: '/img/temp/gift.mp4',
  },
]

const differTitle = '차별성'
const differSubTitle =
  '다른 보고서 자동화 서비스와 <div><span class="font-weight-bold ml-2">다른점</span>은?</div>'
</script>

<style scoped>
.contentTitle,
.contentTitleFirst {
  font-size: 1.6rem;
  font-weight: 800;
}
.contentTitleFirst {
  color: #00c930;
}
.contentText {
  font-size: 1.6rem;
  font-weight: 600;
}
.contentSubText {
  font-size: 1.2rem;
  font-weight: 400;

  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}
</style>
