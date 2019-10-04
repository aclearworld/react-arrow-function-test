import React, { memo, useRef } from "react";

export default memo(function Input({ onChange }) {
  const componentRerenderedTimes = useRef(0);
  componentRerenderedTimes.current++;

  return (
    <>
      <input onChange={onChange} />
      <p>
        Input component was rerendered {componentRerenderedTimes.current} times
      </p>
    </>
  );
});
