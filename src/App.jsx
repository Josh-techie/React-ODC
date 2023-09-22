import React from 'react';
import Counter from '../counter';
import Navbar from '../Navbar';

export default function MyApp() {
  return (
    <div className="bg-blue-200">
      <Navbar />
      
    
     
      <div className="container mx-auto p-4 ">
        <h1 className="text-2xl font-bold ">Welcome to My App</h1>
        <Counter />
      </div>
    </div>
  );
}