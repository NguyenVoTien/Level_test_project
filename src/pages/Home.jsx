import React from "react";
import { Link } from "react-router-dom";
import { Img } from "components";
import profilePic from "../assets/images/profile/avatar.png";

const Home = () => {
  return (
    <>
      <div className="min-w-screen bg-gray-100 p-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Homepage</h1>
            <div>
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-700 mr-4"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-blue-500 hover:text-blue-700"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-between items-center w-full">
        <div className="flex flex-col items-start justify-start xl:w-1/2 md:w-full">
          <h2 className="mb-2 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
            Hi, I am Tien.Fr.dev
          </h2>
          <p className="my-2 font-medium">
            - Hi I am Tien.Fr.Dev, a web developer and UI/UX designer with a
            passion for creating beautiful, functional, and user-centered
            digital experiences. With one years of experience in the field. I am
            always looking for new and innovative ways to bring my client
            visions to life.
          </p>
          <p className="my-1 font-medium">
            - I believe that design is about more than just making things look
            pretty – it's about solving problems and creating intuitive,
            enjoyable experiences for users.
          </p>
          <p className="my-1 font-medium">
            - Whether I am working on a website, mobile app, or other digital
            products, I bring my commitment to design excellence and
            user-centered thinking to every project I work on. I look forward to
            the opportunity to bring my skills and passion to your next project.
          </p>
        </div>
        <div className="relative w-1/2 h-max rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:bg-dark dark:border-light">
          <div className="absolute top-0 -left-3 -z-10 w-full h-full rounded-2xl bg-dark dark:bg-light" />
          <Img
            src={profilePic}
            alt="TienFr"
            className="w-full h-auto rounded-2xl"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
