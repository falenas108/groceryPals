export default interface GroceryItem {
    category?: GroceryItemType;
    imageUri?: string;
    name: string;
}

export enum GroceryItemType {
    Baking = 'baking',
    Dairy = 'dairy',
    Meant = 'meat',
    Produce = 'produce',
    Snacks = 'snacks',
    Starch = 'starch',
}

export const allGroceryItems: GroceryItem[] = [
    {name: 'Bread', category: GroceryItemType.Starch},
    {name: 'Provolone', category: GroceryItemType.Dairy},
    {name: 'Mozzerella', category: GroceryItemType.Dairy},
    {name: 'Butter', category: GroceryItemType.Dairy},
    {name: 'Banana', category: GroceryItemType.Produce},
];
