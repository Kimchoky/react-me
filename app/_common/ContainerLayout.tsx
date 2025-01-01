import React from 'react';


const ContainerLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='container mx-auto'>
        {children}
    </div>
  );
}

export default ContainerLayout;