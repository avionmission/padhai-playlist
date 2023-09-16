## PadhaiPlaylist
The Netflix Experinece for Students who like studying online. If you're going to binge watch, you might as well finish the syllabus!

## Getting Started

First, add you API keys and mongodb connection string in a `.env` file:
```
DATABASE_URL=
NEXTAUTH_JWT_SECRET="NEXT-JWT-SECRET"
NEXTAUTH_SECRET="NEXT-SECRET"
NEXTAUTH_URL=http://localhost:3000/

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
