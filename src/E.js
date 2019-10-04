import React, { memo, useRef, useState, useCallback } from "react";

// export default memo(function Input({ onChange }) {
//   const componentRerenderedTimes = useRef(0);
//   componentRerenderedTimes.current++;

//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <input onChange={onChange} />
//       <p>
//         Input component was rerendered {componentRerenderedTimes.current} times
//       </p>
//       <button
//         onClick={useCallback(
//           e => console.log(componentRerenderedTimes.current),
//           []
//         )}
//       >
//         button
//       </button>
//       <p>count : {count}</p>
//     </>
//   );
// });

export default memo(function Input({ onChange, isE }) {
  const componentRerenderedTimes = useRef(0);
  componentRerenderedTimes.current++;

  const collback = isE ? () => console.log("isE") : () => console.log("no isE");

  return (
    <>
      <input onChange={onChange} />
      <p>
        Input component was rerendered {componentRerenderedTimes.current} times
      </p>
      <button onClick={useCallback(e => collback(), [collback])}>
        isE button
      </button>
    </>
  );
});

// export default memo(function Input({ isE }) {
//   const collback = isE ? () => console.log("isE") : () => console.log("no isE");
//   return (
//     <>
//       <button onClick={useCallback(e => collback(), [collback])}>
//         isE button
//       </button>
//     </>
//   );
// });
