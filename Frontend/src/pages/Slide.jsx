

const Slide = ({img,text}) => {
  return (
   <div>
    <div className="card bg-base-100 shadow-xl">
  <figure>
    <img className="w-56 h-48"
      src={img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {text}
      <div className="badge badge-secondary">NEW</div>
    </h2>
   
    <div className="card-actions">
      <div className="badge badge-outline">150000 TK</div>
      <div className="badge badge-outline">Available</div>
    </div>
  </div>
</div>
   </div>
  )
}

export default Slide