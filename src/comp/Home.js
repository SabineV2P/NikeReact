function Home() {
  return (
    <>
      <section id="home" className="container mt-5">
        <div className="row g-2 justify-content-around">
          <div className="col-md-6 d-flex justify-content-center align-items-center order-lg-2">
            <div className="p-3">
              <img
                src="assets/media/hero.png"
                alt=""
                className="mx-auto d-block w-100 img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center order-lg-2">
            <div className="p-3">
              <h1 className="custom-highlight">NIKE MAX</h1>
              <h1>Never Stop Running</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur illum odio, id inventore quibusdam quod?
              </p>
              <button
                className="btn btn-primary rounded-3_custom-btn"
                type="button"
              >
                <i className="fa fa-shopping-cart"></i> BUY NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
