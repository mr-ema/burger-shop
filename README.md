
# Burger Shop

This basic ecommerce site with an admin panel, I made it to improve my 
backend skills.

## Important
I made this site just to practice my code so don't use it in production, also
the session cookie is just a mongo _id so is no secure if you wanna use it in production
you have to use a CSRF Token or use the next-auth session that I set globally.
And move the admin panel to a separate server or use jwrToken with roles.



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`

`NEXTAUTH_URL` `NEXTAUTH_SECRET`

`GODMODE_SECRET`

`GITHUB_ID` `GITHUB_SECRET`


## Features

- ServerSide cart
- Live previews
- Admin Panel


## Run Locally

Clone the project

```bash
  git clone https://github.com/mr-ema/burger-shop.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```