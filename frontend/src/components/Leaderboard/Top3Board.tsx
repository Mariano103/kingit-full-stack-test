import { User } from "../../models/User";

interface Top3BoardProps {
    top3Users: User[];
}

const customStylesByRank: Record<string, string> = {
    "1": "h-44 bg-yellow-200",
    "2": "h-36 bg-gray-200",
    "3": "h-32 bg-gray-300",
}

const formattedRanks: Record<string, string> = {
    "1": "1st",
    "2": "2nd",
    "3": "3rd"
}

export default function Top3Board({ top3Users }: Top3BoardProps) {
    if (top3Users.length < 3) return <></>;

    const sorted = [top3Users[1], top3Users[0], top3Users[2]];

    return (
        <div className="flex items-end justify-center space-x-4 h-fit">
            {sorted.map((user) => (
                <div className="flex flex-col items-center" key={user.id}>
                    <img
                        className="w-16 h-16 rounded-full mb-2 object-cover"
                        src={user.avatarUrl}
                        alt={`rank ${user.rank}`}
                    />
                    <p className="text-gray-700 font-semibold">{user.name.split(" ")[0]}</p>
                    <div className={`rounded-lg w-24 flex flex-col items-center justify-end ${customStylesByRank[user.rank.toString()]}`}>
                        <p className="text-gray-500 mb-1">
                            {formattedRanks[user.rank.toString()]}
                        </p>
                        <p className="bg-white rounded-full px-4 py-1 text-sm mb-2">{user.points} PTS</p>
                    </div>
                </div>
            ))}
        </div>
    )
}