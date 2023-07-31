// src/redux/actions/inventoryActions.js
export const fetchInventoryData = () => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:8080/api/getuser');
      const data = await response.json();
      dispatch({ type: 'SET_INVENTORY', payload: data });
    } catch (error) {
      console.error('Error fetching inventory data:', error);
    }
  };
  
  export const addItem = (formData) => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:8080/api/adduser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Item added successfully, dispatch the action to update the store
        dispatch({ type: 'ADD_ITEM', payload: formData });
        // Display a success message
        alert('Inventory item added successfully');
      } else {
        console.error('Failed to add inventory item:', response);
        // Display an error message
        alert('Failed to add inventory item');
      }
    } catch (error) {
      console.error('Error adding inventory item:', error);
      // Display an error message
      alert('Error adding inventory item');
    }
  };
  
  // Implement updateItem and deleteItem actions similarly as addItem
  