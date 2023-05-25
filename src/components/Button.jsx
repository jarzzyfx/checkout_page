

function Button({title, onclick}) {
  return (
    <button onClick={onclick} className="w-full h-12 bg-blue-600 hover:bg-blue-500 p-2 rounded-md flex justify-center items-center text-sm capitalize font-medium text-white
    ">{title}</button>
  )
}

export default Button