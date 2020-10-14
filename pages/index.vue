<template>
    <div>
        <Chat/>
    </div>
</template>

<script>
    import Chat from "~/components/pages/Chat"

    export default {
        middleware: 'authenticated',
        asyncData () {
            return new Promise((resolve) => {
                setTimeout(function () {
                    resolve()
                }, 1000)
            })
        },
        components: { Chat }
    }
</script>

<style scoped>

</style>