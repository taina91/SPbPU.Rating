const db = require("../config/db");
class SubjectsControllers {
  async getSubjectsTitle(req, res) {
    const spec = req.query.spec;
    const subjects = await db.query(
      "select id, title, by_choice, 0 as result from subjects_spec ss join ege_subjects es on(es.id = ss.id_ege) where ss.id_spec = $1 order by id;",
      [spec]
    );
    res.json(subjects.rows);
  }
}

module.exports = new SubjectsControllers();
