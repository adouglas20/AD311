// src/App.jsx
import RecipeGallery from './RecipeGallery';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', padding: '40px 0' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#2c3e50' }}>Community Cookbook</h1>
        <p>Explore our favorite hand-picked recipes</p>
      </header>

      <main>
        <RecipeGallery />
      </main>
    </div>
  );
}

export default App;