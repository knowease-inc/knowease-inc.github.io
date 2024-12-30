<template>
  <v-card
    :min-height="height - 180"
    flat
    class="ma-0 pa-0"
    color="rgba(0, 0, 0, 0)"
  >
    <VocIssueInputForm />
    <VocIssueList :issues-list-result-from-parent="issuesListResult" />
  </v-card>
</template>

<script setup>
import VocIssueInputForm from '~/components/pages.service.meaniit.voiceofcustomer/vocIssueInputForm.vue'
import VocIssueList from '~/components/pages.service.meaniit.voiceofcustomer/vocIssueList.vue'

const { height } = useDisplay()

// 이슈 목록 가져오기
const { data: issuesListResult, error } = await useFetch(
  'https://api.github.com/repos/knowease-inc/knowease-inc.github.io/issues',
  {
    params: {
      state: 'open',
      labels: 'Communication:VoiceOfCustomer',
    },
  },
)

if (error.value) {
  console.error('이슈 목록 가져오기 실패:', error.value)
}
</script>
