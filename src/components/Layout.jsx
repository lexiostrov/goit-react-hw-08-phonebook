import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { WrapperHeader, WrapperMain } from './Layout.styled';
import { Loader } from './Loader/Loader';
import { Navigation } from './Navigation/Navigation';
export const Layout = () => {
  return (
    <div>
      <WrapperHeader>
        <Navigation />
      </WrapperHeader>
      <WrapperMain>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </WrapperMain>
    </div>
  );
};
