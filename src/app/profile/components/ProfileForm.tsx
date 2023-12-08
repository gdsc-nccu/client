"use client";

import { useFormState, useFormStatus } from "react-dom";
import InputModal from "./InputModal";

type ProfileFormType = {
  name: string;
  phone: string;
  studentId: string;
  major: string;
};

const ProfileForm = ({ user }: { user: ProfileFormType }) => {
  const { pending } = useFormStatus();
  const [, formAction] = useFormState(() => {}, null);

  return (
    <form action={formAction} className="flex flex-col mt-8 space-y-4">
      <InputModal id="name" defaultValue={user.name} labelText="姓名" />
      <InputModal id="phone" defaultValue={user.phone} labelText="手機" />
      <InputModal
        id="studentId"
        defaultValue={user.studentId}
        labelText="學號"
      />
      <InputModal id="major" defaultValue={user.major} labelText="系級" />

      <button
        type="submit"
        aria-disabled={pending}
        className="w-max px-6 py-1.5 mt-6 text-secondary bg-info-content rounded-full"
      >
        儲存
      </button>
    </form>
  );
};

export default ProfileForm;
