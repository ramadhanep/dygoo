<template>
    <div class="row align-items-center justify-content-center">
         <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card">     
                <div class="card-body p-4"> 
                    <div class="text-center mt-2">
                        <h5 class="text-primary">Sign In !</h5>
                        <p class="text-muted">Sign in to continue to Dygoo.</p>
                    </div>
                    <div class="p-2 mt-4">
                        <div v-if="error" class="alert alert-danger alert-dismissible fade show" role="alert">
                            <i class="uil uil-exclamation-octagon mr-2"></i>
                            Invalid data!
                        </div>
                        <form method="POST" @submit.prevent="login">

                            <div class="form-group">
                                <label for="authName">Name</label>
                                <input type="text" class="form-control" id="authName" placeholder="Enter your name" v-model="data.username">
                            </div>

                            <div class="form-group">
                                <label for="authRoom">Room Chat</label>
                                <select class="form-control select2" id="authRoom" v-model="data.room">
                                    <option value="" selected>&mdash;</option>
                                    <option v-for="item in roomChat" :key="item" :value="item">{{ item }}</option>
                                </select>
                            </div>

                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="auth-remember-check">
                                <label class="custom-control-label" for="auth-remember-check">Remember me</label>
                            </div>
                            
                            <div class="mt-3 text-right">
                                <button class="btn btn-primary w-sm waves-effect waves-light" type="submit">Log In</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        asyncData () {
            return new Promise((resolve) => {
                setTimeout(function () {
                    resolve()
                }, 1000)
            })
        },
        head: {
            title: "Dygoo | Login"
        },
        data() {
            return {
                roomChat: ["Javascript Developer"],
                data: {
                    username: "",
                    room: ""
                },
                error: false
            }
        },
        methods: {
            async login() {
                if (this.data.username === "" || this.data.room === "") {
                    this.error = true
                }
                else {
                    await this.$store.dispatch('login', {
                        username: this.data.username,
                        room: this.data.room
                    })

                    this.$router.push("/")
                }
            }
        }
    }
</script>

<style scoped>
</style>