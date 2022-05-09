const express = require('express');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');

const app = express();

app.use(express.json());

app.use('/user', userRoutes);
app.use('/post', postRoutes);
app.use('/categories', categoriesRoutes);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));
