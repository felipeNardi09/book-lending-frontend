import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

import Button from "../../components/Button";
import FormField from "../../components/FormField";
import SmallSpinner from "../../components/SmallSpinner";

export default function SignupForm() {
  const { signup, error, isPending } = useSignup();

  const { register, handleSubmit } = useForm();

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          signup(data);
        })}
        className="flex min-w-[24em] flex-col px-4 py-2 md:min-w-[32em]"
      >
        <FormField
          register={register}
          htmlFor="name"
          type="text"
          id="name"
          label="Name"
          placeholder="Enter your fullname"
        />
        <FormField
          register={register}
          htmlFor="email"
          type="email"
          id="email"
          label="E-mail"
          placeholder="youremailaccount@email.com"
        />
        <FormField
          register={register}
          htmlFor="password"
          type="password"
          id="password"
          label="Password"
          placeholder="Must contain at least 8 characters"
        />
        <FormField
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
            {...register("isAdmin")}
            name="isAdmin"
            id="isAdmin"
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
        {error && (
          <div className="mt-1 inline-block max-w-36 bg-red-300 text-center">
            <p>
              <span>{error.message}</span>
            </p>
          </div>
        )}
      </form>
    </>
  );
}
