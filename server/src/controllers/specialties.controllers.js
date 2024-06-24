const db = require("../config/db");
class SpecControllers {
  async getAllInst(req, res) {
    const insts = await db.query(
      "SELECT id, shot_name as text FROM institutes;"
    );
    res.json(insts.rows);
  }
  async getEduLevel(req, res) {
    const edu_level = await db.query(
      "SELECT id, title as text FROM edu_level;"
    );
    res.json(edu_level.rows);
  }
  async getSpec(req, res) {
    const id_inst = req.query.inst;
    const id_level = req.query.level;
    const specs = await db.query(
      "select id, title as text from specialties s where id_inst = $1 and id_level = $2;",
      [id_inst, id_level]
    );
    res.json(specs.rows);
  }
  async getOneSpec(req, res) {
    const id_spec = req.query.spec;
    const spec_name = await db.query(
      "select title from specialties where id = $1;",
      [id_spec]
    );
    res.json(spec_name.rows[0]);
  }
}

module.exports = new SpecControllers();
