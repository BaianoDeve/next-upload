import styled from 'styled-components';
import { motion } from 'framer-motion';

type MenuProps = {
  visibled: boolean;
};

type IconMenuProps = {
  close: boolean;
};

/* ------- Header ------- */

export const Container = styled.header`
  display: flex;
  justify-content: center;

  position: fixed;
  top: 0px;
  z-index: 100;

  width: 100%;
  height: 72px;
  padding: 0px 30px;

  background: ${({ theme }) => theme.colors.shapes};
  transition: all 0.5s ease-in-out 0s;
  box-shadow: rgb(18, 18, 20) 0px 0.2rem 2rem;

  opacity: 1;
  transform: translateY(0px);
  visibility: visible;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1366px;
  padding: 16px 0px;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.textHighlight};
`;

/* ------- Logo ------- */

export const Logo = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  z-index: 2;

  cursor: pointer;

  @media (max-width: 470px) {
    display: none;
  }
`;

/* ---X--- Logo ---X--- */

/* ------- Menu ------- */

export const MenuButton = styled.button`
  position: relative;
  width: 24px;
  height: 32px;
  background: none;
  border: 0px;

  @media (min-width: 1041px) {
    display: none;
  }

  @media (max-width: 1040px) {
    position: relative;
    margin-left: 48px;
  }

  @media (max-width: 470px) {
    margin: 0;
  }
`;

export const Icon = styled.div<IconMenuProps>`
  position: relative;
  width: 100%;
  height: 3px;
  background: ${({ close, theme }) =>
    close ? 'transparent' : theme.colors.textSecondary};
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    left: 0px;
    height: 3px;
    background: ${({ theme }) => theme.colors.textSecondary};
    border-radius: inherit;
    transition: inherit;
    transform-origin: 50% 50%;
    top: ${({ close }) => (close ? 0 : '-7px')};
    transform: ${({ close }) => (close ? 'rotate(45deg)' : 'rotate(0)')};
  }

  &::after {
    content: '';
    top: ${({ close }) => (close ? 0 : '7px')};
    position: absolute;
    width: 100%;
    left: 0px;
    height: 3px;
    background: ${({ theme }) => theme.colors.textSecondary};
    border-radius: inherit;
    transition: inherit;
    transform-origin: 50% 50%;
    transform: ${({ close }) => (close ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;

export const MenuContainer = styled.nav<MenuProps>`
  position: absolute;
  gap: 12px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1040px) {
    width: auto;
    height: auto;
    top: calc(100% + -14px);
    left: 160px;
    flex-direction: column;
    align-items: stretch;
    padding: 24px 64px 24px 24px;
    box-shadow: rgb(0, 0, 0, 0.6) 0px 5px 20px;
    background-color: ${({ theme }) => theme.colors.shapesSecondary};
    border-radius: 5px;
    opacity: ${({ visibled }) => (visibled ? 1 : 0)};
    visibility: ${({ visibled }) => (visibled ? 'visibled' : 'hidden')};
    transform: translateY(10px);
    transition: all 0.2s ease 0s;
    z-index: 2;
  }

  @media (max-width: 470px) {
    width: 100%;
    left: 0px;
    top: 63px;
    padding: 24px 20px;
    border-radius: 0px;
  }
`;

export const MenuItem = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 8px;
  border-bottom: 2px solid transparent;
  font-size: 16px;
  font-weight: 400;
  transition: color 0.2s ease 0s, border-color 0.2s ease 0s;

  > a {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &.active {
    border-color: ${({ theme }) => theme.colors.success};
    font-weight: bold;

    > a {
      color: ${({ theme }) => theme.colors.textHighlight};
    }
  }

  @media (max-width: 1040px) {
    white-space: nowrap;
    padding: 2px 12px;
    border-bottom: 0px;
    border-left: 3px solid transparent;
  }
`;

/* ---X--- Menu ---X--- */

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1 1 0%;
  z-index: 2;
  gap: 16px;
`;

/* ------- Avatar ------- */

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;

export const Button = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  cursor: pointer;

  padding: 0 30px;
  height: 40px;

  border: 2px solid ${({ theme }) => theme.colors.success};
  border-radius: 5px;

  transition: all 0.2s ease 0s;

  > svg path {
    fill: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.success};

    > svg path {
      fill: ${({ theme }) => theme.colors.textHighlight};
    }
  }
`;

export const ButtonText = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;

  ${Button}:hover & {
    color: ${({ theme }) => theme.colors.textHighlight};
  }
`;

export const AvatarImg = styled(motion.img)`
  height: 50px;
  width: 50px;

  border: 2px solid #fff;
  border-radius: 9999px;

  object-fit: cover;
  cursor: pointer;
  transition: ease 0.2s;

  &.active {
    border-color: ${({ theme }) => theme.colors.success};
  }
`;

/* ---X--- Avatar ---X--- */
