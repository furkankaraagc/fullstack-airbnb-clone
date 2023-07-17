# fullstack Airbnb clone with Next.js  React, Tailwind, Prisma, MongoDB, NextAuth 



Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth.

Features:

- Tailwind design
- Responsive
- Credential authentication
- Google authentication
- Image upload using Cloudinary CDN
- Form validation and handling using react-hook-form
- Notification with react-toast
- Calendars with react-date-range
- Reservation system
- Reservation cancellation
- Creation and deletion of properties
- Pricing calculation
- Search algorithm by category, date range, map location, number of guests, rooms and bathrooms
    - For example we will filter out properties that have a reservation in your desired date range to travel
- Favorites system

### Installation

```shell
git clone https://github.com/furkankaraagc/fullstack-airbnb-clone
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```
