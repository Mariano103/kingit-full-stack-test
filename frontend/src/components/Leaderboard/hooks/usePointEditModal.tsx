import { useState } from "react";
import { User } from "../../../models/User";
import { useUpdateUserMutation, useUserListQuery } from "../../../services/user.service";

export default function usePointEditModal() {
    const [isOpened, setIsOpened] = useState(false);

    const { mutateAsync } = useUpdateUserMutation();
    const { refetch } = useUserListQuery();

    const openModal = () => {
        setIsOpened(true);
    }

    const closeModal = () => {
        setIsOpened(false);
    }

    const saveChanges = async (value: User) => {
        await mutateAsync({
            id: value.id,
            points: value.points
        });
        closeModal();
        refetch();
    }

    return {
        isOpened,
        openModal,
        closeModal,
        saveChanges
    }
}