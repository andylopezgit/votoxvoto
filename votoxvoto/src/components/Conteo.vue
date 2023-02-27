<template>
  <v-container fluid>
    <v-row class="mt-2">
      <v-col cols="6">
        <v-card>
          <v-card-title justify="center">
            <v-row justify="center">
              <v-col cols="auto" align-self="center">
                <h1>Lista A</h1>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-row justify="center">
              <v-col cols="auto" align-self="center">
                <v-img :src="require('../assets/voto1.jpg')" alt="logo-votacion"
                       contain
                       max-width="700px"
                       height="300"/>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="auto" align-self="center">
                <span class="text-h2">0</span>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col>
                <v-btn class="success" block><v-icon>
                  mdi-plus
                </v-icon></v-btn>
              </v-col>
              <v-col>
                <v-btn class="error" block>
                  <v-icon>
                    mdi-minus
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>
            <v-row justify="center">
              <v-col cols="auto" align-self="center">
                <h1>Lista B</h1>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-row justify="center">
              <v-col cols="auto" align-self="center">
                <v-img :src="require('../assets/voto.jpg')" alt="logo-votacion"
                       contain
                       max-width="700px"
                       height="300"/>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="auto" align-self="center">
                <span class="text-h2">0</span>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col>
                <v-btn class="success" block><v-icon>
                  mdi-plus
                </v-icon></v-btn>
              </v-col>
              <v-col>
                <v-btn class="error" block>
                  <v-icon>
                    mdi-minus
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: "Conteo"
}
</script>

<style scoped>

</style>