import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

function NavBar() {
  const router = useRouter();

  return (
    <nav className="bg-white shadow">
      <Head>
        <title>Yinuo Chen Photography</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
              <Link href = "/photo" className="text-gray-500 hover:text-gray-700 transition-colors ease-in-out duration-150 transform hover:scale-105">
                Yinuo Chen Photography
              </Link>
          </div>
          <div className="flex items-center">
              <a href={'/photo'}className={`px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:underline transition-colors ease-in-out duration-150 ${router.pathname === '/' ? 'underline' : ''}`}>
                HOME
              </a>
              <a href ={'/book'}className={`px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:underline transition-colors ease-in-out duration-150 ${router.pathname === '/book' ? 'underline' : ''}`}>
                BOOK A SESSION
              </a>
              {/* <a className={`px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:underline transition-colors ease-in-out duration-150 ${router.pathname === '/developer' ? 'underline' : ''}`}>
                DEVELOPER PROFILE
              </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
