function ServicesCard(props) {
  console.log(props.title);
  return (
    <>
      <div className="col-lg-4 col-md-6 mb-5">
        <div className="box">
          <i className={`fa-solid ${props.icon}`}></i>
          <h5>{props.title}</h5>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
      </div>
    </>
  );
}

export default ServicesCard;
