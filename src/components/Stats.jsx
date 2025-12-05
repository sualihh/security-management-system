import React from 'react';

const Stats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center"
        >
          <p className="text-gray-500 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
