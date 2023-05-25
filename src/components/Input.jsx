import React from 'react';

const Input = ({ startIcon, endIcon, value, inpType, placeHolder, onChange, maxLength }) => {


  return (
    <div className="group">
      <button className="flex items-center gap-4 justify-between w-full h-12 p-2 outline rounded-md outline-[1px] outline-slate-300 bg-slate-50 group-hover:outline-blue-600 group-hover:bg-blue-50 group-active:bg-blue-50 group-active:outline-blue-600 group-focus-within:bg-blue-50 group-focus-within:outline-blue-600">
        {startIcon ? startIcon : null}
        <input
          type={inpType}
          value={value}
          maxLength={maxLength}
          onChange={onChange}
          placeholder={placeHolder}
          className="w-full h-ful outline-none bg-transparent focus:text-blue-600 text-slate-600 font-medium"
        />
        {endIcon && endIcon}
      </button>
    </div>
  );
};

export default Input;
