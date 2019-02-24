<template>
  <div class="body">
    <page-header></page-header>
    <main class="container">
      <section class="title">
        <h1>Sign Up</h1>
        <p>Already have an account? <a href="/login">Login</a></p>
      </section>
      <div class="row">
        <section class="form col-lg-6 col-sm-12">
          <div class="form-content">
            <text-input name="email" text="Email" v-model="email" />
            <text-input name="password" text="Password" type="password" v-model="password" />
            <text-input name="confirmPassword" text="Confirm Password" type="password" v-model="confirmPassword" />
            <div class="error">{{errors}}</div>
            <div @click="onSubmit" role="button" class="action-button">Sign Up</div>
          </div>
        </section>
        <section class="third-party col-lg-6 col-sm-12">
          <third-party-button platform="fb" />
          <!-- <third-party-button platform="google" /> -->
        </section>
      </div>
    </main>
  </div>
</template>
<script>
import axios from '../config/axios-config'
import PageHeader from '~/components/confirm/Header.vue'
import TextInput from '~/components/TextInput.vue'
import ThirdPartyButton from '~/components/ThirdPartyButton.vue'
import { EMAIL_REGEX } from '~/components/regex.js'
export default {
    head() {
        return {
            link: [{ rel: "stylesheet", href: "/bootstrap.css" }]
        };
    },
    components: {
        PageHeader,
        TextInput,
        ThirdPartyButton,
    },
    data() {
        return {
            errors: null,
            email: '',
            password: '',
            confirmPassword: '',
        }
    },
    mounted(){
        // this.logout();
        
    },
    methods: {
        onSubmit() {
            if (this.email.length === 0 || this.password.length === 0 || this.confirmPassword.length === 0) {
                this.errors = '抱歉，所有欄位都要填寫！'
                return
            }
            if (!EMAIL_REGEX.test(this.email)) {
                this.errors = '電子信箱格式錯誤'
                return
            }
            if (this.password.length < 8) {
                this.errors = '密碼過短'
                return
            }
            if (this.password !== this.confirmPassword) {
                this.errors = '兩次密碼輸入不相符'
                return
            }
            this.errors = null
            this.signup(this.email, this.password, this.confirmPassword)
        },
        signup(email,password,repeated_password) {
            axios.post('/signup',{email:email,password:password,repeated_password:repeated_password})
                .then((response) => {
                    if (response.status == '200') {
                        console.log("signup success")
                    } else {
                        console.log(response)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        login(email,password) {
            axios.post('/signup',{email:email,password:password})
                .then((response) => {
                    if (response.status == '200') {
                        console.log("login success")
                    } else {
                        console.log(response)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        logout() {
            window.location.href = "https://api.ludonow.com/logout"
        },
    },
}
</script>
<style scoped>
.body {
  box-sizing: border-box;
  height: 100vh;
}
main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  margin-bottom: 5%;
}
h1 {
  color: grey;
  text-align: center;
  font-size: 30px;
  font-weight: normal;
}
.title p {
  text-align: center;
}
.title a {
  color: orange;
  text-decoration: underline;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
}
.form-content {
  width: 80%;
}
.third-party {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.third-party .third-party-button {
  margin: 10px 0;
}
.action-button {
  max-width: 150px;
  margin: 30px auto;
  padding: 10px;
  border-radius: 10px;
  background-color: #E0185D;
  color: white;
  text-align: center;
  cursor: pointer;
}
@media (min-width: 900px) {
  h1 {
    font-size: 60px;
  }
  .action-button {
    margin: 30px 0;
  }
  .action-button:hover {
    transform: translate(0, -5%);
  }
}
</style>