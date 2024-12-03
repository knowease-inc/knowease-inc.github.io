<template>
  <div>
    <button>{{ t('languageSwitcher') }}</button>
    <p>{{ t('welcomeMessage') }}</p>

    <h1>{{ $t('hello', { name: 'vue-i18n' }) }}</h1>
    <h1 style="color: red">{{ t('welcome') }}</h1>
    <p>{{ t('description') }}</p>
    <v-btn @click="setLocale('ko')">ko</v-btn>
    <v-btn @click="setLocale('en')">en</v-btn>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n() // 다국어 데이터 가져오기

const { setLocale } = useI18n()
</script>
