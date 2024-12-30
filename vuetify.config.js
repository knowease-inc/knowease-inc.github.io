import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'
import colors from 'vuetify/util/colors'

const colorsPalettes = {
  primary: {
    default: '#3746fb',
    darken1: '#0a2356',
    darken2: '#2533e4',
    lighten1: '#eef4fe',
    lighten2: '#fbfdfe',
    lighten3: '#cddffd',
    lighten4: '#c5d9fc',
    lighten5: '#a9bcf9',
    lighten6: '#dbe5f6',
    lighten7: '#f1f6ff',
    onPrimary1: '#a0afcc',
  },
  secondary: {
    default: '#00b82c',
    lighten1: '#effff3',
    lighten2: '#0dd33c',
    lighten3: '#0fbf3e',
    lighten4: '#f0f4f1',
  },
  accent: '#f83d3b',
  shades: {
    variant1: '#3844d5',
    variant2: '#5a5d7c',
    variant3: '#acbebe',
    variant4: '#6a6b72',
    variant5: '#dbdcdd',
    variant6: '#999aa3', // 흐린 회색: 로그아웃 버튼
    variant7: '#5a5d7c',
    variant8: '#bec6d4',
    variant9: '#e5e8e9',
    variant10: '#45486f',
    variant11: '#8387b5',
  },
}

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        background: colors.grey.lighten5,
        primary: '#313de3',
        secondary: '#c5dbff',
        barinfo: colors.shades.white,
        ranker: colors.blue.accent3,
        rankerlower: colors.grey.darken2,
        info: colors.grey.darken2,
        unactivated: colors.grey.darken1,
        success: colors.green.base,
        warning: colors.deepOrange.accent4,
        error: colors.red.base,
        design: {
          ...colorsPalettes,
        },
      },
      dark: {
        dark: true,
        background: 'red',
        primary: '#bb86fc',
        secondary: '#03dac6',
        barinfo: colors.grey.darken3,
        ranker: colors.blue.darken3,
        rankerlower: colors.grey.lighten1,
        info: colors.grey.lighten1,
        unactivated: colors.grey.lighten2,
        success: colors.green.accent3,
        warning: colors.amber.darken3,
        error: colors.red.accent3,
        design: {
          ...colorsPalettes,
        },
      },
    },
  },
})
