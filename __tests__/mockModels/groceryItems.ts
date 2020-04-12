import GroceryItem, {GroceryItemType} from '../../src/models/GroceryItem';

const mockGroceryItems: GroceryItem[] = [
    {name: 'Bread', category: GroceryItemType.Starch},
    {name: 'Provolone', category: GroceryItemType.Dairy},
    {name: 'Mozzerella', category: GroceryItemType.Dairy},
    {name: 'Butter', category: GroceryItemType.Dairy},
    {name: 'Banana', category: GroceryItemType.Produce},
    {name: 'Flour', category: GroceryItemType.Baking},
];

export default mockGroceryItems;
