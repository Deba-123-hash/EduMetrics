// Client Test Environment Setup
// Mock browser globals for Vitest / Jest testing
if (typeof window !== 'undefined') {
  window.matchMedia = window.matchMedia || function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {}
    };
  };
}
