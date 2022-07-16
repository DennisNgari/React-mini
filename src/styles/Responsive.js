/* 
Media Query Manager
Responsive Design

0 - 600px: mobile-small
600 - 768px: mobile-medium
768px - 1024: large/tablet
944px - 1024px: laptop-small
1024 - 1200px: laptop
1200 -1440px: laptop-large/Desktop

$breakpoint argument choices
- mobile-small (sm)
- mobile-medium (md)
- mobile-large/tablet (lg)
- laptop (xl)
- laptop-large/Desktop (xxl) 
*/

// Device Sizes.
export const s = {
  // 1460px = 91.25em
  xxl: "91.25em",

  // 1200px = 75em
  xl: "75em",
  // 1024px = 64em

  lg: "64em",
  // 768px = 48em

  md: "48em",
  // 600px = 37.5em

  sm: "37.5em",
};

// BREAKPOINTS
export const b = {
  xxl: `(max-width: ${s.xxl})`,
  xl: `(max-width: ${s.xl})`,
  md: `(max-width: ${s.md})`,
  sm: `(max-width: ${s.sm})`,
};
