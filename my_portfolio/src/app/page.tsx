import React from "react";
import Card from "components/card/card";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold">Welcome to My Next.js App</h1>
      <p className="mt-4 text-lg">
        This is the home page of your Next.js application.
      </p>
      <div className="mt-8">
        <Card />
      </div>
    </main>
  );
};

export default HomePage;
