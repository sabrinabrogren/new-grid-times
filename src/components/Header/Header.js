import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroupUser>
            <button>
              <User size={24} />
            </button>
          </ActionGroupUser>
          <Subscribe>
            <Button>Subscribe</Button>
            <Link>Already a subscriber?</Link>
          </Subscribe>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.laptopAndUp} {
    color: unset;
    background: unset;
    position: absolute;
    right: 0;
    left: 0;
    padding-top: 0;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const ActionGroupUser = styled(ActionGroup)`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const Subscribe = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
  padding-top: 24px;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const Link = styled.a`
  font-family: var(--font-family-serif);
  font-size: (14 / 16) * 1rem;
  font-style: italic;
  text-decoration: underline;
`;

export default Header;
