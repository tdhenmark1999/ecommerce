const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { User, Order, OrderChairs, OrderTables, OrderTops } = require('./database');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/checkout', async (req, res) => {
  const { name, email, cart } = req.body;
  const user = await User.create({ name, email });
  const order = await Order.create({ amount: cart.reduce((acc, item) => acc + item.price, 0), user_id: user.id });

  for (const item of cart) {
    if (item.category === 'Chairs') {
      await OrderChairs.create({ order_id: order.id, chair_id: item.id });
    } else if (item.category === 'Table') {
      await OrderTables.create({ order_id: order.id, table_id: item.id });
    } else if (item.category === 'Top') {
      await OrderTops.create({ order_id: order.id, top_id: item.id });
    }
  }

  res.status(200).send('Order placed successfully');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
