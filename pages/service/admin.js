
const baseURL = "https://localhost:3000/";

export const getUserData = async () => {
  try {
    const res = await fetch(`${baseURL}/api/admin/user`, {
      method: 'GET',
    })
    const data = await res.json();
    return data;
  } catch { (e) => console.log(e) }
}

// Adding a category
export const add_Category = async (category) => {
  try {
    const res = await fetch(`${baseURL}/api/admin/category`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category)
    })
    const data = await res.json();
    return data;

  } catch { (e) => console.log(e) }
}

// getting all categories data
export const gerCategoriesData = async () => {
  try {
    const res = await fetch(`${baseURL}/api/admin/category`, {
      method: 'GET',
    })
    const data = await res.json();
    return data.categories;
  } catch { (e) => console.log(e) }
}

// deleting category
export const deleteCategory = async (id) => {
  try {
    const res = await fetch(`${baseURL}/api/admin/category?id=${id}`, {
      method: 'DELETE',
    })
    const data = await res.json()
    return data;
  } catch { (e) => console.log(e) }
}

// getting category by id
export const getCategory = async (id) => {
  try {
    const res = await fetch(`${baseURL}/api/admin/category?id=${id}`, {
      method: 'GET',
    })
    const data = await res.json()
    return data;
  } catch { (e) => console.log(e) }
}

// Update a category
export const updateCategory = async (updateValue) => {
  try {
    const res = await fetch(`${baseURL}/api/admin/category?id=${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateValue),
    })
    const data = await res.json();
    return data;

  } catch { (e) => console.log(e) }
}

// Delete all category

export const deleteAllCategory = async () => {
  try {
    const res = await fetch(`${baseURL}/api/admin/category`, {
      method: 'DELETE',
    })
    const data = await res.json();
    return data;
  } catch { (e) => console.log(e) }
}