import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Colors } from "./Variables"
import { GatsbyImage } from "gatsby-plugin-image"
import { Button } from "./Button"
import { ImLocation } from "react-icons/im"

function Trips( {heading} ) {
  const data = useStaticQuery(graphql`
    query Trips {
      allTripsJson {
        nodes {
          alt
          button
          name
          img {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWraper>
        {/* {getTrips(data)} */}
        {data.allTripsJson.nodes.map((item, index) => (
          <ProductCard key={index}>
            <ProductImage
              image={item.img.childImageSharp.gatsbyImageData}
              alt={item.alt}
            />
            <ProductInfo>
              <TextWrap>
                <ImLocation />
                <ProductTitle>{item?.name}</ProductTitle>
              </TextWrap>
              <Button
                to="/trips"
                primary="true"
                round="true"
                css={`
                  position: absolute;
                  top: 420px;
                  font-size: 14px;
                `}
              >
                {item?.button}
              </Button>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsWraper>
    </ProductsContainer>
  )
}

export default Trips

export const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: ${Colors.white};
`
export const ProductsHeading = styled.div`
  color: ${Colors.black};
  margin-bottom: 5rem;
  text-align: center;
  font-size: clamp(1.2rem, 5vw, 3rem);
`
export const ProductsWraper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-content: center;
  padding: 0 2rem;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`
export const ProductCard = styled.div`
  width: 100%;
  height: 500px;
  line-height: 2;
  border-radius: 10px;
  position: relative;
  transition: 0.2s ease;
  cursor: pointer;
`

export const ProductImage = styled(GatsbyImage)`
  position: relative;
  height: 100%;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    filter: brightness(100%);
  }
`
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
  @media screen and (max-width: 868px) {
    padding: 0 1rem;
  }
`
export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
  font-size: 1rem;
  margin-left: auto.5rem;
  color: ${Colors.white};
`
export const ProductTitle = styled.div`
  margin-left: 1rem;
`
