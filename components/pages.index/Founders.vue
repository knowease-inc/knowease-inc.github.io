<template>
  <div>
    <!-- ### Start: LinkedIn Embeding Code ### -->
    <script
      type="text/javascript"
      src="https://platform.linkedin.com/badges/js/profile.js"
      async
      defer
    ></script>
    <!-- ### Start: Profiles ### -->
    <v-card flat class="mx-0">
      <v-row justify="center" class="ma-0 pa-0">
        <v-col
          v-for="(member, i) in members"
          :key="i"
          :class="i > 1 ? 'mt-4 pa-0' : 'mt-0 pa-0'"
          cols="12"
          sm="6"
        >
          <div
            class="d-flex justify-center"
            v-html="member.linkedinBadge"
          ></div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'

@Component({})
class PagesIndexFounders extends Vue {
  @Provide() members: Array<{
    name: string
    linkedinBadge: string
  }> = [
    {
      name: '박성묵',
      linkedinBadge:
        '<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="ko_KR" data-type="vertical" data-theme="light" data-vanity="성묵-박-34a0a2135"><a class="LI-simple-link" href=\'https://kr.linkedin.com/in/%EC%84%B1%EB%AC%B5-%EB%B0%95-34a0a2135?trk=profile-badge\'>박성묵</a></div>',
    },
    {
      name: '김성현',
      linkedinBadge:
        '<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="ko_KR" data-type="vertical" data-theme="light" data-vanity="tooget"><a class="LI-simple-link" href=\'https://jp.linkedin.com/in/tooget?trk=profile-badge\'>SUNGHYUN K.</a></div>',
    },
    {
      name: '최윤수',
      linkedinBadge:
        '<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="ko_KR" data-type="vertical" data-theme="light" data-vanity="ys0101"><a class="LI-simple-link" href=\'https://kr.linkedin.com/in/ys0101?trk=profile-badge\'>Yoon Su Choi</a></div>',
    },
    {
      name: '신현철',
      linkedinBadge:
        '<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="ko_KR" data-type="vertical" data-theme="light" data-vanity="hyuncheol-shin-asdf123123"><a class="LI-simple-link" href=\'https://kr.linkedin.com/in/hyuncheol-shin-asdf123123?trk=profile-badge\'>Hyuncheol Shin, CFA</a></div>',
    },
  ]
}
export default PagesIndexFounders
</script>
