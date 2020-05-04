# THE YUMMY PIZZA

It's a Project to manage pizza orders.

#### URL:

https://ancient-woodland-22839.herokuapp.com/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This project is created using laravel and react and used laravel/ui react for server side rendering

-   Node
-   PHP >7.3
-   Composer
-   MySQL >5.7

### Installing

First of all, you need to setup the DATA BASE's data in your `.env` file, like:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=pizza
DB_USERNAME=root
DB_PASSWORD=
```

-   Make sure the database was created.

Run at terminal:

`$ cd backend`

`$ composer install`

`$ php artisan migrate`

`$ php artisan db:seed`

`$ php artisan serve`

## Running the tests

### Backend:

Run at terminal:
`php artisan test`

## Built With

-   [Laravel 7](https://laravel.com/docs/7.x) - The backend framework used
-   [Composer](https://getcomposer.org/) - Dependency Management
-   [React](https://reactjs.org/) - The frontend framework user
