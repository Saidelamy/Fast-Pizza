import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigate = useNavigation();
  const isLoading = navigate.state === 'loading';

  return (
    <>
      <div className="grid h-screen grid-rows-[auto_1fr_auto]">
        {isLoading && <Loader />}

        <Header />

        <div className="overflow-scroll">
          <main className=" mx-auto max-w-3xl  ">
            {/* نتيجه للي عملته داخل الApp componant  */}
            <Outlet />
          </main>
        </div>

        <CartOverview />
      </div>
    </>
  );
}

export default AppLayout;
