<template>
  <b-row class="justify-content-center">
    <b-col md="5" class="mt-5">
      <b-card class="text-center" title="Register" footer-tag="footer">
        <b-card-text>
          <b-form @submit.prevent="onSubmit">
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

            <b-form-group
              class="text-left mt-3"
              id="input-group-3"
              label="Confirm password:"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="form.confirmPassword"
                type="password"
                required
                placeholder="Enter again your Password"
              ></b-form-input>
            </b-form-group>

            <!-- <b-button type="submit" variant="primary">Login</b-button> -->
            <b-button block  type="submit" variant="primary"
              >Sign-In</b-button
            >
          </b-form>
        </b-card-text>
        <template v-slot:footer>
          <p>
            Si ya tienes una cuenta inicia sesion
            <router-link to="/login">Aqui</router-link> .
          </p>
        </template>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import firebase from "firebase"
export default {
  name: "Signin",
  data() {
    return {
      form: {
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.form.password === this.form.confirmPassword) {
        console.log(`Esto son los campos user name ${this.user_name} , password ${this.password}`)
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then(
            (user) => {
              this.$router.go({ path: this.$router.path });
              console.log(user);
              //   this.$router.push('/')
            },
            (err) => {
              console.log(err);
            }
          );
      } else {
        console.log("the password is not the same");
      }
    },
  },
};
</script>
