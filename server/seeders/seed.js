const db = require('../config/connection');
const { User, Task } = require('../models');
const userSeeds = require('./userSeeds.json');
const taskSeeds = require('./taskSeeds.json');

db.once('open', async () => {
  try {
    await Task.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < taskSeeds.length; i++) {
      const { _id, taskAuthor } = await Task.create(taskSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: taskAuthor },
        {
          $addToSet: {
            tasks: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});