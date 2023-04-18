import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({params: {userId}}:Params):Promise<Metadata>{
    const userData:Promise<User> = getUser(userId)
    const user:User = await userData

    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }
}


const UserPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId)
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  const user = await userData;

  return (
    <>
      <h2> {user.name}</h2>
      <br />
      <Suspense fallback={<h2>loading...</h2>}>
        {/* @ts-expect-error Server Component */}

        <UserPosts data={userPostsData} />
      </Suspense>
    </>
  );
};

export default UserPage
