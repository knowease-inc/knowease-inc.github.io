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

    <v-row class="ma-0 pa-0" justify-sm="start" justify="center" no-gutters>
      <v-col
        v-for="(
          { name, headline, avatar, companyAndSchoolInfo, link }, i
        ) in members"
        :key="i"
        cols="12"
        sm="5"
        md="4"
        lg="3"
        class="mt-0 pa-0"
      >
        <v-card
          :height="smAndUp ? '280' : '200'"
          :width="smAndUp ? '220' : '250'"
          class="overflow-hidden rounded-xl position-relative mb-5"
          variant="flat"
          elevation="2"
        >
          <div v-if="smAndUp" class="profile-top">
            <div class="mt-10 pb-4">
              <v-avatar size="60">
                <img :src="avatar" :alt="name" class="profile-img" />
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
          <div v-if="smAndUp" class="profile-bottom">
            <v-card-text
              class="text-center mt-4 text-body-2 gray--text line-change"
            >
              {{ companyAndSchoolInfo }}
            </v-card-text>

            <v-btn
              rounded
              variant="outlined"
              position="absolute"
              size="small"
              color="#2979ff"
              :href="link"
              style="bottom: 10%"
              :disabled="!link"
            >
              View profile
            </v-btn>
          </div>

          <div v-if="xs" style="height: 100%" class="profile-left mt-2">
            <div>
              <v-avatar size="70">
                <v-img :src="avatar" :alt="name" />
              </v-avatar>
            </div>
            <div class="text-body-2 font-weight-bold my-1">
              {{ name }}
            </div>
            <div
              class="text-body-2 profile-headline-color pr-0 pl-4 line-change-xs text-center"
              style="line-height: 1.2"
            >
              {{ headline }}
            </div>
          </div>
          <div v-if="xs" style="height: 60%" class="profile-right mt-8">
            <v-card-text
              class="text-right text-body-2 gray--text line-change-xs pr-0 mr-n6"
              style="line-height: 1.6"
            >
              {{ companyAndSchoolInfo }}
            </v-card-text>

            <v-btn
              rounded
              variant="outlined"
              position="absolute"
              size="x-small"
              color="#2979ff"
              :href="link"
              style="bottom: 0%; right: 10%"
              :disabled="!link"
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
          :height="smAndUp ? '150' : '200'"
          :width="smAndUp ? '450' : '250'"
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
              variant="outlined"
              position="absolute"
              size="small"
              color="#2979ff"
              :href="link"
            >
              View profile
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col
        v-if="smAndUp"
        style="height: 150px; overflow-y: hidden"
        class="rounded-xl"
      >
        <v-img src="/img/meeting_img.png" height="250" width="460" />
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
  width: 180px;
  border-radius: 30% / 70%;

  position: absolute;
  top: -8px;
  left: -10%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.profile-right {
  height: 200px;
  width: 220px;
  position: absolute;
  right: -0.8rem;

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
  width: 8rem;
  word-break: keep-all;
}

.profile-img {
  min-width: 50px;
  min-height: 50px;
}
</style>
