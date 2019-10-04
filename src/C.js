import React, { memo, useRef } from "react";

export default memo(function Input({ Wrap }) {
  const componentRerenderedTimes = useRef(0);
  componentRerenderedTimes.current++;

  return (
    <>
      <Wrap />
      <p>
        Input component was rerendered {componentRerenderedTimes.current} times
      </p>
    </>
  );
});

// export default function Input({ Wrap }) {
//   const componentRerenderedTimes = useRef(0);
//   componentRerenderedTimes.current++;

//   return (
//     <>
//       <Wrap />
//       <p>
//         Input component was rerendered {componentRerenderedTimes.current} times
//       </p>
//     </>
//   );
// }
