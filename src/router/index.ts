import router from "page";
import { current_page } from "../store";

const routes = [
  {
    name: "Home",
    href: "/",
    component: import("../pages/Home.svelte"),
    params: {},
  },
  {
    name: "Page 1",
    href: "/page-1",
    component: import("../pages/Page1.svelte"),
    params: {},
  },
];

for (let route of routes) {
  router(route.href, async () =>
    current_page.set({
      name: route.name,
      href: route.href,
      component: (await route.component)?.default,
      params: route.params,
    })
  );
}

router.start();
