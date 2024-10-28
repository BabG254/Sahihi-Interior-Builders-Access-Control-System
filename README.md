# Sahihi Interior Builders Access Control System

This project demonstrates a role-based access control system using NestJS for the backend and Vue.js for the frontend.

## Setup

1. Clone the repository:
git clone https://github.com/yourusername/sahihi-interior-builders.git


2. Install dependencies:
npm install


3. Set up the database (assuming MySQL):
mysql -u root -p CREATE DATABASE sahii_interior_builders; USE sahii_interior_builders;


4. Update the database configuration in `src/nestjs.config.ts`:
javascript import { TypeORMModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeORMModuleOptions = { type: 'mysql', host: 'localhost', port: 3306, username: 'root', password: 'your_password', database: 'sahihi_interior_builders', entities: ['dist/**/*.entity{.ts,js}'], synchronize: true, };


5. Run the NestJS application:
npm run start:dev


6. Open a new terminal window and navigate to the project root:
cd frontend


7. Install frontend dependencies:
npm install


8. Start the Vue.js development server:
npm run serve


## Usage

1. Open your web browser and navigate to `http://localhost:8080`.

2. You will see the home page. Click on the "Login" button to access the authentication form.

3. After logging in, you will be redirected to the home page.

4. To access the admin panel, click on the "Admin Panel" link in the navigation menu.

5. The admin panel displays a table of users. You can edit or delete users based on their roles.

## Features

- User authentication and authorization
- Role-based access control (Admin, Project Manager, Engineer)
- CRUD operations for users
- Vue.js frontend with Vuex for state management

## Technologies Used

- Backend: NestJS
- Frontend: Vue.js
- Database: MySQL
- State Management: Vuex

## Contributing

Contributions are welcome! Please feel free to submit pull requests.

## License

This project is licensed under the MIT```