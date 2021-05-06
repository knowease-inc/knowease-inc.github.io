<template>
  <v-card class="ma-0 pa-0" flat>
    <v-card-title class="d-flex justify-center article-title pb-0 pt-4">
      {{ upperTitle }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    upperTitle: { type: String, default: null },
  },
  data() {
    return {}
  },
}
</script>
