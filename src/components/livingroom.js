import React from "react";
import { motion } from 'framer-motion';

function LivingRoom() {

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "#5A7D7C"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "#5A7D7C"
    }
  };

  return (
    <svg className="living-room"
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="500"
      x="0"
      y="0"
      viewBox="0 0 1000 1000"
    >
      <g style={{ isolation: "isolate" }}>
        <g data-name="Layer 1">
          <path

            fill="#8dc6bf"
            d="M253.854 424.285h-61.861a3 3 0 010-6h58.861v-27.931a3 3 0 116 0v30.931a3 3 0 01-3 3z"
          ></path>
          <path
            fill="#8dc6bf"
            d="M315.717 424.285h-61.863a3 3 0 01-3-3v-30.931a3 3 0 116 0v27.931h58.863a3 3 0 010 6z"
          ></path>
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 7,
              default: { duration: 2 },
              fill: { duration: 2 }
            }}
            // fill="#8dc6bf"
            d="M284.786 455.216h-61.862a3 3 0 01-3-3v-30.931a3 3 0 013-3h61.862a3 3 0 013 3v30.931a3 3 0 01-3 3zm-58.862-6h55.862v-24.931h-55.862z"
          ></motion.path>
          <path
            fill="#8dc6bf"
            d="M271.431 486.146h-17.577a3 3 0 01-3-3v-30.93a3 3 0 013-3h61.863a3 3 0 010 6h-58.863v24.93h14.577a3 3 0 010 6z"
          ></path>
          <path
            fill="#8dc6bf"
            d="M253.854 486.146h-50.162a3 3 0 110-6h47.162v-24.93h-58.861a3 3 0 010-6h61.861a3 3 0 013 3v30.93a3 3 0 01-3 3z"
          ></path>
          <path
            fill="#8dc6bf"
            d="M222.924 455.216h-30.931a3 3 0 010-6h27.931v-24.931h-49.019a3 3 0 010-6h52.019a3 3 0 013 3v30.931a3 3 0 01-3 3zM329.427 455.216h-44.641a3 3 0 01-3-3v-30.931a3 3 0 013-3h21.443a3 3 0 010 6h-18.443v24.931h41.641a3 3 0 010 6zM756.477 416h-61.861a3 3 0 010-6h58.861v-27.931a3 3 0 016 0V413a3 3 0 01-3 3z"
          ></path>
          <path
            fill="#8dc6bf"
            d="M818.34 416h-61.863a3 3 0 01-3-3v-30.931a3 3 0 016 0V410h58.863a3 3 0 110 6z"
          ></path>
          <path
            fill="#8dc6bf"
            d="M787.409 446.931h-61.862a3 3 0 01-3-3V413a3 3 0 013-3h61.862a3 3 0 013 3v30.931a3 3 0 01-3 3zm-58.862-6h55.862V416h-55.862zM718.263 322.132h-30.93a3 3 0 010-6h27.93V291.2h-49.017a3 3 0 010-6h52.017a3 3 0 013 3v30.931a3 3 0 01-3 3.001z"
          ></path>
          <path
            fill="#8dc6bf"
            d="M832.051 446.931h-44.642a3 3 0 01-3-3V413a3 3 0 013-3h21.443a3 3 0 010 6h-18.443v24.931h41.642a3 3 0 010 6z"
          ></path>
          <path fill="#6da580" d="M233.466 524H287.466V546H233.466z"></path>
          <path
            fill="#313031"
            d="M287.466 551h-54a5 5 0 01-5-5v-22a5 5 0 015-5h54a5 5 0 015 5v22a5 5 0 01-5 5zm-49-10h44v-12h-44z"
          ></path>
          <circle cx="382.609" cy="544.5" r="40" fill="#0bc6d5"></circle>
          <path
            fill="#0bc6d5"
            d="M367.942 544.5a40.006 40.006 0 0127.334-37.94 40 40 0 100 75.88 40.006 40.006 0 01-27.334-37.94z"
            opacity="0.74"
            style={{ mixBlendMode: "multiply" }}
          ></path>
          <path
            fill="#313031"
            d="M382.609 589.5a45 45 0 1145-45 45.051 45.051 0 01-45 45zm0-80a35 35 0 1035 35 35.04 35.04 0 00-35-35z"
          ></path>
          <path
            fill="#313031"
            d="M382.609 506.167a7 7 0 01-7-7V413a7 7 0 0114 0v86.167a7 7 0 01-7 7z"
          ></path>
          <path
            fill="#313031"
            d="M446.167 441.75H319.052a5 5 0 01-4.9-5.98l18.159-90.8a5 5 0 014.9-4.02h90.8a5 5 0 014.9 4.02l18.159 90.8a5 5 0 01-4.9 5.98zm-121.016-10h114.917l-16.159-80.8h-82.6z"
          ></path>
          <path
            fill="#f0f4f7"
            d="M446.166 436.75L319.052 436.75 337.211 345.954 428.007 345.954 446.166 436.75z"
          ></path>
          <path
            fill="#dbdbdb"
            d="M337.211 345.954L319.052 436.75 365.249 436.75 375.31 345.954 337.211 345.954z"
          ></path>
          <path
            fill="#313031"
            d="M446.167 441.75H319.052a5 5 0 01-4.9-5.98l18.159-90.8a5 5 0 014.9-4.02h90.8a5 5 0 014.9 4.02l18.159 90.8a5 5 0 01-4.9 5.98zm-121.016-10h114.917l-16.159-80.8h-82.6z"
          ></path>
          <path
            fill="#313031"
            d="M412.833 463.667a2 2 0 01-2-2V436.75a2 2 0 014 0v24.917a2 2 0 01-2 2z"
          ></path>
          <path
            fill="#313031"
            d="M412.833 479.417a9.875 9.875 0 119.875-9.875 9.886 9.886 0 01-9.875 9.875zm0-15.75a5.875 5.875 0 105.875 5.875 5.881 5.881 0 00-5.875-5.875z"
          ></path>
          <circle cx="412.833" cy="469.542" r="7.875" fill="#313031"></circle>
          <path
            fill="#313031"
            d="M250.167 731h-32a5 5 0 01-5-5v-20a5 5 0 015-5h32a5 5 0 015 5v20a5 5 0 01-5 5zm-27-10h22v-10h-22z"
          ></path>
          <path fill="#313031" d="M218.166 706H250.166V726H218.166z"></path>
          <path
            fill="#313031"
            d="M413.167 731h-32a5 5 0 01-5-5v-20a5 5 0 015-5h32a5 5 0 015 5v20a5 5 0 01-5 5zm-27-10h22v-10h-22z"
          ></path>
          <path fill="#313031" d="M381.166 706H413.166V726H381.166z"></path>
          <path
            fill="#ffc857"
            d="M606.833 427.327h131v198.346h-131a52 52 0 01-52-52v-94.346a52 52 0 0152-52z"
            transform="rotate(90 646.333 526.5)"
          ></path>
          <path
            fill="#ffc857"
            d="M693.506 436H599.16a52 52 0 00-52 52v12.167a52 52 0 0152-52h94.346a52 52 0 0152 52V488a52 52 0 00-52-52z"
            opacity="0.6"
            style={{ mixBlendMode: "screen" }}
          ></path>
          <path
            fill="#313031"
            d="M745.507 623H547.16a5 5 0 01-5-5V487a57.064 57.064 0 0157-57h94.347a57.065 57.065 0 0157 57v131a5 5 0 01-5 5zM552.16 613h188.347V487a47.053 47.053 0 00-47-47H599.16a47.053 47.053 0 00-47 47z"
          ></path>
          <path
            fill="#7c4f49"
            d="M194.167 626H438.16700000000003V706H194.167z"
          ></path>
          <rect
            width="69.442"
            height="19.167"
            x="278.167"
            y="661"
            fill="#7c4f49"
            opacity="0.24"
            rx="5"
          ></rect>
          <path
            fill="#7c4f49"
            opacity="0.54"
            style={{ mixBlendMode: "screen" }}
            d="M194.167 626.583H438.16700000000003V636.25H194.167z"
          ></path>
          <path
            fill="#7c4f49"
            opacity="0.24"
            style={{ mixBlendMode: "multiply" }}
            d="M194.167 696.167H438.16700000000003V705.8340000000001H194.167z"
          ></path>
          <path
            fill="#313031"
            d="M438.167 711h-244a5 5 0 01-5-5v-80a5 5 0 015-5h244a5 5 0 015 5v80a5 5 0 01-5 5zm-239-10h234v-70h-234z"
          ></path>
          <path
            fill="#7c4f49"
            d="M194.167 546H438.16700000000003V626H194.167z"
          ></path>
          <rect
            width="69.442"
            height="19.167"
            x="278.167"
            y="581"
            fill="#7c4f49"
            opacity="0.24"
            rx="5"
          ></rect>
          <path
            fill="#7c4f49"
            opacity="0.24"
            style={{ mixBlendMode: "multiply" }}
            d="M194.167 616H438.16700000000003V625.667H194.167z"
          ></path>
          <path
            fill="#7c4f49"
            opacity="0.54"
            style={{ mixBlendMode: "screen" }}
            d="M194.167 546H438.16700000000003V555.667H194.167z"
          ></path>
          <path
            fill="#313031"
            d="M438.167 631h-244a5 5 0 01-5-5v-80a5 5 0 015-5h244a5 5 0 015 5v80a5 5 0 01-5 5zm-239-10h234v-70h-234z"
          ></path>
          <path
            fill="#ffc857"
            d="M752.333 546.583h22a16 16 0 0116 16v144h-54v-144a16 16 0 0116-16z"
          ></path>
          <path
            fill="#ffc857"
            d="M774.333 546h-22a16 16 0 00-16 16v10a16 16 0 0116-16h22a16 16 0 0116 16v-10a16 16 0 00-16-16z"
            opacity="0.6"
            style={{ mixBlendMode: "screen" }}
          ></path>
          <path
            fill="#313031"
            d="M790.333 711h-54a5 5 0 01-5-5V562a21.024 21.024 0 0121-21h22a21.024 21.024 0 0121 21v144a5 5 0 01-5 5zm-49-10h44V562a11.013 11.013 0 00-11-11h-22a11.012 11.012 0 00-11 11z"
          ></path>
          <path
            fill="#fff"
            d="M581.631 237.597H701.631V401.597H581.631z"
            transform="rotate(90 641.63 319.598)"
          ></path>
          <path
            fill="#313031"
            d="M723.631 384.6h-164a5 5 0 01-5-5v-120a5 5 0 015-5h164a5 5 0 015 5v120a5 5 0 01-5 5zm-159-10h154v-110h-154z"
          ></path>
          <path
            fill="#c6c6c6"
            d="M575.63 275.597H707.63V363.597H575.63z"
          ></path>
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 7,
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] }
            }}
            fill="#313031"
            d="M707.631 366.6h-132a3 3 0 01-3-3v-88a3 3 0 013-3h132a3 3 0 013 3v88a3 3 0 01-3 3zm-129-6h126v-82h-126z"
          ></motion.path>
          <path
            fill="#313031"
            d="M599.362 345.954L620.313 309.667 641.264 345.954 599.362 345.954z"
          ></path>
          <path
            fill="#313031"
            d="M641.263 347.954h-41.9a2 2 0 01-1.732-3l20.951-36.287a2 2 0 011.732-1 2 2 0 011.733 1L643 344.954a2 2 0 01-1.733 3zm-38.437-4H637.8l-17.487-30.287z"
          ></path>
          <path
            fill="#0bc6d5"
            d="M620.313 345.954L644.728 303.667 669.143 345.954 620.313 345.954z"
          ></path>
          <path
            fill="#313031"
            d="M669.142 347.954h-48.829a2 2 0 01-1.732-3L643 302.667a2 2 0 013.465 0l24.414 42.287a2 2 0 01-1.733 3zm-45.365-4h41.9l-20.95-36.287z"
          ></path>
          <circle cx="678.476" cy="300.333" r="9.333" fill="#ffc857"></circle>
          <path
            fill="#313031"
            d="M678.476 311.667a11.334 11.334 0 1111.333-11.334 11.346 11.346 0 01-11.333 11.334zm0-18.667a7.334 7.334 0 107.333 7.333 7.342 7.342 0 00-7.333-7.333zM588.49 262.6a3 3 0 01-1.7-5.476l52.02-35.6a3 3 0 013.389 0l52 35.577a3 3 0 01-3.389 4.952l-50.3-34.418-50.327 34.438a2.99 2.99 0 01-1.693.527zM342.609 591h-59.442a5 5 0 110-10h59.442a5 5 0 010 10zM342.609 671h-59.442a5 5 0 110-10h59.442a5 5 0 010 10z"
          ></path>
          <path fill="#313031" d="M736.333 706H768.333V726H736.333z"></path>
          <path
            fill="#313031"
            d="M768.333 731h-32a5 5 0 01-5-5v-20a5 5 0 015-5h32a5 5 0 015 5v20a5 5 0 01-5 5zm-27-10h22v-10h-22z"
          ></path>
          <path fill="#313031" d="M524.083 706H556.083V726H524.083z"></path>
          <path
            fill="#313031"
            d="M556.083 731h-32a5 5 0 01-5-5v-20a5 5 0 015-5h32a5 5 0 015 5v20a5 5 0 01-5 5zm-27-10h22v-10h-22z"
          ></path>
          <path
            fill="#ffc857"
            d="M518.083 546h22a16 16 0 0116 16v144h-54V562a16 16 0 0116-16z"
          ></path>
          <path
            fill="#ffc857"
            d="M540.083 546h-22a16 16 0 00-16 16v10a16 16 0 0116-16h22a16 16 0 0116 16v-10a16 16 0 00-16-16z"
            opacity="0.6"
            style={{ mixBlendMode: "screen" }}
          ></path>
          <path
            fill="#313031"
            d="M556.083 711h-54a5 5 0 01-5-5V562a21.024 21.024 0 0121-21h22a21.024 21.024 0 0121 21v144a5 5 0 01-5 5zm-49-10h44V562a11.013 11.013 0 00-11-11h-22a11.012 11.012 0 00-11 11z"
          ></path>
          <path
            fill="#ffc857"
            d="M631.417 539.5h48.417v180h-48.417a18.583 18.583 0 01-18.583-18.583V558.083a18.583 18.583 0 0118.583-18.583z"
            transform="rotate(90 646.333 629.5)"
          ></path>
          <path
            fill="#ffc857"
            d="M717.75 596H574.917a18.583 18.583 0 00-18.584 18.583v12A18.583 18.583 0 01574.917 608H717.75a18.583 18.583 0 0118.583 18.583v-12A18.583 18.583 0 00717.75 596z"
            opacity="0.6"
            style={{ mixBlendMode: "screen" }}
          ></path>
          <path
            fill="#313031"
            d="M736.334 668h-180a5 5 0 01-5-5v-48.416A23.61 23.61 0 01574.917 591H717.75a23.611 23.611 0 0123.584 23.584V663a5 5 0 01-5 5zm-175-10h170v-43.416A13.6 13.6 0 00717.75 601H574.917a13.6 13.6 0 00-13.583 13.584z"
          ></path>
          <path
            fill="#ffc857"
            d="M627.333 592H665.333V772H627.333z"
            transform="rotate(90 646.333 682)"
          ></path>
          <path
            fill="#ffc857"
            d="M627.333 592H665.333V772H627.333z"
            transform="rotate(90 646.333 682)"
          ></path>
          <path
            fill="#d89e36"
            d="M640.333 579H652.333V759H640.333z"
            transform="rotate(90 646.333 669)"
          ></path>
          <path
            fill="#313031"
            d="M736.334 706h-180a5 5 0 01-5-5v-38a5 5 0 015-5h180a5 5 0 015 5v38a5 5 0 01-5 5zm-175-10h170v-28h-170z"
          ></path>
          <circle
            cx="646.75"
            cy="515.5"
            r="11"
            fill="#fff"
            opacity="0.69"
            style={{ mixBlendMode: "screen" }}
          ></circle>
          <path
            fill="#313031"
            d="M646.75 529.5a14 14 0 1114-14 14.015 14.015 0 01-14 14zm0-22a8 8 0 108 8 8.009 8.009 0 00-8-8zM814.083 731H166.5a5 5 0 010-10h647.583a5 5 0 110 10zM502.5 779.577h-79.195a5 5 0 010-10H502.5a5 5 0 010 10zM405.818 779.577h-17.3a5 5 0 110-10h17.3a5 5 0 010 10zM845.75 731h-13.7a5 5 0 110-10h13.7a5 5 0 010 10z"
          ></path>
          <ellipse
            cx="414.875"
            cy="465.417"
            fill="#dbdbdb"
            rx="2.042"
            ry="1.75"
          ></ellipse>
        </g>
      </g>
    </svg>
  );
}

export default LivingRoom;