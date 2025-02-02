import Image from 'next/image';
import productsJson from '../../response_products.json';

const DedicatedOffers = () => {
  const offers = productsJson.data;
  console.log(offers);
  return (
    <div className='flex gap-y-10 ml-10 mt-10 flex-col'>
      {offers.map((offer) => {
        const {
          name,
          description,
          id,
          media,
          min_trip_start_date: startDate,
          min_trip_end_date: endDate,
        } = offer;
        const imgUrl =
          Array.isArray(media) && media.length > 0 ? media[0]?.url : null;
        return (
          <div key={id} className='border-1 px-6 py-10 border-2 rounded-lg'>
            {imgUrl && (
              <Image src={imgUrl} alt='offer image' width={300} height={300} />
            )}
            <p className='font-bold text-lg'>
              {name === ' ' ? 'Wycieczka bez nazwy' : name}
            </p>
            <p>{description}</p>
            {startDate && endDate && (
              <p>
                {startDate} do {endDate}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default DedicatedOffers;
