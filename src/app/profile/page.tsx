// components
import UserIcon from "@/icon/user";
import Image from "next/image";
// styles
import "./index.css";
// utils
import { getServerSession } from "next-auth";
import { fetchUser } from "./fetchUser";
import ProfileForm from "./components/ProfileForm";
import Role from "./components/Role";
import { authOptions } from "@/api/auth/[...nextauth]/route";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  // const user = await fetchUser(session!.user!.email as string)
  const user = await fetchUser("sample@email.com");

  return (
    <div className="">
      <div className="w-full h-max flex justify-center items-center space-x-6 md:space-x-28">
        {session?.user?.image ? (
          <Image
            src={session.user.image.replace("s96-c", "w400-c")}
            alt=""
            width={200}
            height={200}
            className="rounded-full w-24 md:w-52"
          />
        ) : (
          <UserIcon width={200} height={200} />
        )}
        <Role
          name={user.name}
          role={user.role}
          payment={user.payment}
          paid={user.paid}
        />
      </div>
      <ProfileForm
        user={{
          name: user.name,
          phone: "",
          studentId: user.student_id,
          major: user.major_n_grade,
        }}
      />
    </div>
  );
}
