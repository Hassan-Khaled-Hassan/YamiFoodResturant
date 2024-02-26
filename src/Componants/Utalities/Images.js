import React from 'react'
import Head from './Head';

const Images = () => {
  return (
    <div className="gallery-box">
      <div className="mx-auto container-fluid">
        <Head
          head="Gallery"
          par="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <div className="tz-gallery">
          <div className="flex flex-wrap -mx-2">
            <div className="sm:w-full md:w-1/3 lg:w-1/3 px-4">
              <a className="lightbox" href="images/gallery-img-01.jpg">
                <img
                  className="w-full h-auto"
                  src="images/gallery-img-01.jpg"
                  alt="Gallery Images"
                />
              </a>
            </div>
            <div className="sm:w-full md:w-1/3 lg:w-1/3 px-4">
              <a className="lightbox" href="images/gallery-img-02.jpg">
                <img
                  className="w-full h-auto"
                  src="images/gallery-img-02.jpg"
                  alt="Gallery Images"
                />
              </a>
            </div>
            <div className="sm:w-full md:w-1/3 lg:w-1/3 px-4">
              <a className="lightbox" href="images/gallery-img-03.jpg">
                <img
                  className="w-full h-auto"
                  src="images/gallery-img-03.jpg"
                  alt="Gallery Images"
                />
              </a>
            </div>
            <div className="sm:w-full md:w-1/3 lg:w-1/3 px-4">
              <a className="lightbox" href="images/gallery-img-04.jpg">
                <img
                  className="w-full h-auto"
                  src="images/gallery-img-04.jpg"
                  alt="Gallery Images"
                />
              </a>
            </div>
            <div className="sm:w-full md:w-1/3 lg:w-1/3 px-4">
              <a className="lightbox" href="images/gallery-img-05.jpg">
                <img
                  className="w-full h-auto"
                  src="images/gallery-img-05.jpg"
                  alt="Gallery Images"
                />
              </a>
            </div>
            <div className="sm:w-full md:w-1/3 lg:w-1/3 px-4">
              <a className="lightbox" href="images/gallery-img-06.jpg">
                <img
                  className="w-full h-auto"
                  src="images/gallery-img-06.jpg"
                  alt="Gallery Images"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images