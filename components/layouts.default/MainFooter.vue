<template>
  <client-only>
    <v-footer absolute color="black">
      <v-col v-if="smAndUp" offset="2" cols="10" class="pa-4">
        <v-list width="100%" style="background-color: black; color: #8b95a1">
          <v-list-item>
            <v-list-item-title class="footer-text">
              <div class="font-weight-bold mb-4" style="color: #b0b8c1">
                (주)게타
              </div>
              <div>대표자: 박성묵</div>
              <div>
                주소: 경기도 성남시 분당구 성남대로43번길 10, 3층 309호(구미동,
                하나EZ타워)
              </div>
              <div>e-mail: msp770@gmail.com | Tel: 010-8920-3726</div>
            </v-list-item-title>
          </v-list-item>
        </v-list>

        <v-list style="color: #b0b8c1; background-color: black">
          <v-list-item
            v-for="(item, i) in menuItems"
            :key="i"
            :href="item.to"
            :target="item.to.startsWith('http') ? '_blank' : '_self'"
            link
            class="router-push"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col v-else cols="12" class="pa-4">
        <v-list width="100%" style="background-color: black; color: #8b95a1">
          <v-list-item>
            <v-list-item-title class="footer-text">
              <div class="font-weight-bold mb-4" style="color: #b0b8c1">
                (주)게타
              </div>
              <div>대표자: 박성묵</div>
              <div>
                주소: 경기도 성남시 분당구 성남대로43번길 10, 3층 309호(구미동,
                하나EZ타워)
              </div>
              <div>e-mail: msp770@gmail.com | Tel: 010-8920-3726</div>
            </v-list-item-title>
          </v-list-item>
        </v-list>

        <v-list style="color: #b0b8c1; background-color: black" width="100%">
          <v-list-item
            v-for="(item, i) in menuItems"
            :key="i"
            :href="item.to"
            :target="item.to.startsWith('http') ? '_blank' : '_self'"
            link
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
    </v-footer>
  </client-only>
</template>

<script setup>
const { smAndUp } = useDisplay()

const menuItems = [
  { name: '회사 소개', to: '/' },
  { name: '서비스 소개', to: '/service/meaniit/introduce' },
  {
    name: '서비스 바로가기',
    to: 'https://ko.meaniit.com',
  },
]
</script>

<style scoped>
.footer-text {
  font-size: 1rem;
  line-height: 1.4em;

  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}

.router-push:hover {
  cursor: pointer;
  color: #3746fb;
}
</style>
