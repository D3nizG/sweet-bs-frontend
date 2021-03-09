import { OrderItem } from '.';

/**
 * Global app data
 */
export default interface AppData{
    /** a JSON web token generated by the server once a user logins in */
    jwt: string;
    /** A list of items a user has added to their cart */
    cartItems: OrderItem[];
}