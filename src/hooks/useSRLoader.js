import React, { useState } from "react";

const useSRLoader = (name, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const SRLoader = () => (
    <div></div>
    // <label htmlFor={name}>
    //   {label}
    //   <select
    //     id={id}
    //     value={state}
    //     onChange={e => setState(e.target.value)}
    //     onBlur={e => setState(e.target.value)}
    //     disabled={!options.length}
    //   >
    //     <option />
    //     {options.map(item => (
    //       <option key={item} value={item}>
    //         {item}
    //       </option>
    //     ))}
    //   </select>
    // </label>
  );
  return [state, SRLoader];
};

export default useSRLoader;