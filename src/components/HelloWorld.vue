<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12 mt-5">
        <v-img
          :src="require('../assets/logo-vxv.jpg')"
          class="my-3"
          contain
          height="260"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-4 font-weight-bold mb-3 blue--text">VotoxVoto</h1>

        <p class="display-1 font-weight-regular">
          Creando Democracia
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({

  }),
};
</script>
