import { useMemo } from "react";
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
        <button>
            {left}
            {center}
            {right}
        </button>
    )
}