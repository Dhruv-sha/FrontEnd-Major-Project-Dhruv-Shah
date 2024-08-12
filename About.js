import { Component } from 'react';


class About extends Component {
  render() {
    return (
      <>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src="https://images.pexels.com/photos/3646171/pexels-photo-3646171.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome to ABC pizzaaas !</h1>
              <p className="lead">
                Welcome to ABC pizzaaas, where every slice tells a story of tradition, passion, and flavor. Our journey began with a simple love for authentic, handcrafted pizza made with the freshest ingredients. At ABC pizzaaas, we believe in creating more than just a meal; we create experiences that bring people together..</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              </div>
            </div>
          </div>
        </div>




        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="https://images.pexels.com/photos/23962811/pexels-photo-23962811/free-photo-of-boxes-of-pizza.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Our Story</h5>
                <p className="card-text">Share the history and inspiration behind [Your Pizza Shop Name]. Discuss how the idea was born, the passion for pizza that drives the team, and any unique experiences or milestones along the way. </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://images.pexels.com/photos/6605418/pexels-photo-6605418.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Our Ingriedents</h5>
                <p className="card-text"> Detail the fresh, high-quality ingredients that set your pizzas apart. Explain the sourcing process, the importance of using local and sustainable products.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://images.pexels.com/photos/5903315/pexels-photo-5903315.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Our menu</h5>
                <p className="card-text">Showcase the diverse and delicious offerings on your menu. Highlight fan favorites, signature pizzas, and any unique or seasonal creations</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}


export default About;