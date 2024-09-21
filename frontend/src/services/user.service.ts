import { useMutation, useQuery } from "@tanstack/react-query";

import { User } from "../models/User";

export const useUserListQuery = () => {
    const response = useQuery({
        queryKey: ["getUserList"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3000/api/get_users");
            return await response.json();
        }
    });

    return {
        ...response,
        data: (response.data || []) as User[]
    }
}

interface UpdateUserRequest {
    id: number;
    points: number;
}

export const useUpdateUserMutation = () => {
    return useMutation({
        mutationKey: ["updateUser"],
        mutationFn: async (payload: UpdateUserRequest) => {
            await fetch("http://localhost:3000/api/update_user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            })
        }
    })
}