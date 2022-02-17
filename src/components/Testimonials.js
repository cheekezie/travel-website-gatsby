import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import { FaRegLightbulb } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import styled from 'styled-components';
import { Colors, Layout } from './Variables';

const Testimonials = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allFile(
                filter: {name: {in: ["testimonial-1", "testimonial-2"]}, 
                ext: {regex: "/(jpg)|(png)|(jpeg)/"}}
            ) {
                nodes {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
                }
            }
        }
    `)

  return (
   <Testimonialscontainer>
       <TopLine>
        Testimonials
       </TopLine>
       <Description>
         What people are saying
       </Description>
       <ContentWrapper>
           <ColumnOne>
            <Testimonial>
                <IoMdCheckmarkCircleOutline css={`color: ${Colors.orange}; font-size: 2rem; marging-bottom: 1rem;`} />
                <h3>Sean Michaels</h3>
                <p>The grestest experience of my life! It was so much  fun exploring the mountains
                    and they made it super easy to book my trip and accomodation
                </p>
            </Testimonial>
            <Testimonial>
                <FaRegLightbulb  css={`color: ${Colors.green}; font-size: 2rem; marging-bottom: 1rem;`} />
                <h3>Jorge Peters</h3>
                <p>The grestest experience of my life! It was so much  fun exploring the mountains
                    and they made it super easy to book my trip and accomodation
                </p>
            </Testimonial>
           </ColumnOne>
           <ColumnTwo>
            {data.allFile.nodes.map((image, index) => (
                <TestimonialImage key={index} image={image.childImageSharp.gatsbyImageData} alt="Testimonial image" />
            ))}
           </ColumnTwo>
       </ContentWrapper>
   </Testimonialscontainer>
  )
}

export default Testimonials

export const Testimonialscontainer =  styled.div`
    width: 100%;
    background: ${Colors.lightGrey};
    color: ${Colors.black};
    padding: ${Layout.basePadding};
    height: 100%;
`
export const TopLine =  styled.h6`
    font-size: 1rem;
    color: ${Colors.grey2};
    padding-left: 2rem;
    margin-bottom: 0.75rem;
    text-align: start;
`
export const Description =  styled.p`
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 4rem;
    padding-left: 2rem;
    font-weight: bold;
`
export const ContentWrapper =  styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
export const ColumnOne =  styled.div`
    display: grid;
    grid-template-columns: 1fr;
`

export const Testimonial =  styled.div`
    padding-top: 1rem;
    padding-right: 2rem;
    h3{
        font-style: italic;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    p{
        color: ${Colors.grey2};
    }
`
export const ColumnTwo =  styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;
    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`
export const TestimonialImage =  styled(GatsbyImage)`
    border-radius: 10px;
    height: 100%;
`