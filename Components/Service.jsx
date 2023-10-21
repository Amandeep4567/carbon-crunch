import React from "react";

const Service = () => {
  const services = [
    {
      title: "Secure Strange",
      discription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, doloribus, quisquam facere natus minima ad possimus optio",
    },
    {
      title: "Mobile App",
      discription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, doloribus, quisquam facere natus minima ad possimus optio",
    },
    {
      title: "Exchnage Service",
      discription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, doloribus, quisquam facere natus minima ad possimus optio",
    },
    {
      title: "Investment Project",
      discription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, doloribus, quisquam facere natus minima ad possimus optio",
    },
    {
      title: "Credit card use",
      discription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, doloribus, quisquam facere natus minima ad possimus optio",
    },
    {
      title: "Planning",
      discription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, doloribus, quisquam facere natus minima ad possimus optio",
    },
  ];
  return (
    <section id="service" className="small_pb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Meet our solution for you
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                temporibus odit, doloremque sint atque accusamus nulla a
                veritatis at adipisci! Libero sint, amet sequi voluptatum
                repudiandae vero aspernatur nesciunt sed.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, i) => (
            <div key={i + 1} className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="box_wrap text-center animation"
                data-animation="fadeInUp"
                data-animation-delay={`0.${i + 1}s`}
              >
                <h4>{service.title}</h4>
                <p>{service.discription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
