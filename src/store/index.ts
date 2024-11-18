import { writable } from "svelte/store";
import Home from "../pages/Home.svelte";

const DEFAULT_PAGE = {
  name: "Home",
  href: "/",
  component: Home,
  params: {},
};

export let current_page = writable(DEFAULT_PAGE);
