<template>
  <v-card
    flat
    :min-height="$vuetify.breakpoint.height - 180"
    class="d-flex justify-center align-center ma-8 pa-8"
  >
    <v-card flat>
      <v-card-title class="d-flex justify-center"> 쉬운지식 LLC </v-card-title>
      <v-card-actions class="d-flex justify-center">
        <v-btn text class="px-0">
          <v-img
            src="/img/EASYXPLAIN_LOGO.png"
            alt="EASYXPLAIN"
            contain
            height="46"
            width="70"
          ></v-img>
        </v-btn>
        <v-btn text to="/introduce">소개</v-btn>
        <v-btn text to="/regulations">규정</v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script>
export default {
  components: {},
}
</script>
