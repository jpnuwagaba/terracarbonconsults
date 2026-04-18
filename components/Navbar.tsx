import NavbarClient from '@/components/NavbarClient';
import {getSectors} from '@/sanity/lib/sectors';
import {getServices} from '@/sanity/lib/services';

const Navbar = async () => {
  const [sectors, services] = await Promise.all([getSectors(), getServices()]);

  return <NavbarClient sectors={sectors} services={services} />;
};

export default Navbar;
