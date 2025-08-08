import Image from "next/image";
import { auth } from "@/auth";
import SignInButton from "./components/SignInButton";

export default async function Home() {

  const session = await auth();
  
  
  // In case there is a session user
  if (session?.user) {
    return (
      <>
        {" "}
        <p>User signed in with name: {session.user.name}</p>
        <p>User signed in with name: {session.user.email}</p>
        {session.user.image && (
          <Image 
          src={session.user.image}
          width={48}
          height={48}
          alt={session.user.name ?? "Avatar"}
          />
        )}
      </>
    )
  }

  return (
    <>
      {" "}
            <p> You Are Not Signed In</p>
      <SignInButton />
    </>
  );
}
