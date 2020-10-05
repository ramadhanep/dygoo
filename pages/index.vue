<template>
    <div class="container">
        <div>
            <Logo />
            <h1 class="title">DYGOO.ID</h1>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.splashScreenView()
        },
        methods: {
            splashScreenView() {
                setTimeout(() => {
                    this.$router.push("/login")
                }, 2000);
            }
        }
    }
</script>

<style>
    .container {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #343647;
    }

    .title {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 30px;
        color: #FFFFFF;
        letter-spacing: .5px;
        margin-top: 50px;
    }
</style>
