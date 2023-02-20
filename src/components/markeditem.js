import styled from "styled-components";
import { useMemo } from "react";


const StyledMarker = styled.span`
background-color: yellow;
font-weight: bolder;
border-radius: 2px;
`;

const StyledItem = styled.a`
color: black;
display: block;
padding: 10px;
border: none;
text-decoration: none;
&:hover {
    background-color: #4c91ba;
    color: white;
}
&:hover span{
    color: black;
}
`;

export default function MarkedItem({item, query, onClick}){

    const {left, center, right} = useMemo(
    () => getPosition(item, query), 
    [item, query]
    );

    function getPosition(item, query){
        const index = item.title.toLowerCase().indexOf(query);
        const left = item.title.slice(0, index);
        const right = item.title.slice(index + query.lenght);
        const center = item.title.slice(index, index + query.lenght);

        return{
            left, 
            center,
            right,
        };
    }

  

    return(
        <StyledItem>
            {left}
            <StyledMarker>{center}</StyledMarker>
            {right}
        </StyledItem>
    )
}