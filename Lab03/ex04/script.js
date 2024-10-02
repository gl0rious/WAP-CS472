import { get_items, add_item, update_item_title_by_id, delete_item_by_id, get_item_title_by_id } from './data.js';

// Test adding items
console.log(add_item({ id: 1, title: 'Book 1' })); // Should return true (item added)
console.log(add_item({ id: 2, title: 'Book 2' })); // Should return true (item added)
console.log(add_item({ id: 1, title: 'Duplicate Book' })); // Should return false (ID already exists)

// Test getting all items
console.log(get_items()); // Should return the array of added items

// Test updating item title by ID
console.log(update_item_title_by_id(1, 'Updated Book 1')); // Should return true (item updated)
console.log(update_item_title_by_id(3, 'Non-existent Book')); // Should return false (ID does not exist)

// Test deleting item by ID
console.log(delete_item_by_id(2)); // Should return true (item deleted)
console.log(delete_item_by_id(3)); // Should return false (ID does not exist)

// Test getting item title by ID
console.log(get_item_title_by_id(1)); // Should return "Updated Book 1"
console.log(get_item_title_by_id(2)); // Should return null (item does not exist)
