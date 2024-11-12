

const SingleBike = ({bike}) => {
    const {bike_name,cc,image,price,description,body_style}=bike
  return (
  
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
    
        <img
          className="rounded-t-lg  h-64"
          src={image}
          alt="Blog Thumbnail"
        />
      
      <div className="px-5 pt-5 pb-3">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
           {bike_name}
          </h5>
          <p className="font-medium text-xl text-red-600">TK {price}</p>
          <div className="flex gap-6">
          <p className="text-gray-600">{cc} cc</p>
          <p className="text-gray-600">{body_style}</p>
          </div>
      </div>
      <div className="p-5 flex justify-between items-center">
      <button className="btn btn-success">Buy Now</button>
      <button className="btn btn-ghost">View Details</button>
      </div>
    </div>
  );
};



export default SingleBike