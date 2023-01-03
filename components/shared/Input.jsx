const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="md:w-[80%] lg:text-lg md:text-sm mx-5 md:mx-0 mt-10 md:mt-0 sm:my-10 rounded-3xl p-2 border-slate-200 border-solid border-4 focus:outline-none"
    />
  );
};

export default Input;
