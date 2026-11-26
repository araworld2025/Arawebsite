
  import { useSyncExternalStore } from "react";
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import { ComponentsOverview } from "./app/pages/ComponentsOverview.tsx";
  import { InfoPage, PAGES } from "./app/pages/InfoPages.tsx";
  import "./styles/index.css";

  // Tiny hash-based switch: `#components` shows the Components Overview, and
  // the footer pages live at `#about`, `#mission`, `#free-resources`,
  // `#roadmap` and `#privacy-policy` (see app/pages/InfoPages.tsx). Hash
  // routes work on any static host with no server rewrites.
  function subscribe(callback: () => void) {
    window.addEventListener("hashchange", callback);
    return () => window.removeEventListener("hashchange", callback);
  }

  function Root() {
    const hash = useSyncExternalStore(subscribe, () => window.location.hash);
    if (hash.startsWith("#components")) return <ComponentsOverview />;
    const slug = hash.replace(/^#\/?/, "");
    if (Object.hasOwn(PAGES, slug)) return <InfoPage key={slug} slug={slug} />;
    return <App />;
  }

  createRoot(document.getElementById("root")!).render(<Root />);
