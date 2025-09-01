import type { SVGProps } from 'react';

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.1415 19.1415C15.9388 22.3441 10.9631 22.774 7.2265 20.2452C3.48991 17.7164 1.65593 13.0921 3.8585 9.00002C6.06107 4.90793 11.2359 2.92823 15.7735 4.75482C20.3111 6.58141 22.774 11.0369 21.2452 15.7735"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M10 8V16L16 12L10 8Z"
      fill="currentColor"
    />
  </svg>
);
