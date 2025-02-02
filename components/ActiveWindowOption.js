import {
  DedicatedOffers,
  MyData,
  Messages,
  Bookings,
  LogOut,
} from './WindowOptions';

const ActiveWindowOption = ({ activeWindow }) => {
  const renderWindowContent = () => {
    switch (activeWindow) {
      case 'Moje dane':
        return <MyData />;
      case 'Wiadomości':
        return <Messages />;
      case 'Rezerwacje':
        return <Bookings />;
      case 'Dedykowane oferty':
        return <DedicatedOffers />;
      case 'Wyloguj się':
        return <LogOut />;
    }
  };

  return <div className='flex flex-col w-4/5'>
    <h2 className='text-4xl font-semibold text-blue-900'>{activeWindow}</h2>
    {renderWindowContent()}
    </div>;
};
export default ActiveWindowOption;
