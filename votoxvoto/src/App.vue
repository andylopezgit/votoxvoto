<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-icon>mdi-cellphone</v-icon>

        <h2>VotoxVoto</h2>
      </div>

      <v-spacer></v-spacer>
      <nav>
        <span class="me-4">
          <router-link to="/" tag="button">Inicio</router-link>
        </span>
        <span class="me-4">
          <router-link to="/about" tag="button">Nosotros</router-link>
        </span>
        <span  class="me-4">
          <router-link to="/eleccion" tag="button">Elecciones</router-link>
        </span>
        <span  class="me-4">
          <router-link to="/conteo" tag="button">Votacion</router-link>
        </span>
        <span  class="me-4">
          <router-link to="/contacto" tag="button">Contacto</router-link>
        </span>
        <span  class="me-4">
          <v-icon
          size="30px"
          >
            mdi-account-circle
          </v-icon>
        </span>
      </nav>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
