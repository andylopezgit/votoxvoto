import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    elecciones: [
      {id: 1, sindicato: "Camioneros Santa Fe", listas: [
          {id: 1, lista: "Moyano"},
          {id: 2, lista: "Perez"}
        ], fecha: {id: 1, fecha: '06/12/2023'},
        fiscales: [
          {id: 1, nombre: "Mariano Sanchez"},
          {id: 2, nombre: "Leandro Costa"},
          {id: 3, nombre: "German Lopez"},
          {id: 4, nombre: "Damian Biarnes"},
        ],
        supervisores: [
          {id: 1, nombre: "Andres Hazz"},
          {id: 2, nombre: "Marias Paez"},
          {id: 3, nombre: "Jesus Calore"},
          {id: 4, nombre: "Raul Guitierrez"},
        ],

      },
      {id: 2, sindicato: "Municipales Rosario", listas: [
          {id: 1, lista: "Ratner"},
          {id: 2, lista: "Gomez"}
        ], fecha: {id: 1, fecha: '06/12/2023'},
        fiscales: [
          {id: 1, nombre: "Mariano Sanchez"},
          {id: 2, nombre: "Leandro Costa"},
          {id: 3, nombre: "German Lopez"},
          {id: 4, nombre: "Damian Biarnes"},
        ],
        supervisores: [
          {id: 1, nombre: "Andres Hazz"},
          {id: 2, nombre: "Marias Paez"},
          {id: 3, nombre: "Jesus Calore"},
          {id: 4, nombre: "Raul Guitierrez"},
        ],
      },
      {id: 3, sindicato: "Medicos Rosario", listas: [
          {id: 1, lista: "Guznan"},
          {id: 2, lista: "Danes"}
        ], fecha: {id: 1, fecha: '06/12/2023'},
        fiscales: [
          {id: 1, nombre: "Mariano Sanchez"},
          {id: 2, nombre: "Leandro Costa"},
          {id: 3, nombre: "German Lopez"},
          {id: 4, nombre: "Damian Biarnes"},
        ],
        supervisores: [
          {id: 1, nombre: "Andres Hazz"},
          {id: 2, nombre: "Marias Paez"},
          {id: 3, nombre: "Jesus Calore"},
          {id: 4, nombre: "Raul Guitierrez"},
        ],
      },
    ],
  },



  mutations: {},
  actions: {},
  modules: {},
});
