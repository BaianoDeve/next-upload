import Head from 'next/head';
import { NextPage } from 'next';

import { Header } from '~/components/Header';
import { SerieRow } from '~/components/SerieRow';
import {
  Container,
  Title,
  Hero,
  TitleHero,
  Search,
  SearchButton,
  SearchInput
} from '~/styles/pages/home';

import SearchIcon from '../assets/icons/Search.svg';

const user = {
  name: 'Renan Alves'
};

const lancamentosList = [
  {
    serie: {
      id: 1,
      name: '',
      capa: ''
    }
  }
];

const PageComponent: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Brotheragem Scan</title>
      </Head>
      <Header />
      <Hero>
        <TitleHero>{user.name} Bem Vindo a Brotheragem Scan!</TitleHero>
        <Search>
          <SearchInput
            type="text"
            placeholder="Encontre a sua obra favorita da Brotheragem Scan..."
          />
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </Search>
      </Hero>
      <Container
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Title>Home</Title>
      </Container>
    </>
  );
};

export default PageComponent;
