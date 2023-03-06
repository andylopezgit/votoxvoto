<template>
  <v-container fluid>
    <v-row class="mt-6" align-content="center" justify="center">
      <v-col cols="6">
        <v-card>
          <v-card-title>
            <v-row justify="center" class="mt-2">
              <v-col cols="auto">
                <h1>
                  Contactenos
                </h1>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
              <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="Nombre"
                  required
              ></v-text-field>

              <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Sindicato"
                  required
              ></v-text-field>
              <v-text-field
                  label="Telefono"
                  required
              ></v-text-field>
              <v-text-field
                  label="E-mail"
                  required
              ></v-text-field>

              <v-textarea
                  label="Mensaje"
                  required>

              </v-textarea>

              <v-btn
                  color="error"
                  class="mr-4"
                  @click="reset"
              >
                Borrar
              </v-btn>

              <v-btn
                  color="success"
                  @click="resetValidation"
              >
                Enviar
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: "ContactoView",
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
}}
</script>

<style scoped>

</style>