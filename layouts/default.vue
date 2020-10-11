<template>
    <div id="layout-wrapper">
        <!-- <Header/> -->
        
        <div class="main-content">

            <div class="page-content">
                <div class="container-fluid">
                    <Nuxt/>
                </div> <!-- container-fluid -->
            </div>
            <!-- End Page-content -->

            <Footer/>
        </div>
        <!-- end main content-->

    </div>
</template>

<script>
    import VueCookie from 'vue-cookie'

    import Header from "~/components/layouts/Header"
    import Footer from "~/components/layouts/Footer"

    export default {
        head: {
            bodyAttrs: {
                "data-layout": "horizontal",
                "data-topbar": "colored"
            }
        },
        components: { Header, Footer },
        mounted() {
            this.loggedIn()
        },
        data() {
            return {
                authData: {
                    username: "",
                    room: ""
                }
            }
        },
        methods: {
            async loggedIn() {
                this.authData.username = VueCookie.get('__authUsername')
                this.authData.room = VueCookie.get('__authRoom')

                if (this.authData.username == undefined && this.authData.room == undefined) {
                    this.$router.push("/login")
                }
                else {
                    const username = this.authData.username,
                    room = this.authData.room
                }
            }
        }
    }
</script>

<style>
    /* .main-content {
        margin-left: 0;
    }
    .topnav {
        background: #2d313e;
    } */
</style>