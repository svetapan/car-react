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

export const Car = ({ props }) => {
  return (
    <symbol id="icon-automobile" viewBox="0 0 37 32">
      <path d="M8.571 19.429c0-1.571-1.286-2.857-2.857-2.857s-2.857 1.286-2.857 2.857 1.286 2.857 2.857 2.857 2.857-1.286 2.857-2.857zM9.214 13.714h18.143l-1.589-6.375c-0.054-0.196-0.411-0.482-0.625-0.482h-13.714c-0.214 0-0.571 0.286-0.625 0.482zM33.714 19.429c0-1.571-1.286-2.857-2.857-2.857s-2.857 1.286-2.857 2.857 1.286 2.857 2.857 2.857 2.857-1.286 2.857-2.857zM36.571 17.714v6.857c0 0.321-0.25 0.571-0.571 0.571h-1.714v2.286c0 1.893-1.536 3.429-3.429 3.429s-3.429-1.536-3.429-3.429v-2.286h-18.286v2.286c0 1.893-1.536 3.429-3.429 3.429s-3.429-1.536-3.429-3.429v-2.286h-1.714c-0.321 0-0.571-0.25-0.571-0.571v-6.857c0-2.214 1.786-4 4-4h0.5l1.875-7.482c0.554-2.25 2.732-3.946 5.054-3.946h13.714c2.321 0 4.5 1.696 5.054 3.946l1.875 7.482h0.5c2.214 0 4 1.786 4 4z"></path>
    </symbol>
  );
};