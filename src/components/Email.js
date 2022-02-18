import React from 'react'
import styled from 'styled-components'
import EmailBg from '../assets/images/email-1.jpg'
import { Button } from './Button'
import { Colors, Layout } from './Variables'

const Email = () => {
  return (
    <EmailContainer>
        <EmailContent>
            <h1>Get exclusive offers</h1>
            <p>Sign up for a newsletter to get exclusive offers on your first trip</p>
            <form action='#'>
                <FormWrap>
                    <input type="email" placeholder='Enrer your email' id='email' />
                    <Button as="button" type='submit' primary="true" round="true">Sign Up</Button>
                </FormWrap>
            </form>
        </EmailContent>
    </EmailContainer>
  )
}

export default Email

export const EmailContainer = styled.div`
    background: linear-gradient(180deg, rgba(0,0,0, 0.5) 0%,  rgba(0,0,0, 0.3) 35%,  rgba(0,0,0, 0.1) 100%), url(${EmailBg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 450px;
    padding: ${Layout.basePadding};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Colors.white};
`
export const EmailContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        text-align: center;
        font-size: clamp(1rem, 5vw, 3rem);
        padding: 0 1rem;
        margin-bottom: 1rem;
    }
    p{
        text-align: center;
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        padding: 0 1rem;
        margin-bottom: 2rem;
    }
    form{
        z-index: 10;
    }
`
export const FormWrap = styled.div`
width: 100%;
    input{
        width: 350px;
        padding: 0 1.5rem;
        height: 48px;
        border-radius: 50px;
        margin-right: 1rem;
        outline: none;
        border: none;
        text-align: center;
    }
    button{
        height: 48px;
        outline: none;
        border: none;
    }
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        pad: 0 1rem;
        input{
            width: 100%;
            margin: 0 0 1rem 0;
        }
        button{
            width: 100%;
            min-width: 350px;
        }
    }
`