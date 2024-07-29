function Input({ label, id, ...props }) {
  return (
    <div className="flex flex-col items-start justify-center">
      {label && (
        <label htmlFor={id} className="mb-1.5">
          {label}
        </label>
      )}
      <input
        name={id}
        id={id}
        required
        className="h-12 w-full rounded-md p-3 text-[1.25rem] text-brown bg-white border-black border-2"
        {...props}
      ></input>
    </div>
  );
}

export default Input;
