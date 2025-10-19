import { useEffect } from "react";

export default function Data1() {
    const [userData, setUserData] = userData([]);
    useEffect(() => {
        getUserData();
    }, [])

    async function getUserData() {
        const url = 'http://localhost:9090/api/v1/quotes/1';
        let reponse = await tetch(url);
        reponse = await reponse.json()
        setUserData(reponse, user)
    }
    return (
        <div>
            <h2>Data from API </h2>
            {
                userData && userData.map((user) => (
                    <ul className="user_last">
                        <li>{user.frist.Name}</li>
                        <li>{user.lastName}</li>
                        <li>{user.age}</li>
                    </ul>

                )
                )
            }
        </div>
    )
}