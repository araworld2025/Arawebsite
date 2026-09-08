
  import { useSyncExternalStore } from "react";
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import { ComponentsOverview } from "./app/pages/ComponentsOverview.tsx";
  import "./styles/index.css";

  // Tiny hash-based switch so the Components Overview page is viewable at
  // `#components` without pulling routing into the single-page site.
  function subscribe(callback: () => void) {
    window.addEventListener("hashchange", callback);
    return () => window.removeEventListener("hashchange", callback);
  }

  function Root() {
    const hash = useSyncExternalStore(subscribe, () => window.location.hash);
    return hash.startsWith("#components") ? <ComponentsOverview /> : <App />;
  }

  createRoot(document.getElementById("root")!).render(<Root />);
