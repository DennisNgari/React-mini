/*
MEDIA QUERRY MANAGER
0-600px: phone
600-900px: Tablet portarait
900-1200px: Tablet landscape
1200-1800px: is where our normal styles apply.
1800px-+: Big deskktops

 Breakpoint argument choices 
 -phone
 -tablet
 -laptop
 -desktop

 Note that 1 em = 16px
 We use ems instead of rems because rems are affectd by the width of the browser.
 */

// Device Sizes.
export const s = {
  // Big-Desktop obove 1920px (> 120em)
  xxl: "120em",

  // Desktop/big laptops up to 1920px (< 120em)
  xl: "120em",

  // Laptops up to 1200px (75em)
  lg: "75em",

  //Tablet up to 900px (48em)
  md: "56.25em",

  // Mobile Phone up to 600px (37.5em)
  sm: "37.5em",

  // Mobile Phone below 600px (< 37.5em)
  xsm: "37.5em",
};

// BREAKPOINTS
export const b = {
  xxl: `(min-width: ${s.xxl})`,
  xl: `(max-width: ${s.xl})`,
  lg: `(max-width: ${s.lg})`,
  md: `(max-width: ${s.md})`,
  sm: `(max-width: ${s.sm})`,
};
