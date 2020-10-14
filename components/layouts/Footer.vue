<template>
    <div>
        <footer class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        {{ dateFormatted }} © Dygoo
                    </div>
                    <div class="col-sm-6">
                        <div class="text-sm-right d-none d-sm-block">
                            Develop with <a href="https://nuxtjs.org/" target="_blank" class="text-primary">Nuxtjs</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dateFormatted: this.$dateFns.format(new Date(), 'yyyy')
            }
        }
    }
</script>