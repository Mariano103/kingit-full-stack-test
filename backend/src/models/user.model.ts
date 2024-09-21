export type User = {
    id: number,
    name: string,
    points: number,
    rank: number,
    state: number,
    avatarUrl: string
};

let usersInitialData: User[] = [
    { id: 1, name: "Esther Howard", points: 52, rank: 3, state: 0, avatarUrl: "https://images.unsplash.com/photo-1575075500178-c99ef905661a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MTA0OTF8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 2, name: "Jan Kowalski", points: 49, rank: 4, state: 0, avatarUrl: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 3, name: "Wade Warren", points: 61, rank: 1, state: 0, avatarUrl: "https://images.unsplash.com/photo-1441886367417-1c946b32a980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 4, name: "Robert Fox", points: 49, rank: 4, state: 0, avatarUrl: "https://images.unsplash.com/photo-1509399693673-755307bfc4e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 5, name: "Dianne Russell", points: 54, rank: 2, state: 0, avatarUrl: "https://images.unsplash.com/photo-1510706019500-d23a509eecd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 6, name: "Olivia Parker", points: 36, rank: 6, state: 0, avatarUrl: "https://images.unsplash.com/photo-1517498327491-f903e1e281cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 7, name: "Liam Johnson", points: 36, rank: 6, state: 0, avatarUrl: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 8, name: "Emma Martinez", points: 36, rank: 6, state: 0, avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 9, name: "Noah Davis", points: 35, rank: 9, state: 0, avatarUrl: "https://images.unsplash.com/photo-1458696352784-ffe1f47c2edc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 10, name: "Ava Brown", points: 33, rank: 10, state: 0, avatarUrl: "https://images.unsplash.com/photo-1589837396034-518c01de601a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 11, name: "William Wilson", points: 30, rank: 11, state: 0, avatarUrl: "https://images.unsplash.com/photo-1440589473619-3cde28941638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 12, name: "Sophia Garcia", points: 30, rank: 11, state: 0, avatarUrl: "https://images.unsplash.com/photo-1542570106-c3d4aeb5c19c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 13, name: "James Anderson", points: 27, rank: 13, state: 0, avatarUrl: "https://images.unsplash.com/photo-1533392151650-269f96231f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 14, name: "Isabella Hernandez", points: 26, rank: 14, state: 0, avatarUrl: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 15, name: "Benjamin Lewis", points: 25, rank: 15, state: 0, avatarUrl: "https://images.unsplash.com/photo-1556227703-d6f677369617?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 16, name: "Mia Robinson", points: 23, rank: 16, state: 0, avatarUrl: "https://images.unsplash.com/photo-1474901879171-d6f34b3a99b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 17, name: "Lucas Young", points: 22, rank: 17, state: 0, avatarUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 18, name: "Charlotte Walker", points: 21, rank: 18, state: 0, avatarUrl: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 19, name: "Henry King", points: 20, rank: 19, state: 0, avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 20, name: "Alexander Hill", points: 19, rank: 20, state: 0, avatarUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 21, name: "Evelyn Scott", points: 17, rank: 21, state: 0, avatarUrl: "https://images.unsplash.com/photo-1520529277867-dbf8c5e0b340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 22, name: "Mason Green", points: 16, rank: 22, state: 0, avatarUrl: "https://images.unsplash.com/photo-1552915170-73c2330ae617?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 23, name: "Harper Adams", points: 15, rank: 23, state: 0, avatarUrl: "https://images.unsplash.com/photo-1587397845856-e6cf49176c70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 24, name: "Elijah Baker", points: 13, rank: 24, state: 0, avatarUrl: "https://images.unsplash.com/photo-1500522144261-ea64433bbe27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 25, name: "Abigail Moore", points: 9, rank: 25, state: 0, avatarUrl: "https://images.unsplash.com/photo-1575075500178-c99ef905661a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 26, name: "Ethan Nelson", points: 8, rank: 26, state: 0, avatarUrl: "https://images.unsplash.com/photo-1539614474468-f423a2d2270c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 27, name: "Emily Reed", points: 6, rank: 27, state: 0, avatarUrl: "https://images.unsplash.com/photo-1444069069008-83a57aac43ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 28, name: "Jackson Carter", points: 5, rank: 28, state: 0, avatarUrl: "https://images.unsplash.com/photo-1566070294271-0cb77eb47f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 29, name: "Grace Clark", points: 4, rank: 29, state: 0, avatarUrl: "https://images.unsplash.com/photo-1543096222-72de739f7917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
    { id: 30, name: "Charlotte Walker", points: 2, rank: 30, state: 0, avatarUrl: "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTU5MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY5MDkyMzN8&ixlib=rb-4.0.3&q=80&w=400" },
];

class UserModel {
    static getUsers = () => usersInitialData.sort((a, b) => b.points - a.points);

    static updateUser = (id: number, newPoints: number) => {
        const users = usersInitialData
            .map((user) => ({
                ...user,
                points: user.id === id ? newPoints : user.points
            }))
            .sort((a, b) => b.points - a.points);

        let rank: number = 1;
        let prePoints: number = users[0].points;
        usersInitialData = users.map((user, index) => {
            if (prePoints != user.points) {
                prePoints = user.points;
                rank = index + 1;
            }
            if (user.rank > rank) user.state = -1;
            if (user.rank < rank) user.state = 1;
            user.rank = rank;

            return user;
        });

        return true;
    }
}

export default UserModel;