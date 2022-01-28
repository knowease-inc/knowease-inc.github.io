<template>
  <v-container fluid class="d-flex justify-center mb-15 mx-0 px-0 px-sm-3">
    <v-card
      flat
      max-width="800"
      class="d-flex align-center ma-0 pa-0"
      color="rgba(0, 0, 0, 0)"
    >
      <v-card :width="cardWidth" flat outlined>
        <v-simple-table
          fixed-header
          :height="listedJsonIssuesInfo.length !== 0 ? 193 : 48"
        >
          <thead>
            <tr>
              <th>등록번호</th>
              <th>주제</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in listedJsonIssuesInfo.slice(0, 9)" :key="item.id">
              <td>{{ item.number }}</td>
              <td>
                <a :href="item.html_url" target="_blank">{{ item.title }}</a>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    issuesListResultFromParent: { type: Array, default: () => [] },
  },
  data() {
    return {
      listedJsonIssuesInfo: this.issuesListResultFromParent,
    }
  },
  computed: {
    cardWidth() {
      const width =
        this.$vuetify.breakpoint.width > 800
          ? 800
          : this.$vuetify.breakpoint.width
      return width
    },
  },
}
</script>
