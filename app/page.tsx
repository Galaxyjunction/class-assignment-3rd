import React from "react";
import Header from "./components/Header/page";
import Hero from "./components/Hero/page";
import Footer from "./components/Footer/page";

const HomePage = () => {
  return (
    <div className="bg-background text-text min-h-screen">
      <Hero />

      <section
        id="about"
        className="p-12 mx-auto max-w-4xl bg-secondary text-text  border-2 border-text border-dashed rounded-lg shadow-lg mt-10">
        <h2 className="text-4xl font-bold text-center text-primary">About Me</h2>
        <p className="mt-6 text-xl text-center text-text leading-relaxed">
          I am a passionate junior front-end web developer with a
          growing expertise in modern web technologies. I’ve already gained a
          strong foundation in HTML, CSS, and TypeScript, and I’m currently
          expanding my skill set by learning Next.js, a powerful framework for
          building highly efficient and scalable web applications.
        </p>
      </section>
      <br />
      <section
        id="portfolio"
        className="p-12 mx-auto max-w-4xl bg-neutral text-text border-2 border-dashed border-text rounded-lg mt-10"
      >
        <h2 className="text-4xl font-bold text-center">
          Portfolio
        </h2>
        <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-dashed border-primary p-4 shadow-md hover:shadow-lg transition-shadow rounded-lg">
            <h3 className="text-2xl text-center font-semibold text-primary">
              E-commerce Website
            </h3>
            <p className="mt-2 text-center">
              An online store with full e-commerce functionality including
              product listings, cart, and checkout.
            </p>
          </div>

          <div className="border border-dashed border-primary p-4 shadow-md hover:shadow-lg transition-shadow rounded-lg">
            <h3 className="text-2xl font-semibold text-center text-primary">
              Portfolio Website
            </h3>
            <p className="mt-2 text-center">
              A personal portfolio website showcasing my projects and skills as
              a developer.
            </p>
          </div>

          <div className="border border-dashed border-primary p-4 shadow-md hover:shadow-lg transition-shadow rounded-lg">
            <h3 className="text-2xl text-center font-semibold text-primary">
              Custom Web Application
            </h3>
            <p className="mt-2 text-center">
              A custom web app built for client needs, offering unique
              functionality and user experience.
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="p-12 max-w-4xl mx-auto m-12 bg-secondary text-white border-2 border-dashed border-accent rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-primary">
          Contact Me</h2>
        <p className="text-center text-text text-xl mt-6 leading-relaxed">
           I would love to hear about your project! Feel free to reach out for any project to meet your need.
        </p>
      </section>
    </div>
  );
};
export default HomePage;
