import * as React from "react";
import {useForm} from 'react-hook-form';
import styled from 'styled-components';

interface AddChefProps {
    onAddChef: ({name}: {name: string}) => Promise<void>;

}

const Wrapper = styled.form`
    font-family: inherit;
    font-size: 1rem;
    font-weight: 300;
`;

const TextField = styled.input`
    margin-top: 1rem;
`;

const Button = styled.button`
    display: inline-block;
    font-family: inherit;
    font-size: 1.2rem;
    font-weight: 300;
    margin-left: 0.5rem;
`;

const AddChef = ({onAddChef: pushAddChef}: AddChefProps) => {

    const {
        formState: {isSubmitting, isValid}, 
        handleSubmit, 
        register, 
        reset
    } = useForm<{name: string}>({mode: "onChange"});

    const onSubmit = handleSubmit(async ({name}) => {
        await pushAddChef({name});
        reset();
    });

    return (
        <Wrapper onSubmit={onSubmit}>
            <TextField 
                disabled={isSubmitting} 
                name="name" 
                placeholder="Chef Name" 
                type="text"
                ref={register({required: true})}
            />
            <Button disabled={isSubmitting || !isValid} type="submit" >
                Add Chef
            </Button> 
        </Wrapper>
    )
}

export default AddChef;