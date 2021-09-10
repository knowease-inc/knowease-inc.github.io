<template>
  <v-simple-table>
    <thead>
      <tr>
        <th>Issue#</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in listedJsonIssuesInfo" :key="item.id">
        <td>{{ item.number }}</td>
        <td>
          <a :href="item.html_url" target="_blank">{{ item.title }}</a>
        </td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
export default {
  props: {
    issuesListResultFromParent: { type: Array, default: () => [] },
  },
  data() {
    return {
      listedJsonIssuesInfo: this.issuesListResultFromParent
    }
  }
}
</script>
