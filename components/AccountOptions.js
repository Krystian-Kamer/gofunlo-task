import { FaRegUser } from 'react-icons/fa6';
import { MdOutlineMessage } from 'react-icons/md';
import { LuCalendarDays } from 'react-icons/lu';
import { TbCalendarStar } from 'react-icons/tb';
import { MdLogout } from 'react-icons/md';

const AccountOptions = ({ setActiveWindow, activeWindow }) => {
  const options = [
    { icon: <FaRegUser />, label: 'Moje dane' },
    { icon: <MdOutlineMessage />, label: 'Wiadomości' },
    { icon: <LuCalendarDays />, label: 'Rezerwacje' },
    { icon: <TbCalendarStar />, label: 'Dedykowane oferty' },
    { icon: <MdLogout />, label: 'Wyloguj się' },
  ];

  return (
    <div className='flex pl-3 pr-6 py-6 flex-col items-start gap-y-4 w-1/5'>
      {options.map((option) => {
        const { icon, label } = option;
        return (
          <button
            key={label}
            className={`${
              label === activeWindow && 'rounded-xl bg-sky-100'
            } flex text-lg w-full items-center gap-2 hover:bg-sky-100 font-semibold group hover:rounded-xl duration-100 pl-3 py-4`}
            onClick={() => setActiveWindow(label)}
          >
            <span className='text-2xl'>{icon}</span>
            <span
              className={`${
                label === activeWindow && 'text-blue-700'
              } group-hover:text-blue-700`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default AccountOptions;
