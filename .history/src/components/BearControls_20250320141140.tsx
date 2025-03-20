"use client";

import useStore from '../store/useStore';

export default function BearControls() {
  // Subscribe only to the methods we need
  const { increasePopulation, decreasePopulation, removeAllBears } = useStore(
    (state) => ({
      increasePopulation: state.increasePopulation,
      decreasePopulation: state.decreasePopulation,
      removeAllBears: state.removeAllBears,
    })
  );
  
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
      <button
        onClick={increasePopulation}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
      >
        Add Bear
      </button>
      
      <button
        onClick={decreasePopulation}
        className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
      >
        Remove Bear
      </button>
      
      <button
        onClick={removeAllBears}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
      >
        Remove All Bears
      </button>
    </div>
  );
}
