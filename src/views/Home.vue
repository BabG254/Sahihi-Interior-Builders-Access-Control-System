<template>
    <div class="home-container">
      <h1>Welcome to Sahihi Interior Builders</h1>
      <p>You are logged in as {{ currentUser }}</p>
      <router-link :to="{ name: 'projects' }">View Projects</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped lang="scss">
  .home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  
    h1 {
      margin-bottom: 1rem;
    }
  
    p {
      color: #6c757d;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  
    a {
      background-color: #007bff;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      transition: background-color 0.3s ease;
  
      &:hover {
        background-color: #0056b3;
      }
    }
  }
  </style>