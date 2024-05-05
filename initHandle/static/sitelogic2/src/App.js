import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css'; // Import styles
import LoginForm from './LoginForm';
import AdminPage from './AdminPage';
// import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import RegisterPage from './RegisterPage';
import CartPage from './CustomerCart';
import UnauthorizedPage from './UnauthorizedPage'; 

function App() {
  return (
    <Router> {/* Set up the router */}
      <div className="App">
        <header className="App-header"> {/* Header section */}
          {/* <img src={logo} className="App-logo" alt="logo" /> Logo */}
          <p>
            Welcome to the main page. 
            <ul>
              <li> <Link to="/login">Go to Login Page</Link> {/* Navigation link to login */}</li>
              <li><Link to="/admin">Go to Admin Page</Link> {/* Navigation link to admin */}</li>
              <li><Link to="/register">Register!</Link></li>
              <li> <Link to="/cart">Go to Cart</Link> {/* Navigation link to login */}</li>
              <li> <Link to="/products">Go to Products</Link> {/* Navigation link to admin */}</li>
            {/* <Link to="/register">Register!</Link>  */}
            </ul>

          </p>
        </header>

        <Routes> {/* Define routes */}
          <Route path="/cart" element={<CartPage />} /> {/* Cart page */}
          <Route path="/login" element={<LoginForm />} /> {/* Route for login */}
          <Route path="/unauthorized" element={<UnauthorizedPage />} /> {/* Unauthorized route */}
          {/* <ProtectedRoute exact path="/admin" component={AdminPage} /> Protected Route */}
          <Route path="/products" element={<ProductList />} /> {/* Home page showing the product list */}
          <Route path="/product/:id" element={<ProductDetail />} /> {/* Dynamic route for product detail */}
          <Route path="/admin" element={<AdminPage />} /> { }
          <Route path="/register" element={<RegisterPage />} /> { }
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Export the App component
