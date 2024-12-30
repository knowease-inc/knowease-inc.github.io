<template>
  <v-card flat tile class="mt-sm-8 mt-4">
    <v-container fluid class="pt-0">
      <v-row justify="center" align="center" no-gutters>
        <!-- Start: Recruit Infos -->
        <v-col
          v-for="(item, i) in parentItems"
          :key="i"
          cols="12"
          class="d-flex justify-center"
        >
          <v-card id="recruit_position" flat tile>
            <!-- Recruit Title -->
            <v-card-title
              id="position_name"
              class="text-h4 text-sm-h3 font-weight-black"
            >
              {{ item.title }}
            </v-card-title>

            <v-card-subtitle
              class="text-sm-h5 grey--text text--lighten-1 font-weight-black my-sm-1"
            >
              {{ item.description }}
            </v-card-subtitle>

            <!-- Detail Infos -->
            <div
              v-for="(content, j) in item.subtitle"
              id="detail_infos"
              :key="j"
              class="mb-10"
            >
              <v-card-subtitle class="text-h5 text-sm-h4 font-weight-bold">
                {{ content.title }}
              </v-card-subtitle>
              <v-card
                v-for="(detail, k) in content.contents"
                :key="k"
                flat
                tile
                class="px-sm-6 px-2"
              >
                <v-card-text class="text-body-1 text-sm-h5 font-weight-bold">
                  {{ detail.title }}
                </v-card-text>
                <ul class="text-body-2 text-sm-body-1 px-12">
                  <li
                    v-for="(text, l) in detail.content"
                    :key="l"
                    class="pt-0 pb-2"
                  >
                    {{ text }}
                  </li>
                </ul>
              </v-card>
            </div>

            <!-- Register button -->
            <v-card-actions id="button_line" class="d-flex justify-center">
              <v-btn
                id="button_to_register_form"
                :href="item.registerBtn.url"
                target="_blank"
                :color="item.registerBtn.color"
                size="x-large"
                elevation="0"
                class="font-weight-black"
              >
                {{ item.registerBtn.name }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- End: Recruit Infos -->
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
const props = defineProps({
  parentItems: {
    type: Array,
    required: true,
    default: () => [
      {
        title: '',
        description: '',
        subtitle: [
          {
            title: '',
            contents: [
              {
                title: '',
                content: [''],
              },
            ],
          },
        ],
        registerBtn: {
          url: '',
          name: '',
          color: '',
        },
      },
    ],
  },
})
</script>
