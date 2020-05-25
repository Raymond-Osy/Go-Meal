import React from "react";

const FormInput = ({label, ...otherProps}) => (
  <div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for={label}>
        {label}
      </label>
      <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} {...otherProps} />
    </div>
  </div>
);

export default FormInput;
