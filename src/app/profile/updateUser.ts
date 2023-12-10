"use server";

const updateUser = async (prevState: any, formdata: FormData) => {
  const user = {
    name: formdata.get("name"),
    phone: formdata.get("phone"),
    student_id: formdata.get("studentId"),
    major_n_grade: formdata.get("major"),
  };

  const res = await fetch("", { method: "PUT", body: JSON.stringify(user) });

  if (!res.ok) console.log(res.statusText);

  return res.json();
};

export default updateUser;
