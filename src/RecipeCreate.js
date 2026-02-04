import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData(initialFormState);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </td>

            <td>
              <input
                name="cuisine"
                placeholder= "Cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                required
              />
            </td>

            <td>
              <input
                name="photo"
                placeholder="URL"
                value={formData.photo}
                onChange={handleChange}
                required
              />
            </td>

            <td className="content_td">
              <textarea
                name="ingredients"
                placeholder="Ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                required
              />
            </td>

            <td className="content_td">
              <textarea
                name="preparation"
                placeholder="Preparation"
                value={formData.preparation}
                onChange={handleChange}
                required
              />
            </td>

            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;