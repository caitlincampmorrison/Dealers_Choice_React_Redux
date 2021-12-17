const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/flowers_db')
const { STRING, INTEGER, UUID, UUIDV4 } = Sequelize.DataTypes;

const flower_name = ['roses', 'tulips', 'daisies', 'lily']
const colorval = ['red', 'pink', 'yellow', 'white']
const costval = [2, 6, 1, 4]
const imageurlval = ["roses.png", "tulips.png", "daisies.png", "lily.png"]

const Flower = db.define('flower', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    name: {
        type: STRING(20)
    },
    color: {
        type: STRING(20)
    },
    cost: {
        type: INTEGER
    },
    image: {
        type: STRING
    }

})

const syncAndSeed = async() => {
    await db.sync({ force: true })
    const [roses, tulips, daisies, lily] = await Promise.all(
        flower_name.map((name, idx) => 
           Flower.create({ name, color: colorval[idx], cost: costval[idx], image: imageurlval[idx]}),
        )
    )
}

module.exports = {
    syncAndSeed,
    models: {
      Flower
    }
  };