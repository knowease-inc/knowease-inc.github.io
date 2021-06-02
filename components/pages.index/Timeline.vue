<template>
  <v-card flat class="mt-4 mx-0 mx-sm-4">
    <v-timeline :dense="$vuetify.breakpoint.smAndDown" class="pr-6 px-sm-8">
      <v-timeline-item
        v-for="(item, i) in content"
        :key="i"
        :left="item.left"
        :right="!item.left"
        :small="item.small"
        color="secondary"
      >
        <template #opposite>
          <span
            class="headline font-weight-bold secondary--text"
            v-text="item.date"
          ></span>
        </template>
        <v-card flat outlined>
          <v-card-title class="py-1 font-weight-bold secondary--text">
            {{ item.title }}
          </v-card-title>
          <v-card-text
            v-if="$vuetify.breakpoint.smAndDown"
            class="py-0 grey--text"
          >
            {{ item.date }}
          </v-card-text>
          <v-card-text class="py-2">
            {{ item.body }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      content: [
        {
          title: "'EASYXLPLAIN' Alpha Test",
          date: '2020.10',
          body:
            "'EASYXLPLAIN' 최소 작동 모델(MVP) 완성 후, 고객지향적인 서비스 개발을 위해 고객 대상 최초 테스트가 이루어졌습니다.",
          left: false,
          small: true,
        },
        {
          title: '쉬운지식 유한책임회사 설립',
          date: '2020.7',
          body: '본격적인 발돋움을 위해 법인 설립을 완료하였습니다',
          left: true,
          small: false,
        },
        {
          title: '창립 멤버 구성',
          date: '2019.7',
          body:
            '총 4명으로 구성된 창립 멤버로, 우수한 개발 능력을 갖춘 멤버가 합류함으로써 본격적인 서비스 개발에 착수했습니다.',
          left: true,
          small: true,
        },
        {
          title: "'EASYXLPLAIN' 최초 개발",
          date: '2019.4',
          body:
            "아이디어 상태였던 'EASYXLPLAIN' 아이템을 직접 개발하기 시작했습니다.",
          left: false,
          small: true,
        },
      ],
    }
  },
}
</script>
