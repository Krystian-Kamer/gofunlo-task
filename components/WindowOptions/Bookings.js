import bookingsJson from '../../response_bookings.json';

const Bookings = () => {
  const bookings = bookingsJson.data[0];
  const participants = bookings.participants;
  const offer = bookings.product_data;
  const parent = bookings.parent;
  console.log(participants);
  const {
    trip_name: name,
    status_label: statusLabel,
    payment_status: paymentStatus,
  } = bookings;

  return (
    <div className='grid grid-cols-2 border-2 p-5 ml-10 mt-10'>
      <div>
        <h2 className='font-bold'>{name}</h2>
        <p className='mt-5'>Czy zaliczka opłacona: {statusLabel}</p>
        <p>
          Czy rezerwacja opłacona:{' '}
          {paymentStatus === 'NOT_PAID' && 'Nie opłacona'}
        </p>
        <p className='mt-5'>Rodzic: {parent.full_name}</p>
        <p>Telefon: {parent.phone}</p>
        <p>Email: {parent.email}</p>
        <p className='mt-5'>Typ: {offer.type}</p>
        <p>Kraj: {offer.country_name}</p>
        <p>Opis: {offer.description}</p>
        <p>Transport: {offer.transport_type}</p>
        <p>Kategoria: {offer.category_code}</p>
      </div>
      <div>
        {participants.map((participant) => {
          return (
            <div key={participant.id} className='pb-6'>
              <p className='font-bold'>Dziecko</p>
              <p>Imię i nazwisko: {participant.full_name}</p>
              <p>Data urodzenia: {participant.birth_date}</p>
              <p>Pesel: {participant.pesel}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Bookings;
