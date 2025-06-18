import Pepperoni from '../assets/images/pepperoni.jpg';
import Margherita from '../assets/images/margherita.jpg';
import PedroTechSpecial from '../assets/images/pedrotechspecial.jpg';
import Vegan from '../assets/images/vegan.jpg';
import Pineapple from '../assets/images/pineapple.jpg';
import Expensive from '../assets/images/expensive.jpg';

export type MenuItemType = {
    name: string;
    image: string;
    price: number;
};

export const MenuList: MenuItemType[] = [
    {
        name: 'Pizza de Pepperoni',
        image: Pepperoni,
        price: 40.00,
    },
    {
        name: 'Pizza de Marguerita',
        image: Margherita,
        price: 35.00,
    },
    {
        name: 'Especial Nostra',
        image: PedroTechSpecial,
        price: 150.00,
    },
    {
        name: 'Pizza Vegana',
        image: Vegan,
        price: 35.00,
    },
    {
        name: 'Pizza de Abacaxi',
        image: Pineapple,
        price: 30.00,
    },
    {
        name: 'Pizza Especial',
        image: Expensive,
        price: 100.00,
    },
];
