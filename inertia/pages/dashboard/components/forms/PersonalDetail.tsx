import { useForm, useRemember } from "@inertiajs/react";
import { ChangeEvent, useContext, useEffect, type FormEvent } from "react";
import CVInfoContext from "~/context/CVContext";

export default function PersonalDetail({ post }) {
  const { cvInfo, setCvInfo } = useContext(CVInfoContext);
  const form = useForm({
    firstName: post?.firstName || "",
    lastName: post?.lastName || "",
  });

  const [formState, setFormState] = useRemember({
    firstName: form.data.firstName || "",
    lastName: form.data.lastName || "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    form.setData(name, value);
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
    setCvInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }

  useEffect(() => {
    // Met à jour le contexte CVInfoContext lorsqu'un post est chargé
    setCvInfo({
      firstName: post?.firstName || "",
      lastName: post?.lastName || "",
    });
  }, [post, setCvInfo]);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    form.put(`/updateResume/${post.id}`, {
      onSuccess: () => {
        alert("Saved");
      },
      data: form.data,
    });
  }

  return (
    <div className="mt-10 rounded-lg border-t-4 border-t-blue-300 p-5 shadow-lg">
      <h2 className="text-lg font-bold">Personal Detail</h2>
      <p>Get Started with the basic information</p>

      {JSON.stringify(form.data)}

      <form onSubmit={submit}>
        <div className="mt-5 grid grid-cols-1 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <input
              type="text"
              name="firstName"
              defaultValue={post?.firstName}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-200"
              required
            />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <input
              type="text"
              name="lastName"
              defaultValue={post?.lastName}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-200"
              required
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
