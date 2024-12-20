import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Ensure this import is correct
import FilterOptions from '../components/FilterOptions';
import './MenuPage.css';
import { SearchContext } from '../context/SearchContext';

function MenuPage() {
  const { addToCart } = useContext(CartContext);
  const { searchQuery } = useContext(SearchContext); // Get the search query
  // Categories with images and items
  const categories = [
    {
      name: 'Starters',
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2016/11/deep-fried-brussels-d3d9a88.jpg?quality=45&resize=2000,1818',
      items: [
        { id: 1, name: 'Paneer Tikka', price: 300, review: 4.5, img: 'https://www.krumpli.co.uk/wp-content/uploads/2021/09/Paneer-Tikka-Kebabs-05.jpg',spicy: true, glutenFree: true, vegetarian: true },
        { id: 2, name: 'Spring Rolls', price: 250, review: 4.2, img: 'https://www.connoisseurusveg.com/wp-content/uploads/2022/04/baked-spring-rolls-sq.jpg' , spicy: false, glutenFree: false, vegetarian: true  },
        { id: 3, name: 'Paneer Tikka', price: 300, review: 4.5, img: 'https://www.krumpli.co.uk/wp-content/uploads/2021/09/Paneer-Tikka-Kebabs-05.jpg' ,spicy: true, glutenFree: true, vegetarian: true },
        { id: 4, name: 'Spring Rolls', price: 250, review: 4.2, img: 'https://www.connoisseurusveg.com/wp-content/uploads/2022/04/baked-spring-rolls-sq.jpg' , spicy: false, glutenFree: false, vegetarian: true  },],
    },
    {
      name: 'Main Course',
      img: 'https://sandinmysuitcase.com/wp-content/uploads/2020/04/Popular-Indian-Cuisine.jpg',
      items: [
        { id: 5, name: 'Butter Chicken', price: 350, review: 4.8, img: 'https://th.bing.com/th/id/OIP.tzG0D-E7C0rdoaIXJPdA2QHaHa?rs=1&pid=ImgDetMain',spicy: true, glutenFree: false, vegetarian: false },
        { id: 6, name: 'Biryani', price: 400, review: 4.9, img: 'https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1200,h_1799/https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-12-1200x1799.jpg',spicy: true, glutenFree: true, vegetarian: false },
        { id: 7, name: 'Butter Chicken', price: 350, review: 4.8, img: 'https://th.bing.com/th/id/OIP.tzG0D-E7C0rdoaIXJPdA2QHaHa?rs=1&pid=ImgDetMain' , spicy: true, glutenFree: false, vegetarian: false},
        { id: 8, name: 'Biryani', price: 400, review: 4.9, img: 'https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1200,h_1799/https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-12-1200x1799.jpg',spicy: true, glutenFree: true, vegetarian: false },],
    },
    {
      name: 'Desserts',
      img: 'https://th.bing.com/th/id/R.0d0414d2f9d001a1bf5ccfcaf2adcfea?rik=ehjPN4VY8HGxmA&riu=http%3a%2f%2fcdn2.tmbi.com%2fTOH%2fImages%2fPhotos%2f37%2f1200x1200%2fexps21585_THCA153054D10_15_4b.jpg&ehk=5M7Rmj5N%2b1euVev28yydLi9ifFzDTvDeF8xsvsiDJjg%3d&risl=&pid=ImgRaw&r=0',
      items: [
        { id: 9, name: 'Cheese Cake', price: 250, review: 4.7, img: 'https://static.timesofisrael.com/blogs/uploads/2021/06/GettyImages-1205169550.jpg' },
        { id: 10, name: 'Chocolate Mousse', price: 200, review: 4.6, img: 'https://th.bing.com/th/id/OIP.1cxj7ciFc3cI18O3wump7QAAAA?rs=1&pid=ImgDetMain' },
        { id: 11, name: 'Cheese Cake', price: 250, review: 4.7, img: 'https://static.timesofisrael.com/blogs/uploads/2021/06/GettyImages-1205169550.jpg' },
        { id: 12, name: 'Chocolate Mousse', price: 200, review: 4.6, img: 'https://th.bing.com/th/id/OIP.1cxj7ciFc3cI18O3wump7QAAAA?rs=1&pid=ImgDetMain' },],
    },
    {
      name: 'Beverages',
      img: 'https://images.squarespace-cdn.com/content/v1/5fffb5be41e64f18218cdc10/91c2310a-25bc-4255-a6fb-6b9cce663b4b/IMG_1277.jpg?format=1500w',
      items: [
        { id: 13, name: 'Mango Lassi', price: 120, review: 4.4, img: 'https://th.bing.com/th/id/OIP.xpvyVy-U8LxqpDtCLZF2qAHaLH?rs=1&pid=ImgDetMain' },
        { id: 14, name: 'Watermelon juice', price: 50, review: 4.1, img: 'https://th.bing.com/th/id/OIP.O5FDx7b13AWZ5jEmJgy3IQAAAA?rs=1&pid=ImgDetMain' },
        { id: 15, name: 'Mango Lassi', price: 120, review: 4.4, img: 'https://th.bing.com/th/id/OIP.xpvyVy-U8LxqpDtCLZF2qAHaLH?rs=1&pid=ImgDetMain' },
        { id: 16, name: 'Watermelon juice', price: 50, review: 4.1, img: 'https://th.bing.com/th/id/OIP.O5FDx7b13AWZ5jEmJgy3IQAAAA?rs=1&pid=ImgDetMain' },],
    },
    // Add other categories here as needed
  ];

  // State to store the selected category's items
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filters, setFilters] = useState({
    spicy: false,
    glutenFree: false,
    vegetarian: false,
    nonVegetarian: false,
  });

  const [customization, setCustomization] = useState({
    quantity: 1,
    spicyLevel: 'Medium',
    specialNotes: '',
    size: 'Regular', // Default size is Regular
    extraIngredients: [], // Track extra ingredients selected
  });
  

  
  const [selectedItem, setSelectedItem] = useState(null);

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  // Filter items based on selected filters
  const filterItems = (items) => {
    return items.filter((item) => {
      if (filters.spicy && !item.spicy) return false;
      if (filters.glutenFree && !item.glutenFree) return false;
      if (filters.vegetarian && !item.vegetarian) return false;
      if (filters.nonVegetarian && item.vegetarian) return false;
      return true;
    });
  };
  const searchItems = (items) => {
    if (!searchQuery) return items; // If no search query, return all items
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Flatten all items for search functionality
  const allItems = categories.flatMap((category) => category.items);
  const searchedItems = searchItems(allItems);
  // Handle customization changes
  const handleCustomizationChange = (e) => {
    const { name, value } = e.target;
    setCustomization((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleExtraIngredientsChange = (ingredient) => {
    setCustomization((prevCustomization) => {
      const updatedIngredients = prevCustomization.extraIngredients.includes(ingredient)
        ? prevCustomization.extraIngredients.filter((item) => item !== ingredient)
        : [...prevCustomization.extraIngredients, ingredient];
      return { ...prevCustomization, extraIngredients: updatedIngredients };
    });
  };

  // Calculate the dynamic price based on selected options
  const calculateTotalPrice = () => {
    let extraPrice = 0;
    if (customization.size === 'Large') {
      extraPrice += 50; // Additional cost for large size
    }
    if (customization.extraIngredients.includes('Cheese')) {
      extraPrice += 30; // Additional cost for cheese
    }
    if (customization.extraIngredients.includes('Mushrooms')) {
      extraPrice += 20; // Additional cost for mushrooms
    }

    return (selectedItem.price + extraPrice)* customization.quantity;
  };

  const handleAddToCart = () => {
    if (selectedItem) {
      addToCart({
        ...selectedItem,
        customization,
        totalPrice: calculateTotalPrice(), // Include the calculated total price
      });
      alert(`${selectedItem.name} has been added to the cart!`);
      setCustomization({ quantity: 1, spicyLevel: 'Medium', specialNotes: '', size: 'Regular', extraIngredients: [] });
      setSelectedItem(null); // Close the customization panel
    }
  };

  return (
    <div className="menu-page">
      <h2>Menu</h2>
       {/* Show search results if there's a search query */}
{searchQuery ? (
  <div className="search-results">
    <h3>Search Results for "{searchQuery}"</h3>
    {searchedItems.length > 0 ? (
      <div className="items-container">
        {searchedItems.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <p>⭐ {item.review}</p>
            <button onClick={() => setSelectedItem(item)}>
              Customize Order
            </button>
          </div>
        ))}
      </div>
    ) : (
      <p>No items match your search.</p>
    )}
  </div>
) : null}
<FilterOptions filters={filters} onFilterChange={handleFilterChange} />
      {/* Scrollable categories bar */}
      <div className="categories-bar">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-box"
            onClick={() => setSelectedCategory(category)}
          >
            <img src={category.img} alt={category.name} className="category-img" />
            <div className="category-header">
              <p>{category.name}</p>
            </div>
          </div>
        ))}
      </div>
      

      {/* Show items when a category is selected */}
      {selectedCategory && (
        <div className="items-container">
          <h2>{selectedCategory.name}</h2>
          {filterItems(selectedCategory.items).map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>⭐ {item.review}</p>
              <button onClick={() => setSelectedItem(item)}>
                Customize Order
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Customization Panel */}
      {selectedItem && (
        <div className="customization-panel">
          <h3>Customize your order: {selectedItem.name}</h3>
          <div className="customization-option">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={customization.quantity}
              min="1"
              onChange={handleCustomizationChange}
            />
          </div>

          <div className="customization-option">
            <label>Spicy Level</label>
            <select
              name="spicyLevel"
              value={customization.spicyLevel}
              onChange={handleCustomizationChange}
            >
              <option value="Mild">Mild</option>
              <option value="Medium">Medium</option>
              <option value="Hot">Hot</option>
            </select>
          </div>

          <div className="customization-option">
            <label>Special Notes</label>
            <textarea
              name="specialNotes"
              value={customization.specialNotes}
              onChange={handleCustomizationChange}
            />
          </div>

          {/* Size Selection */}
          <div className="customization-option">
            <label>Size</label>
            <select
              name="size"
              value={customization.size}
              onChange={handleCustomizationChange}
            >
              <option value="Regular">Regular</option>
              <option value="Large">Large</option>
            </select>
          </div>

          {/* Extra Ingredients Selection */}
          <div className="customization-option">
  <label>Extra Ingredients</label>
  <div className="checkbox-container">
    <input
      type="checkbox"
      id="cheese"
      checked={customization.extraIngredients.includes('Cheese')}
      onChange={() => handleExtraIngredientsChange('Cheese')}
    />
    <label htmlFor="cheese" className="checkbox-label">Cheese (+₹30)</label>
  </div>
  <div className="checkbox-container">
    <input
      type="checkbox"
      id="mushrooms"
      checked={customization.extraIngredients.includes('Mushrooms')}
      onChange={() => handleExtraIngredientsChange('Mushrooms')}
    />
    <label htmlFor="mushrooms" className="checkbox-label">Mushrooms (+₹20)</label>
  </div>
</div>


          {/* Display Dynamic Price */}
          <p>Total Price: ₹{calculateTotalPrice()}</p>

          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={() => setSelectedItem(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default MenuPage;