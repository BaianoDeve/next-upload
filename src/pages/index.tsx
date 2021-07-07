import Head from 'next/head';
import { NextPage } from 'next';

import Image from 'next/image'

import Logo2 from '../../public/Logo.png'
import LogoImg from '../assets/Logo.svg';

const PageComponent: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/IconAzul.png"/>
        <title>Home</title>
      </Head>

      <main>
        <LogoImg />
        <Image src={Logo2} alt="logo" />
        <h1>Hello World</h1>
      </main>
    </div>
  );
};

export default PageComponent;
