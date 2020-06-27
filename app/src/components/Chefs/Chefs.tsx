import * as React from 'react';
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import styled from "styled-components";

import AddChef from './AddChef';
import AddRestaurant from './AddRestaurant';


interface Props { }
interface Restaurant {
    id: string;
    name: string;
}
interface Chef {
    id: string;
    name: string;
    restaurants: Restaurant[];
}
interface QueryData {
    chefs: Chef[];
}

const Chef = styled.div`
    margin-bottom: 1rem;
`;

const ChefName = styled.strong`
    font-size: 1.5rem;
`;

const Restaurant = styled.span`
    background-color: #eeeeee;
    font-size: 1rem;
    font-weight: 300;
    padding: 0.25rem;
    margin: 0.25rem 0.5rem 0.25rem 0;
`;

const Restaurants = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-top: .5rem;
`;

const Wrapper = styled.div``;

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

const createRestaurantMutation = gql`
mutation($chefId: ID!, $name: String!) {
    createRestaurant(chefId: $chefId, name: $name) {
        id
        name
    }
}
`;

const createChefMutation = gql`
mutation($name: String!) {
    createChef(name: $name) {
        id
        name
    }
}
`;


const Chefs: React.FC<Props> = () => {

    const { data, loading, refetch } = useQuery(query);
    const [createRestaurant] = useMutation<{
        createRestaurant: Restaurant;
    }, {
        chefId: string;
        name: string;
    }>(createRestaurantMutation);

    const [createChef] = useMutation<{
        createChef: Chef;
    }, {
        name: string;
    }>(createChefMutation);

    if (loading) return <h4>"Loading....."</h4>

    return (
        <Wrapper>
            {data && data.chefs.map(chef => (
                <div key={chef.id}>
                    <ChefName>{chef.name} </ChefName>
                    <Restaurants>
                        {chef.restaurants.map(restaurant => (
                            <Restaurant key={restaurant.id}>
                                {restaurant.name}
                            </ Restaurant>
                        ))}
                        <AddRestaurant 
                             onAddRestaurant={async ({name}) => {
                                await createRestaurant({
                                    variables: {chefId: chef.id, name}
                                });
                                refetch()
                            }}
                        />
                    </Restaurants>
                </div>
            ))}
            <AddChef 
              onAddChef={async ({name}) => {
                await createChef({
                    variables: {name}
                });
                refetch()
            }}/> 
        </Wrapper>

    );
}

export default Chefs;