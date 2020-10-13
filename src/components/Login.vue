<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input
        class="txtInput"
        v-model="usuario"
        type="text"
        placeholder="Usuario"
      />
      <input
        class="txtInput"
        v-model="contrasena"
        type="password"
        placeholder="Contraseña"
      />
      <button class="btnAcceder btn btn-primary" type="submit">Acceder</button>
    </form>
    <div class="datosLogueo">
      <h4 class="titulo">*** Datos para loguearse ***</h4>
      <h5 class="texto">
        Usuario: walterwhite@gmail.com<br />
        Contraseña: 123456
      </h5>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      usuario: "",
      contrasena: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.contrasena)
        .then(
          user => this.$router.replace("home")
          // error => console.error(error)
        )
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
form > * {
  display: block;
}
.txtInput {
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 5px;
}
.btnAcceder {
  margin-top: 5px;
  margin-left: 60px;
}
.datosLogueo {
  margin-top: 30px;
}
.titulo {
  font-size: 16px;
}
.texto {
  font-size: 14px;
}
</style>
