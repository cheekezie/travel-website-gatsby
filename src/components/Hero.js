import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { Colors } from './Variables'
import Video from '../assets/videos/travel-video.mp4'

const Hero = () => {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg src={Video} type="video/mp4" loop muted autoPlay playsInline/>
        </HeroBg>
        <HeroContent>
            <HeroItems>
                <HeroH1>Unreal Destinations</HeroH1>
                <HeroP>Out of this world</HeroP>
                <Button primary="true" big="true" round="true" to='/trips'>Travel Now</Button>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero

export const HeroContainer = styled.div`
    background: ${Colors.layoutBg};
    display: flex;
    justify-content: center;
    color: ${Colors.white};
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    align-items: center;
    margin-top: -80px;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 2;
        background: linear-gradient( 180deg,  rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
            linear-gradient(180deg, rgba(0,0,0,0.2) 0%,  transparent 100%);
    }
`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    -o-object-fit: cover;
`

export const HeroContent = styled.div`
    z-index: 3;
   //  height: calc(100vh - 80px);
    padding: 0rem calc((100vw - 1300px) / 2);
    max-height: 100%;
`
export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-width: 100%;
    padding: 0;
    color: ${Colors.white};
    line-height: 1.1;
    font-weight: bold;
`
export const HeroH1 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    padding: 0 1rem;
    font-weight: bold;

`
export const HeroP = styled.p`
    font-size: clamp(1rem, 3vw, 3rem);
    margin-bottom: 2rem;
    font-weight: 400;
`
