<div id="top"></div>
<h3 align="center">Health Social</h3>

  <p align="center">
    A social network revolving around health
    <br />
    <a href="https://github.com/neilgebhard/social-network-health"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="https://github.com/neilgebhard/social-network-health/issues">Report Bug</a>
    ·
    <a href="https://github.com/neilgebhard/social-network-health/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A social network revolving around health

### Built With

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Postgres](https://www.postgresql.org/)

<!-- GETTING STARTED -->

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/neilgebhard/social-network-health.git
   ```
2. Install NPM packages
   ```sh
   npm i
   ```
3. Create a .env file in the root folder
4. Fill out the OAuth keys

   ```sh
    # Database

    DATABASE_URL=""

    # Google OAuth

    GOOGLE_ID=
    GOOGLE_SECRET=

    # Facebook OAuth

    FACEBOOK_ID=
    FACEBOOK_SECRET=

    # Next Auth

    NEXTAUTH_URL=
    NEXTAUTH_SECRET=
   ```

## Getting Started

Running the development server:

```bash
npm run dev
# or
yarn dev
```

The server is run on [http://localhost:3000](http://localhost:3000).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [Next.js deployment documentation](https://nextjs.org/docs/deployment)

## Prisma

Adjust database schema by creating the actual tables:

`npx prisma db push`

To configure your database to use the new schema (i.e. create tables and columns):

`npx prisma migrate dev`

To update the Prisma schema when it's changed:

`npx prisma generate`

To add data using Prisma Studio:

`npx prisma studio`

<!-- ROADMAP -->

## Roadmap

- [ ] OAuth login
- [ ] Friends
- [ ] Posts
- [ ] Pictures

## Contact

Your Name - [@neil_gebhard](https://twitter.com/neil_gebhard) - email@email_client.com

Project Link: [https://github.com/neilgebhard/social-network-health](https://github.com/neilgebhard/social-network-health)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[issues-shield]: https://img.shields.io/github/issues/neilgebhard/social-network-health.svg?style=for-the-badge
[issues-url]: https://github.com/neilgebhard/social-network-health/issues
