import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';
import { QUERIES } from '../../constants';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <ScrollContainer>
          <SportsStories>
            {SPORTS_STORIES.map((data) => (
              <MiniStory key={data.id} {...data} />
            ))}
          </SportsStories>
        </ScrollContainer>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr;
  }
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media ${QUERIES.tabletOnly} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SportsSection = styled.section`
  overflow: hidden;
`;

const ScrollContainer = styled.div`
  overflow: scroll;
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(5, 220px);
  }
`;

export default SpecialtyStoryGrid;
