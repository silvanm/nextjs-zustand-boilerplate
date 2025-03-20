"use client";

import { useState } from 'react';
import useStore from '../store/useStore';

export default function BearInput() {
  const [inputValue, setInputValue] = useState('');
  const updateBears = useStore((state) => state.updateBears);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newValue = parseInt(inputValue);
    if (!isNaN(newValue) && newValue >= 0) {
      updateBears(newValue);
      setInputValue('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
      <input
        type="number"
        min="0"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter bear count"
        className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Set Bear Count
      </button>
    </form>
  );
}
