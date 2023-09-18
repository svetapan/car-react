export const Heart = ({ ...props }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.63 2.4575C15.2469 2.07425 14.7921 1.77023 14.2915 1.56281C13.7909 1.35539 13.2543 1.24863 12.7125 1.24863C12.1706 1.24863 11.634 1.35539 11.1334 1.56281C10.6329 1.77023 10.178 2.07425 9.79497 2.4575L8.99997 3.2525L8.20497 2.4575C7.4312 1.68373 6.38174 1.24903 5.28747 1.24903C4.19319 1.24903 3.14374 1.68373 2.36997 2.4575C1.5962 3.23127 1.1615 4.28072 1.1615 5.375C1.1615 6.46927 1.5962 7.51873 2.36997 8.2925L3.16497 9.0875L8.99997 14.9225L14.835 9.0875L15.63 8.2925C16.0132 7.90943 16.3172 7.45461 16.5247 6.95401C16.7321 6.45342 16.8388 5.91686 16.8388 5.375C16.8388 4.83313 16.7321 4.29657 16.5247 3.79598C16.3172 3.29539 16.0132 2.84056 15.63 2.4575Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// export const CloseIcon = ({ ...props }) => {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       // fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//     >
//       <path
//         d="M18 6L6 18"
//         // stroke="#121417"
//         stroke-width="1.8"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//       <path
//         d="M6 6L18 18"
//         stroke="#121417"
//         stroke-width="1.8"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//     </svg>
//   );
// };

export const CloseIcon = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.3529"
        d="M24 8l-16 16M8 8l16 16"
      ></path>
    </svg>
  );
};
