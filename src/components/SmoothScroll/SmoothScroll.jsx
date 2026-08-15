function SmoothScroll({ children }) {
  // ScrollEffects owns the single Lenis instance.
  // Keeping this wrapper preserves compatibility with App.jsx without creating a second scroll engine.
  return children;
}

export default SmoothScroll;
