/* eslint-disable react/prop-types */

const Button = ({btnText, btnFn}) => {
  return (
    <button onClick={btnFn} className="border rounded-xl px-4 py-2 text-sm font-semibold ml-6">
        {btnText}
    </button>
  )
}

export default Button