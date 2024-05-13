import { useForm } from "react-hook-form";
import FormField from "../../components/FormField";
import { useUpdateUser } from "./useUpdateUser";
import Button from "../../components/Button";
import SmallSpinner from "../../components/SmallSpinner";

export default function UpdateUserForm() {
  const { register, handleSubmit } = useForm();

  const { mutate: updateUser, error, isPending } = useUpdateUser();
  if (error) return <p>Something went wrong</p>;

  return (
    <div className="min-w-[24em] text-center">
      <h2 className="p-4">Update account</h2>
      <form
        onSubmit={handleSubmit((data) => {
          updateUser(data);
        })}
      >
        <FormField
          register={register}
          options={{ required: true }}
          htmlFor="name"
          type="name"
          id="name"
          label="Name"
          placeholder="Update your name"
        />
        <FormField
          register={register}
          options={{ required: true }}
          htmlFor="email"
          type="email"
          id="email"
          label="E-mail"
          placeholder="Update your e-mail"
        />
        <Button type="primary">
          {!isPending ? "Update" : <SmallSpinner />}
        </Button>
      </form>
    </div>
  );
}
