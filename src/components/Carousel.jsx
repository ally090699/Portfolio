import React from "react";

export default function Carousel({ media = [] }) {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {media.map((item, index) => {
            const isVideo = /\.(mp4|mov|webm)$/i.test(item.src);
            return (
              <div
                className={`carousel-item flex justify-center items-center w-full ${index === 0 ? "active" : ""}`}
                key={index}
              >
                {isVideo ? (
                  <video
                    className="d-block w-100 mx-auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  >
                    <source
                      src={item.src}
                      type={
                        item.src.toLowerCase().endsWith('.mov')
                          ? 'video/quicktime'
                          : `video/${item.src.split('.').pop().toLowerCase()}`
                      }
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={item.src}
                    className="d-block w-100 mx-auto"
                    alt={item.alt || `Media ${index + 1}`}
                  />
                )}
              </div>
            );
          })}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
