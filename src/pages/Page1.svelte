<script lang="ts">
  import { onMount } from "svelte";
  import Centralise from "../components/Centralise.svelte";
  import page from "page";

  let todayTime = "";
  const goTo = (href:string) => {
    page(href)
  }
  onMount(() => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    todayTime = `${hours}:${minutes}`;
  });
</script>

<Centralise>
  <div>
    <h1>Current Time: {todayTime}</h1>
    <h2>Current Date: {new Date().toLocaleDateString()}</h2>
    <button on:click={()=>goTo("/")}>Return to Home page</button>
  </div>
</Centralise>

<style lang="scss">
  h1 {
    color: red;
  }

  h2 {
    color: blue;
  }

  div {
    text-align: center;
  }
</style>
