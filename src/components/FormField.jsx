/* eslint-disable react/prop-types */
export default function FormField({
  htmlFor,
  type,
  id,
  label,
  placeholder,
  register,
  options,
}) {
  return (
    <div className="mb-2 flex items-center gap-2">
      <label
        className="mb-1 block basis-2/6  p-2.5  text-center text-sm font-medium text-emerald-900 dark:text-emerald-900"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <input
        {...register(id, options)}
        type={type}
        id={id}
        className="block w-full basis-4/6 border-2 border-emerald-400 p-2.5 text-sm text-emerald-900"
        placeholder={placeholder}
      />
    </div>
  );
}
