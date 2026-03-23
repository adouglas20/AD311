import React from 'react';

const RecipeGallery = () => {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"],
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 2,
      title: "Guacamole",
      ingredients: ["Avocado", "Lime", "Onion", "Cilantro"],
      image: "https://images.unsplash.com/photo-1547049082-1a12c3bf2b76?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 3,
      title: "Margherita Pizza",
      ingredients: ["Dough", "Tomato Sauce", "Mozzarella", "Basil"],
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=300"
    }
  ];

  const galleryStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px'
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '12px',
    width: '280px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    backgroundColor: '#fff'
  };

  return (
    <div style={galleryStyle}>

      {recipes.map((recipe) => (
        <div key={recipe.id} style={cardStyle}>
          <img
            src={recipe.image}
            alt={recipe.title}
            style={{ width: '100%', height: '180px', objectFit: 'cover' }}
          />
          <div style={{ padding: '15px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{recipe.title}</h3>

            <p style={{ fontWeight: 'bold', marginBottom: '5px', fontSize: '0.9rem' }}>
              Ingredients:
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '0.85rem', color: '#555' }}>

              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeGallery;