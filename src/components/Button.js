import { Link } from 'gatsby';
import styled from 'styled-components';
import { Colors } from './Variables';

export const Button = styled(Link)`
   background: ${props => props.primary? Colors.primary: Colors.primary2};
   white-space: nowrap;
   padding: ${props=> props.big ? '16px 40px': '10px 32px'};
   font-size: ${({big})=> (big ? '20px': '16px')};
   outline: none;
   color: ${Colors.white};
   max-width: 100%;
   cursor: pointer;
   text-decoration: none;
   transition: .3s !important;
   border-radius: ${({round})=> (round?'50px':'none')};
   &:hover{
    background: ${({primary}) => (primary ? Colors.primary2 : Colors.primary)};
    transform: translateY(-2px);
   }
   
`