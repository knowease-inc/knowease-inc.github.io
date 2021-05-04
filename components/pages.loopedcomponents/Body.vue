<template>
  <v-card flat outlined class="pa-6 mx-0 mt-2 mx-sm-4 mb-8">
    <p class="article-body ma-0" v-html="body"></p>
  </v-card>
</template>

<script>
export default {
  props: {
    upperBody: { type: String, default: null },
  },
  data() {
    return {
      body: this.upperBody,
    }
  },
}
</script>
