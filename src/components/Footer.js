import { Link } from "gatsby"
import React from "react"
import { CgFacebook } from "react-icons/cg"
import { FaWhatsapp } from "react-icons/fa"
import { FiInstagram, FiYoutube } from "react-icons/fi"
import styled from "styled-components"
import { Colors } from "./Variables"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Explorix</h1>
          <p>Creating the best experience for travelers</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLInk to="#">Contact</FooterLInk>
          <FooterLInk to="#">Support</FooterLInk>
          <FooterLInk to="#">Destinations</FooterLInk>
          <FooterLInk to="#">Sponsorships</FooterLInk>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Experience</FooterLinkTitle>
          <FooterLInk to="#">Submit experiences</FooterLInk>
          <FooterLInk to="#">Rate us</FooterLInk>
          <FooterLInk to="#">Agency</FooterLInk>
          <FooterLInk to="#">Influence</FooterLInk>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLInk to="#">
            <span>
              {" "}
              <FiInstagram />
            </span>{" "}
            Instagram
          </FooterLInk>
          <FooterLInk to="#">
            <span>
              <CgFacebook />{" "}
            </span>
            Facebook
          </FooterLInk>
          <FooterLInk to="#">
            <span>
              <FaWhatsapp />
            </span>{" "}
            Whatsapp
          </FooterLInk>
          <FooterLInk to="#">
            <span>
              <FiYoutube />
            </span>{" "}
            Youtube
          </FooterLInk>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

export const FooterContainer = styled.div`
  display: grid;
  background: ${Colors.lightGrey};
  grid-template-columns: repeat(2, 1fr);
  padding: 5rem calc((100vw - 1300px) / 2);
  color: ${Colors.black};
`
export const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const FooterDesc = styled.div`
  padding: 0 2rem;
  h1 {
    margin-bottom: 3rem;
    color: ${Colors.primary};
  }
  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;
  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
export const FooterLInk = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  color: ${Colors.grey1};
  margin-bottom: 0.5rem;
  transition: 0.3s ease-in-out;
  display: flex;
  align-items: center;
  span {
    margin-right: 0.5rem;
  }
  &:hover {
    color: ${Colors.primary};
  }
`
export const FooterLinkTitle = styled.h6`
  font-size: 14px;
  margin-bottom: 16px;
`
