import { Dialog, DialogPanel } from '@headlessui/react'
import { useEffect, useState } from "react";

import { User } from "../../models/User";


interface PointEditModalProps {
    open: boolean;
    user: User | undefined;
    onSave: (user: User) => void;
    closeModal: () => void;
}

export default function PointEditModal({
    open,
    user,
    onSave,
    closeModal
}: PointEditModalProps) {
    const [newPoints, setNewPoints] = useState(0);

    useEffect(() => {
        setNewPoints(user?.points || 0);
    }, [user]);

    const handleSubmit = () => {
        if (user) {
            onSave({
                ...user,
                points: newPoints
            });
        }
    }

    if (!open) return <></>

    return (
        <>
            <Dialog open={open} as="div" className="relative z-10 focus:outline-none" onClose={closeModal}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto  backdrop-blur-sm bg-[#3b3b3b73]">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 border-solid border-black"
                        >
                            <div className="p-6 space-y-6 text-center">
                                <div className="gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="points"
                                            className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                                        >
                                            Points
                                        </label>
                                        <input
                                            type="number"
                                            name="points"
                                            id="points"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                                            placeholder="Points"
                                            value={newPoints}
                                            onChange={(e) => setNewPoints(Number(e.target.value))}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center p-6 space-x-3 border-t border-gray-200 rounded-b light:border-gray-600 justify-center">
                                <button
                                    type="submit"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
                                    onClick={handleSubmit}
                                >
                                    Update
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}