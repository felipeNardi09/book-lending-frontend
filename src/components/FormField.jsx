/* eslint-disable react/prop-types */

export default function FormField({
  htmlTag,
  htmlFor,
  type,
  id,
  label,
  placeholder,
  register,
  divStyle,
  labelStyle,
  inputStyle,
  options,
}) {
  return (
    <div className="flex items-center gap-1">
      <label
        className="block basis-4/12 text-center text-sm font-medium text-emerald-900 dark:text-emerald-900"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      {htmlTag === "input" ? (
        <input
          {...register(id, options)}
          type={type}
          id={id}
          className="block basis-8/12 border bg-emerald-50 p-2 text-sm text-emerald-900"
          placeholder={placeholder}
        />
      ) : (
        <textarea
          {...register(id, options)}
          type={type}
          id={id}
          className="block basis-9/12 border bg-emerald-50 p-2 text-sm text-emerald-900"
          placeholder={placeholder}
          rows={1}
        />
      )}
    </div>
  );
}
