import React from 'react'
import { FaMoneyCheck } from 'react-icons/fa';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { MdTimer, MdAirplanemodeActive } from 'react-icons/md';
import { Colors } from '../components/Variables';

export const StatsData = [
        {
         icon: (<GiEarthAfricaEurope css={`color: ${Colors.blue};`} />),
         title: "Over 100 Destinations",
         desc: "We have over 100 destinations covered"
        },
        {
         icon: (<MdAirplanemodeActive css={`color: ${Colors.orange};`} />),
         title: "Over 1 million trips made",
         desc: "Travel to over 100 destinations"
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
