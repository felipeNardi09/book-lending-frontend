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
        <div className="mt-2 flex justify-center">
          <Button type="logout">
            {!isPending ? "Sign up" : <SmallSpinner />}
          </Button>
        </div>
        {error && <p>{error.message}</p>}
      </form>
    </>
  );
}
