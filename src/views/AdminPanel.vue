<template>
    <div class="admin-panel">
      <h1>Admin Panel</h1>
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }} {{ user.lastname }}</td>
            <td>{{ user.email }}</td>
            <td>
              <router-link :to="{ name: 'edit-user', params: { id: user.id } }">Edit</router-link>
              <button @click="deleteUser(user.id)" class="action-button">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminPanel',
    data() {
      return {
        users: [],
      };
    },
    mounted() {
      this.fetchUsers();
    },
    methods: {
      fetchUsers() {
        // Fetch users from API
      },
      editUser(id) {
        // Navigate to edit user page
      },
      deleteUser(id) {
        // Delete user from API
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .admin-panel {
    padding: 2rem;
  
    h1 {
      margin-bottom: 1rem;
    }
  
    h2 {
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }
  
    table {
      width: 100%;
      border-collapse: collapse;
      background-color: white;
      border-radius: 4px;
      overflow: hidden;
  
      th,
      td {
        padding: 0.75rem;
        text-align: left;
        border-bottom: 1px solid #dee2e6;
      }
  
      th {
        background-color: #f8f9fa;
        font-weight: bold;
      }
  
      tr:hover {
        background-color: #f5f5f5;
      }
    }
  
    .action-button {
      background-color: #dc3545;
      color: white;
      border: none;
      padding: 0.375rem 0.75rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
  
      &:hover {
        background-color: #c82333;
      }
    }
  }
  </style>