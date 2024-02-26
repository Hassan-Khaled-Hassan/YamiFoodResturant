import React from "react";
import Head from "./Head";

const blogs = () => {
  return (
    <div className="blog-box">
      <div className="containeer mx-auto">
        <Head
          head="Blog"
          par="Lorem Ipsum is simply dummy text of the printing and typesetting"
        />
        <div className="flex flex-wrap -mx-4 w-full">
          {/* Blog Post 1 */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 pl-12 mb-4 sm:px-4">
            <div className="rounded-lg overflow-hidden blog-box-inner flex flex-wrap">
              <div className="blog-img-box">
                <img
                  className="w-full h-full object-cover object-center"
                  src="images/blog-img-01.jpg"
                  alt="loading"
                />
              </div>
              <div className="p-6 blog-detail">
                <h4 className="text-lg font-semibold mb-0">
                  Duis feugiat neque sed dolor cursus.
                </h4>
                <ul className="flex mb-3">
                  <li className="mr-2">
                    <span className="text-gray-600">Post by Admin</span>
                  </li>
                  <li className="mr-2">|</li>
                  <li>
                    <span className="text-gray-600">27 February 2018</span>
                  </li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque auctor suscipit feugiat. Ut at pellentesque ante,
                  sed convallis arcu. Nullam facilisis, eros in eleifend luctus,
                  odio ante sodales augue, eget lacinia lectus erat et sem.
                </p>
                <p className="text-gray-700 mb-4">
                  Sed semper orci sit amet porta placerat. Etiam quis finibus
                  eros.
                </p>
                <a
                  href="#"
                  className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* Repeat the above structure for each blog post */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 pl-12 mb-4 sm:px-4">
            <div className="rounded-lg overflow-hidden blog-box-inner flex flex-wrap">
              <div className="blog-img-box">
                <img
                  className="w-full h-full object-cover object-center"
                  src="images/blog-img-02.jpg"
                  alt="loading"
                />
              </div>
              <div className="p-6 blog-detail">
                <h4 className="text-lg font-semibold mb-0">
                  Duis feugiat neque sed dolor cursus.
                </h4>
                <ul className="flex mb-3">
                  <li className="mr-2">
                    <span className="text-gray-600">Post by Admin</span>
                  </li>
                  <li className="mr-2">|</li>
                  <li>
                    <span className="text-gray-600">27 February 2018</span>
                  </li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque auctor suscipit feugiat. Ut at pellentesque ante,
                  sed convallis arcu. Nullam facilisis, eros in eleifend luctus,
                  odio ante sodales augue, eget lacinia lectus erat et sem.
                </p>
                <p className="text-gray-700 mb-4">
                  Sed semper orci sit amet porta placerat. Etiam quis finibus
                  eros.
                </p>
                <a
                  href="#"
                  className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* Repeat the above structure for each blog post */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 pl-12 mb-4 sm:px-4">
            <div className="rounded-lg overflow-hidden blog-box-inner flex flex-wrap">
              <div className="blog-img-box">
                <img
                  className="w-full h-full object-cover object-center"
                  src="images/blog-img-03.jpg"
                  alt="loading"
                />
              </div>
              <div className="p-6 blog-detail">
                <h4 className="text-lg font-semibold mb-0">
                  Duis feugiat neque sed dolor cursus.
                </h4>
                <ul className="flex mb-3">
                  <li className="mr-2">
                    <span className="text-gray-600">Post by Admin</span>
                  </li>
                  <li className="mr-2">|</li>
                  <li>
                    <span className="text-gray-600">27 February 2018</span>
                  </li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque auctor suscipit feugiat. Ut at pellentesque ante,
                  sed convallis arcu. Nullam facilisis, eros in eleifend luctus,
                  odio ante sodales augue, eget lacinia lectus erat et sem.
                </p>
                <p className="text-gray-700 mb-4">
                  Sed semper orci sit amet porta placerat. Etiam quis finibus
                  eros.
                </p>
                <a
                  href="#"
                  className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>{" "}
          {/* Repeat the above structure for each blog post */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 pl-12 mb-4 sm:px-4">
            <div className="rounded-lg overflow-hidden blog-box-inner flex flex-wrap">
              <div className="blog-img-box">
                <img
                  className="w-full h-full object-cover object-center"
                  src="images/blog-img-04.jpg"
                  alt="loading"
                />
              </div>
              <div className="p-6 blog-detail">
                <h4 className="text-lg font-semibold mb-0">
                  Duis feugiat neque sed dolor cursus.
                </h4>
                <ul className="flex mb-3">
                  <li className="mr-2">
                    <span className="text-gray-600">Post by Admin</span>
                  </li>
                  <li className="mr-2">|</li>
                  <li>
                    <span className="text-gray-600">27 February 2018</span>
                  </li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque auctor suscipit feugiat. Ut at pellentesque ante,
                  sed convallis arcu. Nullam facilisis, eros in eleifend luctus,
                  odio ante sodales augue, eget lacinia lectus erat et sem.
                </p>
                <p className="text-gray-700 mb-4">
                  Sed semper orci sit amet porta placerat. Etiam quis finibus
                  eros.
                </p>
                <a
                  href="#"
                  className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>{" "}
          {/* Repeat the above structure for each blog post */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 pl-12 mb-4 sm:px-4">
            <div className="rounded-lg overflow-hidden blog-box-inner flex flex-wrap">
              <div className="blog-img-box">
                <img
                  className="w-full h-full object-cover object-center"
                  src="images/blog-img-05.jpg"
                  alt="loading"
                />
              </div>
              <div className="p-6 blog-detail">
                <h4 className="text-lg font-semibold mb-0">
                  Duis feugiat neque sed dolor cursus.
                </h4>
                <ul className="flex mb-3">
                  <li className="mr-2">
                    <span className="text-gray-600">Post by Admin</span>
                  </li>
                  <li className="mr-2">|</li>
                  <li>
                    <span className="text-gray-600">27 February 2018</span>
                  </li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque auctor suscipit feugiat. Ut at pellentesque ante,
                  sed convallis arcu. Nullam facilisis, eros in eleifend luctus,
                  odio ante sodales augue, eget lacinia lectus erat et sem.
                </p>
                <p className="text-gray-700 mb-4">
                  Sed semper orci sit amet porta placerat. Etiam quis finibus
                  eros.
                </p>
                <a
                  href="#"
                  className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>{" "}
          {/* Repeat the above structure for each blog post */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 pl-12 mb-4 sm:px-4">
            <div className="rounded-lg overflow-hidden blog-box-inner flex flex-wrap">
              <div className="blog-img-box">
                <img
                  className="w-full h-full object-cover object-center"
                  src="images/blog-img-06.jpg"
                  alt="loading"
                />
              </div>
              <div className="p-6 blog-detail">
                <h4 className="text-lg font-semibold mb-0">
                  Duis feugiat neque sed dolor cursus.
                </h4>
                <ul className="flex mb-3">
                  <li className="mr-2">
                    <span className="text-gray-600">Post by Admin</span>
                  </li>
                  <li className="mr-2">|</li>
                  <li>
                    <span className="text-gray-600">27 February 2018</span>
                  </li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque auctor suscipit feugiat. Ut at pellentesque ante,
                  sed convallis arcu. Nullam facilisis, eros in eleifend luctus,
                  odio ante sodales augue, eget lacinia lectus erat et sem.
                </p>
                <p className="text-gray-700 mb-4">
                  Sed semper orci sit amet porta placerat. Etiam quis finibus
                  eros.
                </p>
                <a
                  href="#"
                  className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* Repeat the above structure for each blog post */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 pl-12 mb-4 sm:px-4">
            <div className="rounded-lg overflow-hidden blog-box-inner flex flex-wrap">
              <div className="blog-img-box">
                <img
                  className="w-full h-full object-cover object-center"
                  src="images/blog-img-07.jpg"
                  alt="loading"
                />
              </div>
              <div className="p-6 blog-detail">
                <h4 className="text-lg font-semibold mb-0">
                  Duis feugiat neque sed dolor cursus.
                </h4>
                <ul className="flex mb-3">
                  <li className="mr-2">
                    <span className="text-gray-600">Post by Admin</span>
                  </li>
                  <li className="mr-2">|</li>
                  <li>
                    <span className="text-gray-600">27 February 2018</span>
                  </li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque auctor suscipit feugiat. Ut at pellentesque ante,
                  sed convallis arcu. Nullam facilisis, eros in eleifend luctus,
                  odio ante sodales augue, eget lacinia lectus erat et sem.
                </p>
                <p className="text-gray-700 mb-4">
                  Sed semper orci sit amet porta placerat. Etiam quis finibus
                  eros.
                </p>
                <a
                  href="#"
                  className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* Repeat the above structure for each blog post */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 pl-12 mb-4 sm:px-4">
            <div className="rounded-lg overflow-hidden blog-box-inner flex flex-wrap">
              <div className="blog-img-box">
                <img
                  className="w-full h-full object-cover object-center"
                  src="images/blog-img-08.jpg"
                  alt="loading"
                />
              </div>
              <div className="p-6 blog-detail">
                <h4 className="text-lg font-semibold mb-0">
                  Duis feugiat neque sed dolor cursus.
                </h4>
                <ul className="flex mb-3">
                  <li className="mr-2">
                    <span className="text-gray-600">Post by Admin</span>
                  </li>
                  <li className="mr-2">|</li>
                  <li>
                    <span className="text-gray-600">27 February 2018</span>
                  </li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque auctor suscipit feugiat. Ut at pellentesque ante,
                  sed convallis arcu. Nullam facilisis, eros in eleifend luctus,
                  odio ante sodales augue, eget lacinia lectus erat et sem.
                </p>
                <p className="text-gray-700 mb-4">
                  Sed semper orci sit amet porta placerat. Etiam quis finibus
                  eros.
                </p>
                <a
                  href="#"
                  className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* Repeat the above structure for each blog post */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 pl-12 mb-4 sm:px-4">
            <div className="rounded-lg overflow-hidden blog-box-inner flex flex-wrap">
              <div className="blog-img-box">
                <img
                  className="w-full h-full object-cover object-center"
                  src="images/blog-img-09.jpg"
                  alt="loading"
                />
              </div>
              <div className="p-6 blog-detail">
                <h4 className="text-lg font-semibold mb-0">
                  Duis feugiat neque sed dolor cursus.
                </h4>
                <ul className="flex mb-3">
                  <li className="mr-2">
                    <span className="text-gray-600">Post by Admin</span>
                  </li>
                  <li className="mr-2">|</li>
                  <li>
                    <span className="text-gray-600">27 February 2018</span>
                  </li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque auctor suscipit feugiat. Ut at pellentesque ante,
                  sed convallis arcu. Nullam facilisis, eros in eleifend luctus,
                  odio ante sodales augue, eget lacinia lectus erat et sem.
                </p>
                <p className="text-gray-700 mb-4">
                  Sed semper orci sit amet porta placerat. Etiam quis finibus
                  eros.
                </p>
                <a
                  href="#"
                  className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blogs;
