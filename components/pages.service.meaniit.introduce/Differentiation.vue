<template>
  <v-row v-if="smAndUp" justify="center">
    <v-col cols="12" class="d-flex flex-column align-center">
      <p class="content-title mb-12">
        {{ t('pages.introduce.differentiation.title') }}
      </p>
    </v-col>

    <v-col
      v-for="(item, index) in items"
      :key="index"
      cols="12"
      sm="9"
      md="6"
      lg="5"
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

  <v-row v-if="xs">
    <v-col cols="12" class="d-flex justify-center">
      <p class="content-title">
        {{ t('pages.introduce.differentiation.title') }}
      </p>
    </v-col>

    <v-col v-for="(item, index) in items" :key="index" cols="12">
      <v-card
        justify="center"
        variant="flat"
        rounded="xl"
        class="my-1 d-flex flex-column pa-4"
        width="100%"
        height="250px"
      >
        <v-card-title class="d-flex align-center justify-center">
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
          <div class="contentText-xs">
            {{ item.content }}
          </div>
        </v-card-text>

        <v-card-subtitle>
          <div class="contentSubText-xs">
            {{ item.subcontent }}
          </div>
        </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const { xs, smAndUp } = useDisplay()
const { t, tm } = useI18n()

const items = computed(() => tm('pages.introduce.differentiation.items'))
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

.contentText-xs {
  font-size: 1.4rem;
  font-weight: 600;
}
.contentSubText-xs {
  font-size: 1rem;
  font-weight: 400;

  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}
</style>
