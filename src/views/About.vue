<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="10" class="mt-10">
          <v-card height="100%">
            <v-card-title>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                    <v-card height="100%">
                      <v-card-text align="center">
                        <p class="blue--text text-h4" align="center">
                          Nosotros...
                        </p>
                        <p class=" text--primary text-h4" align="justify">
                          Somos una empresa de la ciudad de Rosario, ofrecemos un producto único que brinda la posibilidad de aumentar
                          la transparencia y celeridad del conteo de votos, tambien  la asignación de fiscales y el monitoreo durante la elección.
                        </p>
                        <p class="blue--text text-h4" align="center">
                          Creamos democracia
                        </p>
                      </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="6">
                  <v-img :src="require('../assets/democracia.jpg')" alt="logo-votacion"
                         contain
                         height="400"/>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
