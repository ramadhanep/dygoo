<template>
    <div>
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-flex align-items-center justify-content-between">
                    <h4 class="mb-0">Dashboard</h4>

                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Dygoo</a></li>
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
        <!-- end page title -->

        <div class="row">
            <div class="col-xl-3">
                <div class="alert alert-primary">
                    <i class="uil uil-comment-info mr-2"></i> Be careful with coronavirus
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mt-0">Update Covid19 in Indonesia</h4>
                    </div>
                    <img class="img-fluid" src="https://cdn-2.tstatic.net/ternate/foto/bank/images/sebaran-virus-corona-di-indonesia-sabtu-10102020.jpg" alt="Card image cap">
                </div>
            </div>
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-body">

                        <h4 class="card-title">How Does the Corona Virus Attack Our Organs?</h4>
                        <p class="card-title-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <!-- 16:9 aspect ratio -->
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ftNCj06d7KE"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head: {
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<style>

</style>
