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
    <v-row class="mx-0 mb-3 pa-0" no-gutters>
      <span class="text-body-1 font-weight-medium"> Team </span>
    </v-row>

    <v-row
      class="ma-0 pa-0"
      justify-sm="space-between"
      justify="center"
      no-gutters
    >
      <v-col
        v-for="(
          { name, headline, avatar, companyAndSchoolInfo, link }, i
        ) in members"
        :key="i"
        cols="auto"
        class="mt-0 pa-0"
      >
        <v-card
          :height="$vuetify.breakpoint.smAndUp ? '280' : '200'"
          :width="$vuetify.breakpoint.smAndUp ? '220' : '420'"
          class="overflow-hidden rounded-xl position-relative mb-5"
          flat
          elevation="2"
        >
          <div v-if="$vuetify.breakpoint.smAndUp" class="profile-top">
            <div class="mt-10 pb-4">
              <v-avatar size="60">
                <img :src="avatar" :alt="name" />
              </v-avatar>
            </div>
            <div class="text-body-2 font-weight-bold">{{ name }}</div>
            <div
              class="text-caption profile-headline-color line-change text-center"
              style="line-height: 1.2"
            >
              {{ headline }}
            </div>
          </div>
          <div v-if="$vuetify.breakpoint.smAndUp" class="profile-bottom">
            <v-card-text
              class="text-center pt-0 mt-n3 text-body-2 gray--text line-change"
            >
              {{ companyAndSchoolInfo }}
            </v-card-text>

            <v-btn
              rounded
              outlined
              absolute
              small
              color="#2979ff"
              :href="link"
              style="bottom: 10%"
            >
              View profile
            </v-btn>
          </div>

          <div
            v-if="$vuetify.breakpoint.xsOnly"
            style="height: 100%"
            class="profile-left pl-2 mt-2"
          >
            <div class="ml-2">
              <v-avatar size="70">
                <img :src="avatar" :alt="name" />
              </v-avatar>
            </div>
            <div class="text-body-1 font-weight-bold pl-6 my-1">{{ name }}</div>
            <div
              class="text-body-2 profile-headline-color pr-0 ml-9 pl-9 line-chang-xs text-left"
              style="line-height: 1.2"
            >
              {{ headline }}
            </div>
          </div>
          <div
            v-if="$vuetify.breakpoint.xsOnly"
            style="height: 90%"
            class="profile-right mt-n3"
          >
            <v-card-text
              class="text-right pt-2 text-body-2 gray--text line-change-xs pr-0 mr-n9"
              style="line-height: 1.6"
            >
              {{ companyAndSchoolInfo }}
            </v-card-text>

            <v-btn
              rounded
              outlined
              absolute
              small
              color="#2979ff"
              :href="link"
              style="bottom: 0%; right: 10%"
            >
              View profile
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mx-0 mb-3 pa-0 mt-9" no-gutters>
      <span class="text-body-1 font-weight-medium"> Advisor </span>
    </v-row>

    <v-row class="ma-0 pa-0" no-gutters>
      <v-col
        v-for="(
          { name, headline, avatar, companyAndSchoolInfo, link }, i
        ) in advisors"
        :key="i"
        class="mt-0 pa-0 mr-6"
      >
        <v-card
          class="d-flex align-start rounded-xl px-sm-16 px-5 py-sm-6 py-8"
          :height="$vuetify.breakpoint.smAndUp ? '150' : '200'"
          width="450"
        >
          <div>
            <v-avatar size="60">
              <img :src="avatar" :alt="name" />
            </v-avatar>
          </div>
          <div class="flex flex-column ml-3">
            <div class="text-body-2 font-weight-bold">{{ name }}</div>
            <div class="text-caption advisor-headline-color mb-2">
              {{ headline }}
            </div>
            <div class="text-body-2 gray--text mb-2">
              {{ companyAndSchoolInfo }}
            </div>

            <v-btn
              rounded
              outlined
              :small="$vuetify.breakpoint.smAndUp"
              color="#2979ff"
              :href="link"
            >
              View profile
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col
        v-if="$vuetify.breakpoint.smAndUp"
        style="height: 150px; overflow-y: hidden"
        class="rounded-xl"
      >
        <v-img src="/img/meeting_img.png" height="250" width="460" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'

@Component({})
class PagesIndexFounders extends Vue {
  @Provide() members: Array<{
    name: string
    headline: string
    avatar: string
    companyAndSchoolInfo: string
    link: string
  }> = [
    {
      name: 'SUNGHYUN KIM',
      avatar:
        'https://media.licdn.com/dms/image/D4D03AQGdlvHZJ2mJ5w/profile-displayphoto-shrink_200_200/0/1698296734296?e=2147483647&v=beta&t=6ALNzwS5oEl41WyQ-5JEKBzLT9HCOsSQR5cmzU24feg',
      headline: 'Data Architect | Entrepreneur',
      companyAndSchoolInfo:
        'Treasure Data | Hankuk University of Foreign Studies',
      link:
        'https://jp.linkedin.com/in/tooget/ko?trk=public-profile-badge-profile-badge-view-profile-cta',
    },
    {
      name: 'Yoon Soo Choi',
      avatar:
        'https://media.licdn.com/dms/image/C5603AQHSSZa5p-U3-A/profile-displayphoto-shrink_200_200/0/1608736555680?e=2147483647&v=beta&t=cGoqWOKxZb4PD9fOzQRYfrn0SeeC8aTAVLYUFAQrr_Y',
      headline: 'Financial Data Engineering & Analytics',
      companyAndSchoolInfo: 'Kyobo Securities | 한국외국어대학교',
      link:
        'https://kr.linkedin.com/in/ys0101?trk=public-profile-badge-profile-badge-view-profile-cta',
    },
    {
      name: '박성묵',
      avatar:
        'https://media.licdn.com/dms/image/D5603AQHeaxjIDJz5kQ/profile-displayphoto-shrink_200_200/0/1666582082157?e=2147483647&v=beta&t=8QqaIh8F0Mp6KkaJ7VWXReu6Yax6BjIuE0p-D4k0DfA',
      headline: 'GET-A Inc CEO & Founder / 개발',
      companyAndSchoolInfo: "(주)게타 스타트업 경영 및 '미닛' 서비스 개발 전략",
      link:
        'https://kr.linkedin.com/in/%EC%84%B1%EB%AC%B5-%EB%B0%95-34a0a2135?trk=public-profile-badge-profile-badge-view-profile-cta',
    },
    {
      name: '이세영',
      avatar: 'https://static.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry',
      headline: 'GET-A / 프론트엔드',
      companyAndSchoolInfo: "'미닛' 서비스 개발 전략",
      link:
        'https://kr.linkedin.com/in/%EC%84%B8%EC%98%81-%EC%9D%B4-00a55825a?trk=profile-badge',
    },
  ]

  @Provide() advisors: Array<{
    name: string
    headline: string
    avatar: string
    companyAndSchoolInfo: string
    link: string
  }> = [
    {
      name: 'Hyuncheol Shin',
      avatar: 'https://static.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry',
      headline: 'Derivatives Quant / Algorithmic Trader',
      companyAndSchoolInfo: "'미닛' 서비스 개발 자문",
      link:
        'https://www.linkedin.com/in/hyuncheol-shin-asdf123123/?trk=public-profile-badge-profile-badge-view-profile-cta&originalSubdomain=kr',
    },
  ]
}
export default PagesIndexFounders
</script>

<style>
.v-btn__content {
  text-transform: none;
}

.position-relative {
  position: relative;
}

.profile-top {
  background-color: #2979ff;
  color: white;
  height: 200px;
  width: 300px;
  border-radius: 50%;

  position: absolute;
  top: -16%;
  left: -18%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.profile-bottom {
  height: 140px;
  width: 220px;
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.profile-left {
  background-color: #2979ff;
  color: white;
  height: 220px;
  width: 230px;
  border-radius: 30% / 70%;

  position: absolute;
  top: -8px;
  left: -20%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.profile-right {
  height: 200px;
  width: 220px;
  position: absolute;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: right;
}

.advisor-headline-color {
  color: #a6a6a6;
}

.profile-headline-color {
  color: #accbff;
}

.line-change {
  width: 200px;
  word-break: keep-all;
}

.line-change-xs {
  width: 130px;
  word-break: keep-all;
}
</style>
