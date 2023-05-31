import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import citylogo from '../../../public/city_do_wht_horiz.jpg';

const Header: React.FC = () => {
  return (
    <header className='bg-black'>
      <Link href="/">
          <h1>./CyberTrust</h1>
      </Link>
      <Image src={citylogo} alt="Logo" className="logo" width={200} height={80}/>
      <nav>
        <ul>
          <li><Link href="/signup">Signup</Link></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Download</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </nav>
      <p>believe in the reliability, truth, ability</p>
    </header>
  );
};

export default Header;
