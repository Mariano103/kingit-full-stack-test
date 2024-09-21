import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

import { User } from "../../models/User";

interface UserTableProps {
    users: User[];
    onRowClick: (user: User) => void;
}

export default function UserTable({
    users,
    onRowClick
}: UserTableProps) {
    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 light:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Place
                        </th>
                        <th scope="col" className="px-10 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-8 py-3">
                            Points
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user: User) =>
                            <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600" key={user.id}>
                                <td className="px-10 py-4">
                                    {user.state === 1 ?
                                        <ArrowDropDownIcon style={{ fontSize: "large", color: "red" }} /> :
                                        user.state === -1 ?
                                            <ArrowDropUpIcon style={{ fontSize: "large", color: "green" }} /> :
                                            <HorizontalRuleIcon style={{ fontSize: "small" }} />
                                    }
                                    {user.rank}
                                    {
                                        (user.rank < 10 || user.rank > 20) && user.rank % 10 === 1 ?
                                            "st" : user.rank % 10 === 2 ?
                                                "nd" : user.rank % 10 === 3 ?
                                                    "rd" : "th"
                                    }
                                </td>
                                <th
                                    scope="row"
                                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap light:text-white"
                                >
                                    <img
                                        className="w-10 h-10 rounded-full object-cover"
                                        src={user.avatarUrl}
                                        alt={user.name}
                                    />
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">{user.name}</div>
                                    </div>
                                </th>

                                <td className="px-8 py-4">
                                    <a
                                        href="#"
                                        onClick={() => onRowClick(user)}
                                        className="font-medium light:text-blue-500"
                                    >
                                        {user.points + "PTS"}
                                    </a>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}