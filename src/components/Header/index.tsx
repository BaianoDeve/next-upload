import React, { ReactNode, useState } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

// import { MotionProps } from 'framer-motion';

import {
  Container,
  Content,
  Logo,
  MenuContainer,
  MenuItem,
  MenuButton,
  Icon,
  RightContent,
  AvatarContainer,
  Button,
  ButtonText,
  AvatarImg
} from './styles';

import LogoImg from '../../assets/Logo.svg';
import LoginIcon from '../../assets/icons/Login.svg';

type HeaderProps = {
  children?: ReactNode;
};

type AvatarProps = {
  avatarUrl?: string;
  nome?: string;
};

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <Container>
      <Content>
        <Logo>
          <Link href="/">
            <LogoImg />
          </Link>
        </Logo>
        <Menu />
        <RightContent>
          <Avatar
            avatarUrl="https://tsukimangas.com/avatar/2305.jpg?t=1613581383188"
            nome="Baiano"
          />
        </RightContent>
      </Content>
    </Container>
  );
};

export const Menu: React.FC = () => {
  const [isVisibled, setVisibled] = useState(false);
  const { pathname } = useRouter();

  return (
    <>
      <MenuButton onClick={() => setVisibled(!isVisibled)}>
        <Icon close={isVisibled} />
      </MenuButton>
      <MenuContainer visibled={isVisibled}>
        <MenuItem className={pathname === '/' ? 'active' : ''}>
          <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem className={pathname === '/lancamentos' ? 'active' : ''}>
          <Link href="/lancamentos">Lançamentos</Link>
        </MenuItem>
        <MenuItem className={pathname === '/series' ? 'active' : ''}>
          <Link href="/series">Series</Link>
        </MenuItem>
      </MenuContainer>
    </>
  );
};

export const Avatar: React.FC<AvatarProps> = ({ nome, avatarUrl }) => {
  const { pathname } = useRouter();

  return (
    <AvatarContainer>
      {/* <Button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ButtonText>Login</ButtonText>
        <LoginIcon />
      </Button> */}
      <Link href="/profile">
        <AvatarImg
          src={avatarUrl}
          alt={nome}
          layout
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          className={pathname === '/profile' ? 'active' : ''}
        />
      </Link>
    </AvatarContainer>
  );
};
