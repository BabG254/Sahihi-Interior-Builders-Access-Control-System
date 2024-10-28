<template>
    <div id="app">
      <nav>
        <router-link to="/" v-if="currentUser">Home</router-link>
        <router-link to="/admin" v-if="isAdmin">Admin Panel</router-link>
        <button @click="logout">Logout</button>
      </nav>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['currentUser']),
      isAdmin() {
        return this.currentUser && this.currentUser.role === 'admin';
      },
    },
    methods: {
      logout() {
        // Implement logout logic
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  
    nav {
      background-color: #f8f9fa;
      padding: 1rem;
      margin-bottom: 1rem;
  
      a {
        color: #333;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        transition: background-color 0.3s ease;
  
        &:hover {
          background-color: #e9ecef;
        }
      }
  
      button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
  
        &:hover {
          background-color: #0056b3;
        }
      }
    }
  
    router-view {
      flex-grow: 1;
      padding: 2rem;
    }
  }
  </style>
  