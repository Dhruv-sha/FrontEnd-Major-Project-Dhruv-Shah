import { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..." height={700} width={400}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Welcome to ABC pizzaaas</h5>
                                <p>Where every pizza is a slice of heaven</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.pexels.com/photos/845798/pexels-photo-845798.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..."   height={700}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Pizza for any meal.</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..."  height={700}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>This is our generation petrol</h5>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                </>
        )
    }
}


export default Home;