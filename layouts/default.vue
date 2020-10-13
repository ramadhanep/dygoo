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

    import Header from "~/components/layouts/Header"
    import Footer from "~/components/layouts/Footer"

    export default {
        middleware: 'auth',
        head: {
            bodyAttrs: {
                "data-layout": "horizontal",
                "data-topbar": "colored"
            }
        },
        components: { Header, Footer },
    }
</script>

<style>
</style>