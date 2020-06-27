import * as React from 'react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';
import { resetApolloContext } from 'dist/src.f69400ca';

interface AddRestaurantProp {
    onAddRestaurant: ({name}: {name: string}) => Promise<void>;
}

const AddRestaurantButton = styled.button`
    border: 1px dashed #aaaaaa;
    color: #555555;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    padding: 0.25em;

    :hover {
        cursor: pointer;
    }
`

const Wrapper = styled.div`
    margin: 0.25rem 0;
`;

const TextField = styled.input`
    border: 0;
    border-bottom: 0.125rem solid #cccccc;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 300;
    padding: 0.25em;

    :focus {
        border-bottom-color: #aaaaaa;
        outline: none;
    }
`;

const AddRestaurant = ({onAddRestaurant: pushAddRestaurant}: AddRestaurantProp) => {

    const [isAdding, setIsAdding] = useState(false);

    const {formState: {isValid}, handleSubmit, register, reset} = useForm({mode: "onChange"});

    if(!isAdding) {
        return (
            <Wrapper>
                <AddRestaurantButton onClick={() => setIsAdding(true)}>
                    + Add Restaurant
                </AddRestaurantButton>
            </Wrapper>
        )
    }

    const onSubmit = handleSubmit(async ({name}) => {
        await pushAddRestaurant({name});
        reset();
        setIsAdding(false);
    })

    return (
        <Wrapper>
            <form onSubmit={onSubmit}>
                <TextField autoFocus name="name" type="text" ref={register({required: true})} />
                <button disabled={!isValid} type="submit"> Add </button>
            </form>
        </Wrapper>
    )
};

export default AddRestaurant;