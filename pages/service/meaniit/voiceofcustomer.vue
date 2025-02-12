<template>
  <v-card
    :min-height="height - 180"
    flat
    class="ma-0 pa-0"
    color="rgba(0, 0, 0, 0)"
  >
    <VocIssueInputForm />
  </v-card>
</template>

<script setup>
import VocIssueInputForm from '~/components/pages.service.meaniit.voiceofcustomer/vocIssueInputForm.vue'

const { height } = useDisplay()
</script>
