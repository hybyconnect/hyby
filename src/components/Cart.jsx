import React from "react";

const Cart = ({ selectedProjects }) => {
  return (
    <div className="max-w-5xl mx-auto mt-8">
      <h2 className="text-2xl mx-4 font-semibold mb-4">Your Selected</h2>
      {selectedProjects.length > 0 ? (
        selectedProjects.map((project) => (
          <div key={project.id} className="bg-white border-2 border-green-600 shadow-md rounded-md p-4 mb-4">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-600">{project.category}</p>
          </div>
        ))
      ) : (
        <p className="mx-4">No projects selected.</p>
      )}
    </div>
  );
};

export default Cart;