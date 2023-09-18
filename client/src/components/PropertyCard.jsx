import moment from "moment/moment";

const dateDifference = (current, createdDate) => {
  const timeDifference = current - createdDate;
  const daysRemaining = Math.abs(Math.ceil(timeDifference / (1000 * 60 * 60 * 24)));
  return daysRemaining
}

const PropertyCard = ({ data }) => {
    var current = new Date();
    var createdDate = new Date(moment(data?.date).format("YYYY-MM-DD"));

    const dateDiff = dateDifference(current, createdDate);
    const dayCreatedMsg = dateDiff === 0 ? 'Today' : dateDiff === 1 ? 'Yesterday' : (dateDiff + " Days ago");

    return (
        <div className='w-80 mb-5 rounded-lg border border-[#C0C0C0] hover:border-[#340E62] hover:shadow-xl overflow-hidden' >
            <div className='relative' >
                <label className='absolute text-white font-semibold text-sm bg-[#E36957] px-7 py-2' >{data?.category === 'rent' ? "RENT" : "SALE"}</label>
                <label className='absolute right-4 bottom-4 text-black font-medium text-xs bg-white rounded-lg px-2 py-1' >{dayCreatedMsg}</label>
                <div className='absolute bg-white p-2 rounded-full right-4 top-4 cursor-pointer' >
                    <img className='h-3' src={require("../img/pin.png")} alt='pin' />
                </div>
                <img className='w-full h-[195px]' src={data?.img} alt='property' />
            </div>
            <div className='px-5' >
                <p className='font-bold my-3'>{(data?.name)}</p>
                <p className='font-bold text-[#5CA500]' >&#8377; {Intl.NumberFormat("en-US").format(data?.price)}<span className='text-sm text-black font-normal' >/month</span></p>
                <div className='flex justify-between mt-3 mb-5 text-[#919191] font-semibold' >
                    <div className='flex items-center' >
                        <img className='h-6 bg-[#E9E2F1] p-1 rounded-full mr-2' src={require("../img/location.png")} alt='location' />
                        <p>25 Km</p>
                    </div>
                    <div className='flex items-center' >
                        <img className='h-6 bg-[#E9E2F1] p-1 rounded-full mr-2' src={require("../img/bed.png")} alt='bedrooms' />
                        <p>{data?.bedrooms} BD</p>
                    </div>
                    <div className='flex items-center' >
                        <img className='h-6 bg-[#E9E2F1] p-1 rounded-full mr-2' src={require("../img/bathroom.png")} alt='bathrooms' />
                        <p>{data?.bathrooms} BA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard;
