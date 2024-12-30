<template>
  <client-only>
    <v-footer absolute color="black">
      <v-col v-if="smAndUp" offset="2" cols="10" class="pa-4">
        <v-list width="100%" style="background-color: black; color: #8b95a1">
          <v-list-item>
            <v-list-item-title class="footer-text">
              <div class="font-weight-bold mb-4" style="color: #b0b8c1">
                {{ t('default.footer.companyName') }}
              </div>
              <div>{{ t('default.footer.representative') }}</div>
              <div>{{ t('default.footer.address') }}</div>
              <div>
                e-mail: {{ t('default.footer.contact.email') }} | Tel:
                {{ t('default.footer.contact.phone') }}
              </div>
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
                {{ t('default.footer.companyName') }}
              </div>
              <div>{{ t('default.footer.representative') }}</div>
              <div>{{ t('default.footer.address') }}</div>
              <div>
                e-mail: {{ t('default.footer.contact.email') }} | Tel:
                {{ t('default.footer.contact.phone') }}
              </div>
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
const { t } = useI18n()

const menuItems = computed(() => [
  { name: t('default.topBar.menuItems.me'), to: '/' },
  {
    name: t('default.topBar.menuItems.serviceIntro'),
    to: '/service/meaniit/introduce',
  },
  {
    name: t('default.topBar.menuItems.serviceLink'),
    to: 'https://ko.meaniit.com',
  },
])
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
