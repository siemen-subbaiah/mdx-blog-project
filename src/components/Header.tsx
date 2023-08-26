import Link from 'next/link';

const Header = () => {
  return (
    <nav className='px-4 md:px-20 py-4 border-b border-gray-500 flex justify-between items-center'>
      <h1 className='text-2xl'>
        <Link href='/'>MDX Blog</Link>
      </h1>
      <ul>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
