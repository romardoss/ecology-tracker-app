const mysqlPool = require("../config/db");

module.exports.getAll = async () => {
  const [rows] = await mysqlPool.query("SELECT * FROM object;");
  return rows;
};

module.exports.getById = async (id) => {
  const [row] = await mysqlPool.query(
    "SELECT * FROM object WHERE object_id = ?;",
    [id]
  );
  return row[0];
};

module.exports.insertOne = async (object) => {
  await mysqlPool.query(
    "INSERT INTO object (object_name, activity, ownership_form, address) VALUES (?, ?, ?, ?);",
    [object.name, object.activity, object.ownershipForm, object.address]
  );
};

module.exports.insertMany = async (rows) => {
  await mysqlPool.query(
    "INSERT INTO object (object_name, activity, ownership_form, address) VALUES ?;",
    [rows]
  );
};

module.exports.updateOneById = async (id, object) => {
  const result = await mysqlPool.query(
    "UPDATE object SET object_name = ?, activity = ?, ownership_form = ?, address = ? WHERE object_id = ?;",
    [object.name, object.activity, object.ownershipForm, object.address, id]
  );
  return result[0].affectedRows;
};

module.exports.deleteOneById = async (id) => {
  const result = await mysqlPool.query(
    "DELETE FROM object WHERE object_id = ?;",
    [id]
  );
  return result[0].affectedRows;
};
