'use client';
import { GiMonkey } from 'react-icons/gi';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      <div className='bg-base-300 px-4'>
        <div className='flex max-w-7xl mx-auto justify-end gap-x-4'>
          <button>+ 48 786 823 320</button>
          <button>Pomoc i kontakt</button>
          <button> Katalogi</button>
          <button> Jak rezerwować?</button>
          <button className='hidden md:flex'> Dla firm</button>
          <button className='hidden md:flex'> Blog</button>
        </div>
      </div>
      <div className='bg-base-100 shadow-md'>
        <div className='navbar max-w-7xl mx-auto'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost lg:hidden'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
              >
                <li>
                  <a>Obozy</a>
                </li>
                <li>
                  <a>Półkolonie</a>
                  <ul className='p-2'>
                    <li>
                      <a>Atrapa 1</a>
                    </li>
                    <li>
                      <a>Atrapa 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Wycieczki szkolne</a>
                </li>
                <li>
                  <a>Atrakcje</a>
                </li>
                <li>
                  <a>Noclegi dla grup</a>
                </li>
              </ul>
            </div>
            <a className='btn btn-ghost'>
              <GiMonkey className='-rotate-12 text-red-600 text-5xl' />
              <h1 className='text-blue-900 text-3xl'>GoFunlo</h1>
            </a>
          </div>
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>
              <li>
                <a>Obozy</a>
              </li>
              <li>
                <details>
                  <summary>Półkolonie</summary>
                  <ul className='p-2'>
                    <li>
                      <a>Atrapa 1</a>
                    </li>
                    <li>
                      <a>Atrapa 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Wycieczki szkolne</a>
              </li>
              <li>
                <a>Atrakcje</a>
              </li>
              <li>
                <a>Noclegi dla grup</a>
              </li>
            </ul>
          </div>
          <div className='navbar-end gap-x-5'>
            <label className='swap swap-flip text-xl'>
              <input type='checkbox' />

              <div className='swap-on btn btn-circle border-2'>PLN</div>
              <div className='swap-off btn btn-circle border-2'>ENG</div>
            </label>
            <div className='dropdown dropdown-end'>
              <div tabIndex={0} role='button' className='m-1 font-bold text-xl'>
                £
              </div>
              <ul
                tabIndex={0}
                className='dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow'
              >
                <li>
                  <a>PLN / POLISH ZLOTY</a>
                </li>
                <li>
                  <a>USD / US DOLLAR</a>
                </li>
                <li>
                  <a>EUR / EURO</a>
                </li>
                <li>
                  <a>GBP / POUND STERLING</a>
                </li>
              </ul>
            </div>
            <button className='text-xl border-2 border-base-300 py-3 px-1 rounded-2xl hover:border-slate-400 duration-100'>
              <FaUser />
            </button>
            <button className='font-semibold hover:text-blue-800'>
              Zaloguj się
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
