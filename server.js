const express = require("express");
const { postgraphile } = require("postgraphile");

const app = express();
const pass = process.env.HABIT_PSQL_PASS;

app.use(
  postgraphile(
    `postgres://habits:${pass}@localhost:5432/habits`,
    "public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
    }
  )
);

console.log('Starting GraphQL: http://localhost:4000/graphiql')
app.listen(process.env.PORT || 4000);