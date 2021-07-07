import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 72px 120px 0;
`;

/* ------- Search ------- */

export const Hero = styled.div`
  width: 100%;
  height: 350px;
  margin: 72px 0 0;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
      0deg,
      rgba(18, 18, 20, 0.6),
      rgba(18, 18, 20, 0.6)
    ),
    url('/hero.jpg') no-repeat;
  background-position: 30% 30%;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(0deg, #121214 0%, rgba(0, 0, 0, 0) 35.85%);
    z-index: ${({ theme }) => theme.zIndexs.bannerBefore};
  }
`;

export const TitleHero = styled.h2`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.title};
  font-size: 24px;
  z-index: ${({ theme }) => theme.zIndexs.banner};
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 650px;
  height: 50px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.title};
  z-index: ${({ theme }) => theme.zIndexs.banner};
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;
  padding: 0 16px;
  border: 0;
  background: ${({ theme }) => theme.colors.success};
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  border: 0;
  border-radius: 5px 0 0 5px;
  padding: 0 16px;
  outline: none;
  color: ${({ theme }) => theme.colors.mediumGrey};

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

/* ---X--- Search ---X--- */
