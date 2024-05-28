import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

import Button from "../../components/Button";
import FormField from "../../components/FormField";
import SmallSpinner from "../../components/SmallSpinner";
import { useAuth } from "../../contexts/AuthContext";

export default function SignupForm() {
  const { signup, error, isPending } = useSignup();

  const { register, handleSubmit } = useForm();

  const { user } = useAuth();

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          signup(data);
        })}
        className="flex min-w-[24em] flex-col gap-1 px-4 py-2 md:min-w-[32em]"
      >
        <FormField
          htmlTag="input"
          divStyle="flex"
          labelStyle="mb-1 block basis-2/6  p-2.5  text-center text-sm font-medium text-emerald-900 dark:text-emerald-900"
          inputStyle="block w-full basis-4/6 border-2 border-emerald-400 p-2.5 text-sm text-emerald-900"
          register={register}
          htmlFor="name"
          type="text"
          id="name"
          label="Name"
          placeholder="Enter your fullname"
        />
        <FormField
          htmlTag="input"
          divStyle="flex"
          labelStyle="mb-1 block basis-2/6  p-2.5  text-center text-sm font-medium text-emerald-900 dark:text-emerald-900"
          inputStyle="block w-full basis-4/6 border-2 border-emerald-400 p-2.5 text-sm text-emerald-900"
          register={register}
          htmlFor="email"
          type="email"
          id="email"
          label="E-mail"
          placeholder="youremailaccount@email.com"
        />
        <FormField
          htmlTag="input"
          divStyle="flex"
          labelStyle="mb-1 block basis-2/6  p-2.5  text-center text-sm font-medium text-emerald-900 dark:text-emerald-900"
          inputStyle="block w-full basis-4/6 border-2 border-emerald-400 p-2.5 text-sm text-emerald-900"
          register={register}
          htmlFor="password"
          type="password"
          id="password"
          label="Password"
          placeholder="Must contain at least 8 characters"
        />
        <FormField
          htmlTag="input"
          divStyle="flex"
          labelStyle="mb-1 block basis-2/6  p-2.5  text-center text-sm font-medium text-emerald-900 dark:text-emerald-900"
          inputStyle="block w-full basis-4/6 border-2 border-emerald-400 p-2.5 text-sm text-emerald-900"
          register={register}
          htmlFor="confirmPassword"
          type="password"
          id="confirmPassword"
          label="Confirm password"
          placeholder="Passwords must match"
        />
        <div className="flex gap-3 self-center px-2 py-1">
          <label htmlFor="isAdmin">Role:</label>
          <select
            className="min-w-20 border border-slate-300"
            {...register("role")}
            name="role"
            id="role"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="mt-2 flex justify-center">
          <Button type="primary">
            {!isPending ? "Sign up" : <SmallSpinner />}
          </Button>
        </div>
        {error && <p className="text-center">{error.message}</p>}
      </form>
    </>
  );
}
