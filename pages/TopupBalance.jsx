import React from 'react';

function TopupBalance() {
  return (
    <div className='flex items-center h-screen justify-center span'>
        <div className='flex flex-col mb-10'>
      <div className='items-center w-full flex flex-col'>
      <img src='../src/assets/porky.svg' className='w-48 h-48'></img>
    </div>
    <div className='items-center flex flex-col w-full pt-4'>
    <h2 className='text-white text-4xl font-medium text-center'>Withdraw Successfull</h2>
      
    </div>
    <div className='items-center flex flex-col pt-4 px-10'>
    <p className='text-gray-500 texs-xs text-center'>Deposit are reviewed which may result in delays or funds being frozen.</p>
    </div>
    </div>
    <div className='absolute w-full bottom-0 p-4 flex flex-col'>
    <button
            type="submit"
            className="w-full flex flex-col bg-rojo text-white text-sm p-4 my-2 rounded-md hover:bg-yellow-300"
          >
            Show Details
          </button>
          <button
            type="submit"
            className="w-full flex flex-col bg-gray-800 rojo text-sm p-4 my-2 rounded-md hover:bg-yellow-300"
          >
            Done
          </button>
    </div>
    
    </div>
    
    
  );
}

export default TopupBalance;