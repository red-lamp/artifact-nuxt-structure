<template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>

export default {
  async asyncData({ $services, $axios }) {
    const users = $services.user.getUsersResult().users;
    if (!users) {
      return;
    }
    users.forEach(user => {
      console.log('yyy', user.first_name);
    });
  }
}
</script>