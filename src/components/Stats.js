import React from 'react';
import { FaMoneyCheck } from 'react-icons/fa';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { MdAirplanemodeActive, MdTimer } from 'react-icons/md';
import styled from 'styled-components';
import { Colors, Layout } from './Variables';

const Stats = () => {
    const StatsData = [
        {
         icon: (<GiEarthAfricaEurope css={`color: ${Colors.blue};`} />),
         title: "Over 100 Destinations",
         desc: "Travel to over 100 destinations"
        },
        {
         icon: (<MdAirplanemodeActive css={`color: ${Colors.orange};`} />),
         title: "Over 1 Million Trips",
         desc: "We have completed over 1 millions trips"
        },
        {
         icon: (<MdTimer css={`color: ${Colors.primary};`} />),
         title: "Fastest Support",
         desc: "Access out support team 24/7"
        },
        {
         icon: (<FaMoneyCheck css={`color: ${Colors.green};`} />),
         title: "Best Deals",
         desc: "We offer the best services"
        }
     ]
     
  return (
    <StatsContainer>
        <Heading>Why choose us</Heading>
        <Wrapper>
            {StatsData.map((item, index) => (
                <StatBox key={index}>
                    <StatBoxInner>
                        <Icon>{item.icon}</Icon>
                        <StatHeader>{item.title}</StatHeader>
                        <StatDesc>{item.desc}</StatDesc>
                    </StatBoxInner>
                </StatBox>
            ))}
        </Wrapper>
    </StatsContainer>
  )
}

export default Stats

export const StatsContainer = styled.div`
    width: 100%;
    color: ${Colors.black};
    background: ${Colors.white};
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: ${Layout.basePadding};
`
export const Heading = styled.h1`
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 3rem;
    margin-left: 2rem;
`
export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`
export const StatBox = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem;
    transition: .3s;
    margin: 0 -1.5rem;
`
export const StatBoxInner = styled.div`
    padding: 1.5rem;
   
`

export const StatHeader = styled.h3`
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: .5rem;
`
export const Icon = styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;
`
export const StatDesc = styled.p``