import ServicesCard from "./ServicesCard";

function Services() {
  return (
    <>
      <section id="services" className="services mt-5">
        <div className="container-md">
          <div className="head text-center">
            <div className="text">
              <span>Services</span>
              <h2>Services</h2>
            </div>
          </div>
          <div className="row">
            <ServicesCard title="Experience" icon="fa-user-gear" />
            <ServicesCard title="Marketing Goals" icon="fa-bullseye" />
            <ServicesCard title="Targetting Vission" icon="fa-lightbulb" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
