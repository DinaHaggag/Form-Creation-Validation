// Initialize the Async Function:
async function fetchUserData(){
  // Define the API URL:
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Select the Data Container Element:
  const dataContainer = document.getElementById("api-data");

  // Fetch Data Using try-catch:
  try{
    const response = await fetch(apiUrl);
    const users = await response.json();
    
    // Clear the Loading Message:
    dataContainer.innerHTML = '';

    // Create and Append User List:
    const userList = document.createElement("UL");

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });
    dataContainer.appendChild(userList);
  }catch(err){
    // Error Handling:
    dataContainer.innerHTML = '';
    dataContainer.textContent = "Failed to load user data.";
  }
}

// Invoke fetchUserData on DOMContentLoaded:
document.addEventListener("DOMContentLoaded", fetchUserData);