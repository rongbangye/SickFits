Front-End:

- React: Library for building user interfaces. Really good at taking data, putting into templates and then rendering it out to the DOM (web browser). And When that data that's in your templates updates, React is really good at knowing how to efficiently and quickly update that on the page.
- Next.js: Framework for React, it takes the good stuff of React and then it adds things like routing, pages, static rendering or on-demand server rendering, images.
- Apollo Client: Does all the stuff around GraphQL. And in order to query all of the items that we want, in order to create charges and charges credit card and all that, we need a way to interface with our graphQL API, and to load in the data, provide loading states, provide error states. We needs something that can cache data, so we're not unecessarily fetching that from the network. Apollo is like a middle man fetch data from GraphQL and then injects it into our React application.
- Styled Components: Scope CSS in React and reusable styles.

Backend:

- Keystone.js: Framework that gives us a headless CMS which allows you to log in to your CMS. We can create all of our different data types like cart items and actual items and allows us to upload photos. It gives us a really nice interface to manage data. Keystone is going to provide us a graphQL API base on all of the crud, create, read, update, delete operations in our CMS here. And then Apollo will make the queries from to keystone and put the data into our Next.js app.
  - Node
  - MongoDB: Database (Optional, we can use PostgreSQL or Prisma as database )
