<template>
  <v-container fluid>
    <v-row class="mt-0" v-if="contador">
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
                       height="150"/>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="auto" align-self="center">
                <span class="text-h2">{{listaA}}</span>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col>
                <v-btn class="success" block @click="agregarVoto('listaA')"><v-icon
                size="30px"
                >
                  mdi-plus-box-outline
                </v-icon></v-btn>
              </v-col>
              <v-col>
                <v-btn class="error" block @click="eliminarVoto('listaA')">
                  <v-icon
                      size="30px">
                    mdi-minus-box-outline
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
                       height="150"/>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="auto" align-self="center">
                <span class="text-h2">{{listaB}}</span>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col>
                <v-btn class="success" block @click="agregarVoto('listaB')"><v-icon
                    size="30px">
                  mdi-plus-box-outline
                </v-icon></v-btn>
              </v-col>
              <v-col>
                <v-btn class="error" block  @click="eliminarVoto('listaB')">
                  <v-icon
                  size="30px">
                    mdi-minus-box-outline
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-0"  v-if="contador">
      <v-col cols="6">
        <v-card>
          <v-card-title justify="center">
            <v-row justify="center">
              <v-col cols="auto" align-self="center">
                <h1>Blanco</h1>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-row justify="center">
              <v-col cols="auto" align-self="center">
                <span class="text-h2">{{blancos}}</span>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col>
                <v-btn class="success" block @click="agregarBlancos()"><v-icon
                    size="30px"
                >
                  mdi-plus-box-outline
                </v-icon></v-btn>
              </v-col>
              <v-col>
                <v-btn class="error" block @click="eliminarBlancos()">
                  <v-icon
                      size="30px">
                    mdi-minus-box-outline
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
                <h1>Impugnado</h1>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-row justify="center">
              <v-col cols="auto" align-self="center">
                <span class="text-h2">{{inpugnados}}</span>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col>
                <v-btn class="success" block @click="agregarInpugnados()"><v-icon
                    size="30px">
                  mdi-plus-box-outline
                </v-icon></v-btn>
              </v-col>
              <v-col>
                <v-btn class="error" block  @click="eliminarInpugnados()">
                  <v-icon
                      size="30px">
                    mdi-minus-box-outline
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn class="primary" block @click="visualizarResultados()">Finalizar - Calcular</v-btn>
      </v-col>
    </v-row>
    <v-row v-if="resultados">
      <v-col>
        <v-card elevation="5" height="300px">
          <v-card-title>
              <h2>Resultados Finales</h2>
          </v-card-title>
          <v-card-text>
              {{listaA}} -   {{listaB}} -   {{blancos}} -   {{inpugnados}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: "Conteo",
  data() {
    return {
      listaA: 0,
      listaB: 0,
      blancos: 0,
      inpugnados: 0,
      contador: true,
      resultados: false,
    }
  },
  methods: {
    agregarVoto(lista){
      if (lista === 'listaA') {
        console.log('hola')
        this.listaA =  this.listaA + 1
      } else {
        console.log('chau')
        this.listaB =  this.listaB + 1
      }
    },

    eliminarVoto(lista){
      if (lista === 'listaA') {
        this.listaA =  this.listaA - 1
      } else {
        this.listaB =  this.listaB -1
      }
    },

    agregarBlancos(){
        this.blancos =  this.blancos  + 1

    },

    eliminarBlancos(){
        this.blancos =  this.blancos - 1

    },

    agregarInpugnados(){
        this.inpugnados =  this.inpugnados + 1
    },

    eliminarInpugnados(){
        this.inpugnados =  this.inpugnados - 1
    },

    visualizarResultados() {
      this.resultados = !this.resultados;
      this.contador = !this.contador;
    }
  }
}
</script>

<style scoped>

</style>