<template>
    <div>
        <Chat/>
    </div>
</template>

<script>
    import Chat from "~/components/pages/Chat"

    export default {
        asyncData () {
            return new Promise((resolve) => {
                setTimeout(function () {
                    resolve()
                }, 1000)
            })
        },
        data() {
            return {
            }
        },
        components: { Chat }
    }
</script>

<style scoped>

</style>