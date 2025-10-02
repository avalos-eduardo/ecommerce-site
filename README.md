# E-Commerce Site

A responsive e-commerce web application built with React, TypeScript, & TailwindCSS featuring a product catalog, shopping cart, favorites page, and global state management using the ContextAPI + useReducer.

This project exhibits a focus on UX / UI through the implementation of search functions, sort/filter capabilities, toast notifications, animations, and the option for a dark mode toggle based on the user's preference.

## Live Demo

Visit the Website: [E-Commerce Site](https://ecommerce-site-arc.pages.dev/)

## Screenshots

[!HomePageLight](./assets/HomePageLight.png);
[!ShoppingCartDark](./assets/ShoppingCartDark.png);

## Features

- **Product Catalog:** Browse products with images, descriptions, and prices fetched from the FakeStoreAPI
- **Add to Cart:** Add, remove, and update product quantities
- **Cart State Management:** Can make changes to the shopping cart or favorited items list from anywhere within the website
- **Persistent Data:** Shopping cart, favorited items, and user theme preferences are stored within localStorage for convenience
- **Dark Mode:** Toggle between light and dark themes made easy with TailwindCSS
- **Responsive Design:** Works across desktop and mobile screens

## Tech Stack

- **Frontend:** React, TypeScript, TailwindCSS, ContextAPI, useReducer, & React Router
- **API:** FakeStoreAPI
- **State Persistence:** localStorage
- **Deployment:** Cloudflare Pages
