<template>
  <v-card
    :min-height="$vuetify.breakpoint.height - 180"
    flat
    class="ma-0 pa-0"
    color="rgba(0, 0, 0, 0)"
  >
    <VocIssueInputForm />
    <VocIssueList :issues-list-result-from-parent="issuesListResult" />
  </v-card>
</template>

<script>
import VocIssueInputForm from '~/components/pages.service.meaniit.voiceofcustomer/vocIssueInputForm.vue'
import VocIssueList from '~/components/pages.service.meaniit.voiceofcustomer/vocIssueList.vue'

export default {
  components: {
    VocIssueList,
    VocIssueInputForm,
  },
  async asyncData({ $axios }) {
    const issuesListResult = await $axios.$get(
      'https://api.github.com/repos/knowease-inc/knowease-inc.github.io/issues?state=open&labels=Communication:VoiceOfCustomer'
    )
    return { issuesListResult }
  },
  data() {
    return {
      issuesListResult: [],
    }
  },
}
</script>
