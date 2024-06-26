import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import SmallSpinner from "../../components/SmallSpinner";
import NavLink from "../../components/NavLink";
import { useReactivateUser } from "../users/useReactivateUser";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();

  const { login, error, isPending } = useLogin();
  const {
    mutate: reactivate,
    error: reactivateError,
    isPending: reactivateIsPending,
    isSuccess: reactivateIsSucess,
  } = useReactivateUser();

  return (
    <div className="flex flex-col items-center">
      <form
        className="flex min-w-[24em] flex-col gap-2 px-4 py-2 md:min-w-[32em]"
        onSubmit={handleSubmit((data) => {
          login(data);
        })}
      >
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
          placeholder="Enter your password"
        />

        <div className="text-center">
          <NavLink type="primary">Forgot your password?</NavLink>
        </div>
        <div className="mt-2 flex justify-center">
          <Button type="primary" disabled={isPending}>
            {!isPending ? "Log in" : <SmallSpinner />}
          </Button>
        </div>
      </form>
      {error?.message ===
        "Your account is inactive, reactivate it to use the app" && (
        <Button
          disabled={reactivateIsSucess}
          onClick={handleSubmit((data) => {
            return reactivate(data);
          })}
          type="primary"
        >
          {!reactivateIsPending ? "Reactivate" : <SmallSpinner />}
        </Button>
      )}
      {!reactivateIsSucess && (
        <p className="text-center">{reactivateError?.message}</p>
      )}
    </div>
  );
}
