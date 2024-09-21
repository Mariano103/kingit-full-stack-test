import { useState } from 'react';

import { User } from '../../models/User';
import usePointEditModal from './hooks/usePointEditModal';
import PointEditModal from './PointEditModal';
import Top3Board from './Top3Board';
import UserTable from './UserTable';
import { useUserListQuery } from '../../services/user.service';

export default function Leaderboard() {
  const [currentUser, setCurrentUser] = useState<User>();

  const { data: userList } = useUserListQuery();
  const top3Users = userList.filter((user) => user.rank <= 3);

  const { isOpened, openModal, closeModal, saveChanges } = usePointEditModal();

  const handleRowClick = (user: User) => {
    setCurrentUser(user);
    openModal();
  }

  return (
    <div className="border-t-8 border-blue-700">
      <h1 className="text-4xl mb-16 mt-4 w-full text-center">Welcome to Leaderboard!</h1>

      <div className='flex flex-col md:flex-row justify-center gap-8'>
        <div className='relative md:sticky top-0 md:top-1/3 h-fit'>
          <Top3Board top3Users={top3Users} />
        </div>
        <UserTable users={userList} onRowClick={handleRowClick} />
      </div>

      <PointEditModal open={isOpened} closeModal={closeModal} user={currentUser} onSave={saveChanges} />
    </div>
  );
}
