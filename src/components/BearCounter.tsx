"use client";

import useStore from '../store/useStore';

export default function BearCounter() {
  // Subscribe to the 'bears' state
  const bears = useStore((state) => state.bears);
  
  return (
    <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">Bear Population</h2>
      <p className="text-4xl font-bold">{bears} bears</p>
    </div>
  );
}
