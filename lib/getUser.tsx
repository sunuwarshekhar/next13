const getUser = async(userId:string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if (!res.ok) throw new Error("error fetching ")
    return res.json()
}

export default getUser;