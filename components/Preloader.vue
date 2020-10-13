<template>
    <div v-if="loading" id="preloader">
        <div id="status">
            <div class="spinner">
                <i class="uil-cell spin-icon"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>
