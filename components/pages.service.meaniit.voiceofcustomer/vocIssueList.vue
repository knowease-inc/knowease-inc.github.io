<template>
  <v-container fluid class="d-flex justify-center mb-15 mx-0 px-0 px-sm-3">
    <v-card
      flat
      max-width="800"
      class="d-flex align-center ma-0 pa-0"
      color="rgba(0, 0, 0, 0)"
    >
      <v-card :width="cardWidth" flat variant="outlined">
        <v-data-table
          :headers="headers"
          :items="listedJsonIssuesInfo.slice(0, 9)"
          :height="listedJsonIssuesInfo.length !== 0 ? '193px' : '48px'"
          class="elevation-1"
          hide-default-footer
        >
          <template #item.number="{ item }">
            {{ item.number }}
          </template>
          <template #item.title="{ item }">
            <a :href="item.html_url" target="_blank">{{ item.title }}</a>
          </template>
        </v-data-table>
      </v-card>
    </v-card>
  </v-container>
</template>

<script setup>
const { width } = useDisplay()
const props = defineProps({
  issuesListResultFromParent: { type: Array, default: () => [] },
})

const listedJsonIssuesInfo = props.issuesListResultFromParent
const headers = [
  { title: '등록번호', value: 'number' },
  { title: '주제', value: 'title' },
]

const cardWidth = computed(() => {
  return width.value > 800 ? 800 : width.value
})
</script>
