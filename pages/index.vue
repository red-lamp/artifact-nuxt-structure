<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-btn
        color="primary"
        nuxt
        to="/inspire"
      >
        Continue
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  async asyncData({ $services }) {
    const userResult = await $services.user.searchUsers();
    console.log('xxx', userResult.users, $services.user.getUsersResult());
  }
}
</script>
