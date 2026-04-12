import NavbarClient from '@/components/NavbarClient';
import {getSectors} from '@/sanity/lib/sectors';

const Navbar = async () => {
  const sectors = await getSectors();

  return <NavbarClient sectors={sectors} />;
};

export default Navbar;
