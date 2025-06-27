import ActiveUserCard from './ActiveUserCard';
import { TbMarquee } from 'react-icons/tb';
import Marquee from 'react-fast-marquee';
import { useEffect, useState } from 'react';

const ActiveUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://b11a10-server-side-iam-freak10.vercel.app/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filterUser = users.filter((user) => user.active === true);
  return (
    <div className="mt-5 mb-5  max-w-[90%]  ">
      <Marquee speed={50} gradient={false} direction="right">
        <div className="flex  gap-5 mr-4 ">
          {filterUser.map((user) => (
            <ActiveUserCard key={user.id} filterUser={user}></ActiveUserCard>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ActiveUser;
