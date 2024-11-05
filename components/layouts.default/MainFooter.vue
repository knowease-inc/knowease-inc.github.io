<template>
  <client-only>
    <v-footer app absolute color="#bdbdbd">
      <v-col cols="12" class="text-center pa-1">
        <div v-if="smAndUp" class="footer-text">
          <div>
            (주)게타 | 대표자: 박성묵 | 주소: 경기도 성남시 분당구
            성남대로43번길 10, 3층 309호(구미동, 하나EZ타워)
          </div>
          <div>e-mail: msp770@gmail.com | Tel: 010-8920-3726</div>
        </div>
        <div v-else>
          <div class="footer-text">(주)게타</div>
        </div>
      </v-col>
    </v-footer>
  </client-only>
</template>

<script setup>
const { smAndUp } = useDisplay()
</script>

<style scoped>
.footer-text {
  font-size: 0.9rem;
  line-height: 1.4em;
  color: white;
}
.footer-text-small {
  font-size: 0.85rem;
  line-height: 1.4em;
  color: white;
}
.router-push {
  text-decoration: underline;
}
.router-push:hover {
  cursor: pointer;
}
</style>
