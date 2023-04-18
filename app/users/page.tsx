import Link from "next/link"
import getAllUsers from "../../lib/getAllUsers"
import type { Metadata } from "next"
import { Content } from "next/font/google"

export const metadata:Metadata = {
    title: "Users"
}

const UserPage = async() => {
    const usersData = getAllUsers()
    const users = await usersData

    console.log("hello")

    const content = (
        <section>
            <h2>
                <Link href="/">Back to HomePage</Link>
            </h2>
            <br />
            {users.map((user:any) => {
                return(
                    <div key={user.id}>
                        <p >
                            <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                    </div>
                )
            })}
        </section>
    )
return content    
}

export default UserPage;