<script lang="ts">
  export let bgcolor = ""
</script>

<div style="background-color: {bgcolor};">
  <slot />
</div>

<style lang="scss">
  div {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
