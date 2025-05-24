import ActiveUserCard from './ActiveUserCard';
import { TbMarquee } from 'react-icons/tb';
import Marquee from 'react-fast-marquee';

const ActiveUser = ({ users }) => {
  const filterUser = users.filter((user) => user.active === true);
  return (
    <div className="mt-5 mb-5 mx-auto max-w-[90%]  ">
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
