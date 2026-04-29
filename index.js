const app = require("./app");

const PORT = process.env.PORT || 3099;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at http://localhost:${PORT}`);
});
