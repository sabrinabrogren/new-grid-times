import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { COLORS, QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStoryWrapper>
              <SecondaryStory key={story.id} {...story} />
            </SecondaryStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper>
              <OpinionStory key={story.id} {...story} />
            </OpinionStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
  @media ${QUERIES.tabletOnly} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'main-story main-story secondary-stories'
      'advertisement advertisement advertisement'
      'opinion-stories opinion-stories opinion-stories';
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondaryStoryWrapper = styled.div`
  :not(:first-child) {
    padding-top: 16px
  }
  :not(:last-child) {
    border-bottom: 1px solid ${COLORS.gray[300]};
    padding-bottom: 16px;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const OpinionStoryList = styled.div`
  @media ${QUERIES.tabletOnly} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 32px;
  }
`;

const OpinionStoryWrapper = styled.div`
  padding: 16px 0;
  :not(:last-child) {
    border-bottom: 1px solid ${COLORS.gray[300]};
  }
  @media ${QUERIES.tabletOnly} {
    border: none !important;
    
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
