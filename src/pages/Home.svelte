<script lang="ts">
  import Centralise from "../components/Centralise.svelte";
  const today = new Date().getDay();
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
</script>

<Centralise>
  <div>
    <h1>Home Page</h1>
    <h2>To day is {weekDays[today]}</h2>
    <a href="/page-1">Go to Page 1</a>
  </div>
</Centralise>

<style lang="scss">
  $red_color: #e53232;
  h1 {
    color: $red_color;
    text-transform: capitalize;
  }

  h2 {
    font-size: 1.5rem;
  }

  /*   h2::before {
    content: "Today is ";
    font-style: italic;
  } */

  @media (max-width: 600px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (prefers-color-scheme: dark) {
    :global(body) {
      background-color: #333;
      color: #fff;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  h1 {
    animation: fade-in 1s ease-in-out;
  }
</style>
