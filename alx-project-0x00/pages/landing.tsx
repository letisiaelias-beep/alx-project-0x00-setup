import React from "react";
import Button from "../components/Button";

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold mb-4">Landing Page</h1>

      {/* Different sizes */}
      <Button title="Small Button" styles="text-sm rounded-sm" />
      <Button title="Medium Button" styles="text-base rounded-md" />
      <Button title="Large Button" styles="text-lg rounded-full" />
    </main>
  );
};

export default Landing;
