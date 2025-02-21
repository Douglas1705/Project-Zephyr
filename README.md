# Zephyr Project

## Overview
This is an e-commerce project developed in React and TypeScript, with Redux for state management and Clerk for authentication. The goal of the project is to create a functional and responsive e-commerce platform.

[![View Project](https://img.shields.io/badge/View_Project-YouTube-red)](https://www.youtube.com/watch?v=MEcidf9ScaM)


## Table of Contents

1. [Installation and Execution](#installation-and-execution)
2. [Features](#features)
3. [Achieved Objectives](#achieved-objectives)
4. [Technologies Used](#technologies-used)

## Installation and Execution
Follow the steps below to set up and run the project locally:

1. Clone this repository:
   ```bash
   https://github.com/Douglas1705/Project-Zephyr.git

2. Install Npm within the project folder:
    ```bash
   npm install

3. Run the project:
    ```bash
    npm run dev

## Features

### 1. Product Catalog Navigation
- Browse through a variety of available products.
- Use filters to refine your search by category, price, etc.

### 2. Product Details
- Click on a product to see more details, including descriptions, prices, and reviews.
- Add products to the shopping cart.

### 3. Shopping Cart
- View items added to the cart.
- Update quantities or remove items as needed.

### 4. Checkout
- Process payment and complete the purchase securely.

### 5. Contact
- Fill out a contact form to send questions or feedback.


## Achieved Objectives

- **Links**: All required links have been included and redirect to their respective places.

- **Tools**: All required tools have been used in the project.

- **Rendering**: The site has been optimized to handle requests swiftly and in real-time.

- **Pagination and Filtering**: Pagination and filtering of products have been implemented on the Shop page using Redux and Json.server.

- **Loading**: Given the fast loading of images and pages, a loading indicator was used during page transitions.

- **Clerk**: Implemented for user authentication and session management.

- **Routes**: Routes were created using React Router, with the Checkout page being protected.

- **ViaCep**: Integrated ViaCep API to fetch address data in the Checkout form.

- **EC2 AWS**: To meet the requirements, I recorded a video of the instance running and accessed my project via the instance link. The machine used was a Linux Server. Here's the video link: [https://youtu.be/sp_3i4331Lw](https://youtu.be/sp_3i4331Lw).

- **S3**: All images are hosted on AWS S3.

- **Organization**: The folders have been organized intuitively for easy component location, divided mainly into Components and Pages. Components are used across multiple pages, while Pages are the site's individual pages. The Redux and Public folders (where db.json is located) are also included.

- **Code**: Efforts were made to follow code standardization as much as possible, adhering to TypeScript typing rules. Componentization was aimed at following the principle of modularization.

- **Tests**: Tests have been conducted.


## Technologies Used

### Frontend

- React
- TypeScript
- React Router
- Tailwind CSS
- Redux

### Backend Simulation 

- Json Server

### Testing Tools

- Jest
- React Testing Library

### Other Tools

- ESLint
- Prettier
- Babel
