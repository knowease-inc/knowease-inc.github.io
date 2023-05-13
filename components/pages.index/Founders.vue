<template>
  <div>
    <!-- ### Start: LinkedIn Embeding Code ### -->
    <component
      :is="'script'"
      type="text/javascript"
      src="https://platform.linkedin.com/badges/js/profile.js"
      async
      defer
    >
    </component>
    <!-- ### Start: Profiles ### -->
    <v-card flat class="mx-0">
      <v-row justify="center" class="mx-0 mb-5 pa-0" no-gutters>
        <span class="article-title font-weight-medium"> Team </span>
      </v-row>

      <v-row justify="center" class="ma-0 pa-0" no-gutters>
        <v-col
          v-for="(member, i) in members"
          :key="i"
          :class="i > 2 ? 'mt-4 pa-0' : 'mt-0 pa-0'"
          cols="12"
          md="6"
        >
          <v-card flat>
            <div
              class="d-flex justify-center"
              v-html="member.linkedinBadge"
            ></div>
          </v-card>
        </v-col>
      </v-row>

      <v-divider class="my-5" />
      <v-row justify="center" class="mx-0 mb-5 pa-0" no-gutters>
        <span class="article-title font-weight-medium"> Advisor </span>
      </v-row>

      <v-row justify="start" class="ma-0 pa-0" no-gutters>
        <v-col
          v-for="(advisor, i) in advisors"
          :key="i"
          :class="i > 2 ? 'mt-4 pa-0' : 'mt-0 pa-0'"
          cols="12"
          sm="4"
        >
          <v-card flat>
            <div
              class="d-flex justify-center"
              v-html="advisor.linkedinBadge"
            ></div>
          </v-card>
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
      name: '박성묵',
      linkedinBadge:
        '<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="ko_KR" data-type="vertical" data-theme="light" data-vanity="성묵-박-34a0a2135"><a class="LI-simple-link" href=\'https://kr.linkedin.com/in/%EC%84%B1%EB%AC%B5-%EB%B0%95-34a0a2135?trk=profile-badge\'>박성묵</a></div>',
    },
    {
      name: '이세영',
      linkedinBadge:
        '<div class="badge-base LI-profile-badge" data-locale="ko_KR" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="세영-이-00a55825a" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://kr.linkedin.com/in/%EC%84%B8%EC%98%81-%EC%9D%B4-00a55825a?trk=profile-badge">이세영</a></div>',
    },
  ]

  @Provide() advisors: Array<{
    name: string
    linkedinBadge: string
  }> = [
    {
      name: '신현철',
      linkedinBadge:
        '<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="ko_KR" data-type="vertical" data-theme="light" data-vanity="hyuncheol-shin-asdf123123"><a class="LI-simple-link" href=\'https://kr.linkedin.com/in/hyuncheol-shin-asdf123123?trk=profile-badge\'>Hyuncheol Shin, CFA</a></div>',
    },
  ]
}
export default PagesIndexFounders
</script>
