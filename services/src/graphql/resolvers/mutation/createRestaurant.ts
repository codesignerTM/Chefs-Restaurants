import { Restaurant } from "#root/db/models";

const createRestaurant = (
    context: any, 
    { chefId, name }: {chefId: string, name: string }) => {
    return Restaurant.create({ chefId,name });
};

export default createRestaurant;