/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Button = ({ btnText, btnFn, path }) => {
  return (
    <button
      onClick={btnFn}
      className="border rounded-xl px-4 py-2 text-sm font-semibold ml-6"
    >
      <Link to={path}>{btnText}</Link>
    </button>
  );
};

export default Button;
