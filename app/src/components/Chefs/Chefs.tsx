import * as React from 'react';
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";


interface Props {

}

const query = gql`
{
    chefs {
        id
        name
        restaurants {
            id
            name
        }
    }
}
`;


export const Chefs: React.FC<Props> = () => {

    const { data, loading } = useQuery(query);

    return (
        <pre>{JSON.stringify(data, null, 2)}</pre>

    );
}