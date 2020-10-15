<template>
  <b-row class="justify-content-center">
    <b-col md="5" class="mt-5">
      <b-card class="text-center" title="Login">
        <b-card-text>
          <b-form @submit.prevent="onSubmit" footer-tag="footer">
            <b-form-group
              class="text-left mt-3"
              id="input-group-1"
              label="Your email:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              class="text-left mt-3"
              id="input-group-2"
              label="Your password:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.password"
                type="password"
                required
                placeholder="Enter Password"
              ></b-form-input>
            </b-form-group>

            <b-button block type="submit" variant="primary">Login</b-button>
          </b-form>
        </b-card-text>
        <template v-slot:footer>
          <p>
            Si aun no tienes una cuenta registrate
            <router-link to="/signin">Aqui</router-link> .
          </p>
        </template>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import firebase from 'firebase';

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(
          (user) => {
            
            this.$router.go({ path: this.$router.path });
            console.log(user);
            // this.$router.push('/')
          },
          (err) => {
            console.log(err);
          }
        );
    },
  },
};
</script>