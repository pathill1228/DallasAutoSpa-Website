import "bootstrap/dist/css/bootstrap.css";
import "../Styles/SlideShow.css";

function SlideShow() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg"
            className="d-block w-100 carousel-img"
            alt="CarInParkingGarage"
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>VINYL WRAPS</h3>
            <p>
              Full or partial color changes with Avery Denison and 3m Vinyl.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/32771335/pexels-photo-32771335.jpeg"
            className="d-block w-100 carousel-img"
            alt="AstonMartin"
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>CERAMIC TINTS</h3>
            <p>
              Heat-rejecting ceramic window tint for added style, privacy, and
              UV protection.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/6873174/pexels-photo-6873174.jpeg"
            className="d-block w-100 carousel-img"
            alt="Porshe"
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>CAR DETAILING</h3>
            <p>
              Interior and exterior deep cleans using high-end products for a
              showroom-quality finish.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default SlideShow;
