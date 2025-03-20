import BearCounter from './BearCounter';
import BearControls from './BearControls';
import BearInput from './BearInput';

export default function ZustandDemo() {
  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Zustand Demo</h1>
      <BearCounter />
      <BearControls />
      <BearInput />
      
      <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        <p className="text-center">
          This demo shows how Zustand manages state across components.
          Each component subscribes only to the state it needs.
        </p>
      </div>
    </div>
  );
}
