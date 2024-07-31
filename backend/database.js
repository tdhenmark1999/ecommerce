const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'ecommerce.sqlite'
});

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const Order = sequelize.define('Order', {
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

const OrderChairs = sequelize.define('OrderChairs', {
  order_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Order,
      key: 'id'
    }
  },
  chair_id: {
    type: DataTypes.INTEGER
  }
});

const OrderTables = sequelize.define('OrderTables', {
  order_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Order,
      key: 'id'
    }
  },
  table_id: {
    type: DataTypes.INTEGER
  }
});

const OrderTops = sequelize.define('OrderTops', {
  order_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Order,
      key: 'id'
    }
  },
  top_id: {
    type: DataTypes.INTEGER
  }
});

sequelize.sync();

module.exports = { User, Order, OrderChairs, OrderTables, OrderTops };
