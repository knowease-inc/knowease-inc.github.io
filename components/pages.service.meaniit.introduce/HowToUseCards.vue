<template>
  <v-row v-if="smAndUp" justify="center" class="ga-8">
    <v-col cols="10">
      <div
        v-for="(htxt, hidx) in howUse"
        :key="hidx"
        class="content-title text-center pt-8"
      >
        {{ htxt }}
      </div>
    </v-col>

    <v-col
      v-for="(item, i) in items"
      :key="i"
      cols="12"
      class="d-flex justify-center"
    >
      <v-card
        flat
        :class="smAndUp ? 'rounded-xl' : 'rounded-0'"
        :width="smAndUp ? '100%' : '93%'"
        :height="smAndUp ? '200' : '300'"
        class="d-flex justify-space-between pa-md-8 pa-sm-4 pr-0"
      >
        <v-col cols="8">
          <v-card-title class="card-title py-md-2">
            {{ item.title }}
          </v-card-title>

          <v-card-subtitle class="contentSubText">
            {{ item.detail }}
          </v-card-subtitle>
        </v-col>

        <v-col cols="4" md="3" align-self="center">
          <v-img :src="item.image" contain width="imgSize"
        /></v-col>
      </v-card>
    </v-col>
  </v-row>

  <v-row v-if="xs" justify="center" class="ga-4">
    <v-col cols="10">
      <div
        v-for="(htxt, hidx) in howUse"
        :key="hidx"
        class="content-title-xs text-center mt-4"
      >
        {{ htxt }}
      </div>
    </v-col>

    <v-col
      v-for="(item, i) in items"
      :key="i"
      cols="12"
      class="d-flex justify-center"
    >
      <v-card flat class="d-flex justify-space-between pa-0 rounded-lg">
        <v-col cols="12">
          <v-card-title class="card-title-xs py-4">
            {{ item.title }}
          </v-card-title>

          <v-card-subtitle class="contentSubText-xs">
            {{ item.detail }}
          </v-card-subtitle>

          <v-col offset="2" cols="8">
            <v-img :src="item.image" contain width="imgSizeXS" />
          </v-col>
        </v-col>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const { xs, smAndUp } = useDisplay()
const { tm } = useI18n()

const imgSize = '500'
const imgSizeXS = '100'

const items = computed(() => tm('pages.introduce.howToUseCards.items'))
const howUse = computed(() => tm('pages.introduce.howToUseCards.howUse'))
</script>

<style scoped>
.card-title {
  font-size: 2rem;
  font-weight: 700;
}

.border-none {
  border: none;
}

.content-title {
  font-size: 1.6rem;
  font-weight: 800;
}

.contentSubText {
  font-size: 1.4rem;
  font-weight: 400;

  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}

.card-title-xs {
  font-size: 1.6rem;
  font-weight: 700;
}

.content-title-xs {
  font-size: 1.6rem;
  font-weight: 800;
}

.contentSubText-xs {
  font-size: 1.2rem;
  font-weight: 400;
  white-space: normal;
}
</style>
