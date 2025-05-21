import React, { useEffect, useState } from 'react';
import ActiveUserCard from './ActiveUserCard';
import { TbMarquee } from 'react-icons/tb';
import Marquee from 'react-fast-marquee';

const ActiveUser = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  console.log(user);
  const filterUser = user.filter((user) => user.active === true);
  return (
   <div className='mt-5 mb-5'>
     <Marquee speed={50} gradient={false} direction="right">
      <div className="flex gap-5">
        {filterUser.map((user) => (
          <ActiveUserCard key={user.id} filterUser={user}></ActiveUserCard>
        ))}
      </div>
    </Marquee>
   </div>
  );
};

export default ActiveUser;
