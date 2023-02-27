<template>
  <v-container fluid>

    <v-row justify="first" class="mt-4">
      <v-col cols="4">
        <v-card>
          <v-card-title>
            <h3>Configuracion de Eleccion a Fiscalizar</h3>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-select
                  label="Seleccionar Eleccion"
                  v-model="eleccionSelected"
                  :items="$store.state.elecciones"
                  item-text="sindicato"
                  chips
                  item-value="id"
              >
                <template #selection="{ item }">
                  <v-chip color="secondary">{{item.sindicato}}</v-chip>
                </template>
              </v-select>
              <v-select
                  color="blue"
                  label="Seleccionar Listas a competir"
                  :items="$store.state.elecciones[0].listas"
                  item-text="lista"
                  item-value="id"
                  chips
                  multiple
              >
                <template #selection="{ item }">
                  <v-chip color="secondary">{{item.lista}}</v-chip>
                </template>
              </v-select>
              <v-select
                  label="Seleccionar Fecha"
                  v-model="eleccionSelected"
                  :items="$store.state.elecciones[0].fecha"
                  item-text="fecha"
                  chips
                  item-value="id"
              >
                <template #selection="{ item }">
                  <v-chip color="secondary">{{item.fecha}}</v-chip>
                </template>
              </v-select>
              <v-select
                  label="Seleccionar Fiscales de Mesa"
                  v-model="eleccionSelected"
                  :items="$store.state.elecciones[0].fiscales"
                  item-text="nombre"
                  item-value="id"
                  chips
                  multiple
              >
                <template #selection="{ item }">
                  <v-chip color="secondary">{{item.nombre}}</v-chip>
                </template>
              </v-select>
              <v-select
                  label="Seleccionar Supervisores de Fiscales"
                  v-model="eleccionSelected"
                  :items="$store.state.elecciones[0].supervisores"
                  item-text="nombre"
                  item-value="id"
                  chips
                  multiple
              >
                <template #selection="{ item }">
                  <v-chip color="secondary">{{item.nombre}}</v-chip>
                </template>
              </v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn block class="primary">siguiente</v-btn>
          </v-card-actions>
        </v-card>


      </v-col>
      <v-col cols="8">
        <v-img :src="require('../assets/votacion1.png')" alt="logo-votacion"
               contain
               height="400"/>
      </v-col>
    </v-row>
  </v-container>

  </template>

<script>
export default {
  name: "eleccionView.vue"
}
</script>

<style scoped>

</style>