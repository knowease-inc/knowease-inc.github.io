<template>
  <client-only>
    <v-footer padless dark absolute class="grey lighten-1">
      <v-col cols="12" class="text-center pa-1">
        <div v-if="$vuetify.breakpoint.smAndUp">
          <div class="footer-text white--text">
            쉬운지식 유한책임회사 | 대표자: 박성묵 | 주소: 경기도 성남시 분당구
            정자일로 80, 17호(정자동, 에프디비즈니스센터)
          </div>
          <div class="footer-text white--text">
            e-mail: msp770@gmail.com | Tel: 010-8920-3726
          </div>
        </div>
        <div v-else>
          <div class="footer-text white--text">쉬운지식 유한책임회사</div>
        </div>
      </v-col>
    </v-footer>
  </client-only>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    toIntroduce() {
      const path = '/introduce'
      this.$router.push({ path })
    },
    toRegulations() {
      const path = '/regulations'
      this.$router.push({ path })
    },
  },
}
</script>

<style scoped>
.footer-text {
  font-size: 0.85rem;
  line-height: 1.4em;
  color: #212121;
}
.footer-text-small {
  font-size: 0.85rem;
  line-height: 1.4em;
  color: #212121;
}
.router-push {
  text-decoration: underline;
}
.router-push:hover {
  cursor: pointer;
}
</style>
