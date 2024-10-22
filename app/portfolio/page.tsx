import React from 'react'

export default function PortfolioPage() {
  return (
    <div className="bg-secondary min-h-screen flex items-center justify-center">
    <section className="max-w-4xl mx-auto p-12 bg-neutral text-black border-4 border-dashed border-accent rounded-lg">
      <h1 className="text-4xl font-bold text-center text-primary">Portfolio</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border border-dashed border-primary p-4 shadow-md rounded-lg">
          <h3 className="text-2xl text-center font-semibold text-primary">E-commerce Website</h3>
          <p className="mt-2 text-center">An online store with full e-commerce functionality.</p>
        </div>
        <div className="border border-dashed border-primary p-4 shadow-md rounded-lg">
          <h3 className="text-2xl text-center font-semibold text-primary">Portfolio Website</h3>
          <p className="mt-2 text-center">A personal portfolio showcasing my projects.</p>
        </div>
        <div className="border border-dashed border-primary p-4 shadow-md rounded-lg">
          <h3 className="text-2xl text-center font-semibold text-primary">Custom Web Application</h3>
          <p className="mt-2 text-center">A custom web app built for clients.</p>
        </div>
      </div>
    </section>
    </div>
  );
}