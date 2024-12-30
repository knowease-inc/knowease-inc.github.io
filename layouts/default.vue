<template>
  <v-app :class="{ dark: isDark }" :theme="isDark ? 'dark' : 'light'">
    <!-- ### Start : Top bar ### -->
    <TopBar @toggle-dark-mode="toggleDarkMode" :is-dark="isDark" />

    <!-- ### Start : Main Contents ### -->
    <slot class="pa-0" :is-dark="isDark" />

    <!-- ### Start : Main Footer ### -->
    <MainFooter />
  </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify'
import TopBar from '@/components/layouts.default/TopBar.vue'
import MainFooter from '@/components/layouts.default/MainFooter.vue'

// 다크 모드 상태 관리
const isDark = ref(false)

const { global: theme } = useTheme()

// 다크 모드 토글 함수
const toggleDarkMode = () => {
  isDark.value = !isDark.value
  theme.name.value = isDark.value ? 'dark' : 'light' // 테마 상태 업데이트
  localStorage.setItem('theme', theme.name.value) // 상태 저장
}


if (typeof window !== "undefined") {
  const script = document.createElement("script");

  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js";
  script.onload = () => {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    window.gtag = gtag; // 전역 함수(gtag) 설정

    gtag("js", new Date());

    console.log("Google Analytics initialized");
  };

  document.head.appendChild(script);
}

// 로컬 스토리지에서 테마 상태 복원
onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light' // 기본값 'light'
  isDark.value = savedTheme === 'dark'
  theme.name.value = savedTheme
})
</script>

<style scoped>
/* 다크 모드에 대한 스타일 */
.dark {
  color: white;
}
</style>
