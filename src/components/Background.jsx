import React from 'react';

const Background = ({ isDark }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className={`absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-amber-500' : 'bg-amber-400'}`}></div>
      <div className={`absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 ${isDark ? 'bg-blue-600' : 'bg-blue-400'}`}></div>
    </div>
  );
};

export default Background;
