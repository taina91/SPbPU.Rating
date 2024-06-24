const db = require("../config/db");
const nn = require("../neuralnetwork/result");

class ResultControllers {
  async getResult(req, res) {
    const exem = req.query.exem;
    const spec = req.query.spec;
    let thirdExem = exem[0];
    let firstExem, secondExem, dopExem;
    if (exem[1].by_choice == "false" && exem[2].by_choice == "false") {
      firstExem = exem[1];
      secondExem = exem[2];
      dopExem = {
        id: "101",
        title: "None",
        by_choice: "true",
        result: "0",
      };
    } else {
      if (exem[1].by_choice == "false") {
        firstExem = exem[1];
        if (exem[2].result > exem[3].result) {
          secondExem = exem[2];
          dopExem = exem[3];
        } else {
          secondExem = exem[3];
          dopExem = exem[2];
        }
      }
      if (exem[2].by_choice == "false") {
        firstExem = exem[2];
        if (exem[1].result > exem[3].result) {
          secondExem = exem[1];
          dopExem = exem[3];
        } else {
          secondExem = exem[3];
          dopExem = exem[1];
        }
      }
      if (exem[3].by_choice == "false") {
        firstExem = exem[3];
        if (exem[1].result > exem[2].result) {
          secondExem = exem[1];
          dopExem = exem[2];
        } else {
          secondExem = exem[2];
          dopExem = exem[1];
        }
      }
    }
    let indAchiv = exem.filter((x) => x.id == 100)[0].result;
    const raitingReq = await db.query(
      `select id_app, a.original_doc, priority, ar1.result as ege1,
			 CASE 
				WHEN EXISTS (SELECT result FROM app_results WHERE ma.id_app = id_applicant and id_subject = $1) 
				THEN (SELECT result FROM app_results WHERE ma.id_app = id_applicant and id_subject = $1)
				ELSE 0
			END as ege21,
			CASE 
				WHEN EXISTS (SELECT result FROM app_results WHERE ma.id_app = id_applicant and id_subject = $2) 
				THEN (SELECT result FROM app_results WHERE ma.id_app = id_applicant and id_subject = $2)
				ELSE 0
			END as ege22, ar.result as ege3, a.ind_achiv
			from made_app ma join app_results ar on(ma.id_app = ar.id_applicant)
			join app_results ar1 on(ma.id_app = ar1.id_applicant)
			join applicants a ON (ma.id_app = a.id)
			where ma.id_spec = $3 
					and ar.id_subject = 1 
					and ar1.id_subject = $4;`,
      [secondExem.id, dopExem.id, spec, firstExem.id]
    );
    let raiting = raitingReq.rows;
    raiting.push({
      id_app: 0,
      original_doc: true,
      priority: 1,
      ege1: Number(firstExem.result),
      ege21: Number(secondExem.result),
      ege22: Number(dopExem.result),
      ege3: Number(thirdExem.result),
      ind_achiv: Number(indAchiv),
    });

    for (let i = 0; i < raiting.length; i++) {
      if (raiting[i].ege21 > raiting[i].ege22)
        raiting[i].ege2 = raiting[i].ege21;
      else raiting[i].ege2 = raiting[i].ege22;
      delete raiting[i].ege21;
      delete raiting[i].ege22;
      raiting[i].summa =
        raiting[i].ege1 +
        raiting[i].ege2 +
        raiting[i].ege3 +
        raiting[i].ind_achiv;
    }
    raiting.sort(
      (a, b) =>
        b.summa - a.summa ||
        b.ege1 - a.ege1 ||
        b.ege2 - a.ege2 ||
        b.ege3 - a.ege3
    );
    let p1o = 0;
    let p1no = 0;
    let p2o = 0;
    let p2no = 0;
    let p3o = 0;
    let p3no = 0;
    let all_cnt = 0;
    const chel = raiting.filter((x) => x.id_app == 0)[0];
    for (let i = 0; i < raiting.length; i++) {
      if (raiting[i].id_app == 0) {
        continue;
      } else if (chel.summa <= raiting[i].summa) {
        all_cnt += 1;
        if (raiting[i].priority == 1 && raiting[i].original_doc == true)
          p1o += 1;
        if (raiting[i].priority == 1 && raiting[i].original_doc == false)
          p1no += 1;
        if (raiting[i].priority == 2 && raiting[i].original_doc == true)
          p2o += 1;
        if (raiting[i].priority == 2 && raiting[i].original_doc == false)
          p2no += 1;
        if (raiting[i].priority == 3 && raiting[i].original_doc == true)
          p3o += 1;
        if (raiting[i].priority == 3 && raiting[i].original_doc == false)
          p3no += 1;
      }
    }
    console.log(p1o, p1no, p2o, p2no, p3o, p3no, all_cnt);
    const tens = {
      inffiz: (chel.ege2 - 40) / 60,
      math: (chel.ege1 - 45) / 55,
      rus: (chel.ege3 - 50) / 50,
      indach: chel.ind_achiv / 10,
      summa: (chel.summa - 135) / 175,
      p1o: p1o / raiting.length,
      p1no: p1no / raiting.length,
      p2o: p2o / raiting.length,
      p2no: p2no / raiting.length,
      p3o: p3o / raiting.length,
      p3no: p3no / raiting.length,
    };
    let collback = {
      result: nn.calcResult(tens),
      summa: chel.summa,
      p1o: p1o,
    };
    res.json(collback);
  }
}

module.exports = new ResultControllers();
