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
        className="mb-1 block basis-2/6  p-2.5  text-center text-sm font-medium text-gray-900 dark:text-gray-900"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <input
        {...register(id, options)}
        type={type}
        id={id}
        className="block w-full basis-4/6 border-2 border-black bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
}
