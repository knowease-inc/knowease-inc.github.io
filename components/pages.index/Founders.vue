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
    <v-row justify="center" class="mx-0 mb-sm-3 pa-0" no-gutters>
      <v-col
        cols="10"
        class="font-weight-medium text-grey"
        style="font-size: 1.4rem"
      >
        Team
      </v-col>
    </v-row>

    <v-row class="ma-0 pa-0">
      <v-col
        v-for="(
          { name, headline, avatar, companyAndSchoolInfo, link }, i
        ) in members"
        :key="i"
        cols="12"
        sm="5"
        offset-sm="1"
        class="ga-4"
      >
        <v-card
          class="d-flex justify-space-evenly align-center rounded-xl px-sm-8 px-4"
          :height="smAndUp ? '220' : '230'"
          :width="smAndUp ? '420' : '270'"
        >
          <v-avatar :size="smAndUp ? '140' : '100'">
            <v-img :src="avatar" :alt="name" />
          </v-avatar>

          <div class="flex flex-column ml-3 mt-sm-n8">
            <div class="text-body-1 font-weight-bold">
              {{ name }}
            </div>
            <div class="headline-color mb-2">
              {{ headline }}
            </div>
            <div class="text-sm--body-1 text-body-2 gray--text mb-sm-2">
              {{ companyAndSchoolInfo }}
            </div>

            <v-card-actions class="pa-0">
              <v-btn
                rounded
                variant="outlined"
                position="absolute"
                size="small"
                color="#3746fb"
                :href="link"
                class="mt-sm-4 mt-0"
              >
                View profile
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" class="mx-0 my-4 pt-8 pa-0" no-gutters>
      <v-col
        cols="10"
        class="font-weight-medium text-grey"
        style="font-size: 1.4rem"
      >
        Advisor
      </v-col>
    </v-row>

    <v-row justify="space-between" class="ma-0 pa-0">
      <v-col
        v-for="(
          { name, headline, avatar, companyAndSchoolInfo, link }, i
        ) in advisors"
        :key="i"
        cols="12"
        sm="5"
        offset-sm="1"
        class="ga-4"
      >
        <v-card
          class="d-flex justify-space-evenly align-center rounded-xl px-sm-8 px-4"
          :height="smAndUp ? '220' : '230'"
          :width="smAndUp ? '420' : '270'"
        >
          <v-avatar :size="smAndUp ? '140' : '100'">
            <v-img :src="avatar" :alt="name" />
          </v-avatar>

          <div class="flex flex-column ml-3">
            <div class="text-body-1 font-weight-bold">
              {{ name }}
            </div>
            <div class="headline-color mb-2">
              {{ headline }}
            </div>
            <div class="text-sm--body-1 text-body-2 gray--text mb-sm-2">
              {{ companyAndSchoolInfo }}
            </div>

            <v-card-actions class="pa-0">
              <v-btn
                rounded
                variant="outlined"
                position="absolute"
                size="small"
                color="#3746fb"
                :href="link"
                class="mt-sm-4 mt-0"
              >
                View profile
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>

      <v-col v-if="smAndUp" sm="5">
        <v-card
          class="pa-0"
          :height="smAndUp ? '220' : '200'"
          :width="smAndUp ? '420' : '250'"
        >
          <v-img src="/img/meeting_img.png" cover class="rounded-xl" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const { xs, smAndUp } = useDisplay()

const members = [
  {
    name: 'SUNGHYUN KIM',
    avatar:
      'https://media.licdn.com/dms/image/D4D03AQGdlvHZJ2mJ5w/profile-displayphoto-shrink_200_200/0/1698296734296?e=2147483647&v=beta&t=6ALNzwS5oEl41WyQ-5JEKBzLT9HCOsSQR5cmzU24feg',
    headline: 'Data Architect | Entrepreneur',
    companyAndSchoolInfo:
      'Treasure Data | Hankuk University of Foreign Studies',
    link: 'https://jp.linkedin.com/in/tooget/ko?trk=public-profile-badge-profile-badge-view-profile-cta',
  },
  {
    name: 'Yoon Soo Choi',
    avatar:
      'https://media.licdn.com/dms/image/C5603AQHSSZa5p-U3-A/profile-displayphoto-shrink_200_200/0/1608736555680?e=2147483647&v=beta&t=cGoqWOKxZb4PD9fOzQRYfrn0SeeC8aTAVLYUFAQrr_Y',
    headline: 'Financial Data Engineering & Analytics',
    companyAndSchoolInfo: 'Kyobo Securities | 한국외국어대학교',
    link: 'https://kr.linkedin.com/in/ys0101?trk=public-profile-badge-profile-badge-view-profile-cta',
  },
  {
    name: '박성묵',
    avatar:
      'https://media.licdn.com/dms/image/D5603AQHeaxjIDJz5kQ/profile-displayphoto-shrink_200_200/0/1666582082157?e=2147483647&v=beta&t=8QqaIh8F0Mp6KkaJ7VWXReu6Yax6BjIuE0p-D4k0DfA',
    headline: 'GET-A Inc CEO & Founder / 개발',
    companyAndSchoolInfo: "(주)게타 스타트업 경영 및 '미닛' 서비스 개발 전략",
    link: 'https://kr.linkedin.com/in/%EC%84%B1%EB%AC%B5-%EB%B0%95-34a0a2135?trk=public-profile-badge-profile-badge-view-profile-cta',
  },
  {
    name: '구본승',
    avatar: 'https://static.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry',
    headline: 'GET-A Investor / 전략',
    companyAndSchoolInfo: "(주)게타 '미닛' 서비스 전략 설정 및 시장 조사",
    link: '',
  },
  {
    name: '이세영',
    avatar: '/img/linkedin/linkedin_seyoung.jpeg',
    headline: 'GET-A / 프론트엔드',
    companyAndSchoolInfo: " '미닛' 서비스 개발 전략",
    link: 'https://kr.linkedin.com/in/%EC%84%B8%EC%98%81-%EC%9D%B4-00a55825a?trk=profile-badge',
  },
  {
    name: '오지나',
    avatar: '/img/linkedin/linkedin_jina.jpeg',
    headline: 'GET-A / 백엔드',
    companyAndSchoolInfo: " '미닛' 서비스 개발 전략",
    link: 'https://kr.linkedin.com/in/jina5?trk=profile-badge',
  },
]

const advisors = [
  {
    name: 'Hyuncheol Shin',
    avatar: 'https://static.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry',
    headline: 'Derivatives Quant / Algorithmic Trader',
    companyAndSchoolInfo: "'미닛' 서비스 개발 자문",
    link: 'https://www.linkedin.com/in/hyuncheol-shin-asdf123123/?trk=public-profile-badge-profile-badge-view-profile-cta&originalSubdomain=kr',
  },
]
</script>

<style>
.v-btn__content {
  text-transform: none;
}

.headline-color {
  color: #a6a6a6;
}

.line-change {
  width: 200px;
  word-break: keep-all;
}

.line-change-xs {
  width: 8rem;
  word-break: keep-all;
}

.profile-img {
  min-width: 50px;
  min-height: 50px;
}
</style>
