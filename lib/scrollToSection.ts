export function scrollToSection(target: string, behavior: ScrollBehavior = "smooth") {
  if (typeof window === "undefined") {
    return false;
  }

  const trimmedTarget = target.startsWith("#") ? target.slice(1) : target;

  if (!trimmedTarget) {
    return false;
  }

  const section = document.getElementById(trimmedTarget);

  if (!section) {
    return false;
  }

  section.scrollIntoView({ behavior, block: "start" });

  if (window.location.hash) {
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
  }

  return true;
}
