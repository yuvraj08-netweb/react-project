/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Button = ({ btnText, btnFn, path }) => {
  return (
    <Link to={path}>
    <button
      onClick={btnFn}
      className="border rounded-xl px-4 py-2 text-sm font-semibold ml-6"
    >
      {btnText}
    </button>
    </Link>
  );
};

export default Button;
