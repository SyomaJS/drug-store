const { Readline } = require("readline/promises");
const pool = require("../config/connect");

exports.getMedicine = (req, res) => {
  try {
    let { search } = req.body;
    if (search.length === 0) {
      res.redirect("/");
      return;
    }
    search = search.trim();
    console.log(search);
    const query = `select m.name , m.price , p.phone, p.pharmname , s.quantity ,p.address, m.manufacturer from medicines as m
        INNER JOIN stock as s ON  m.id = s.medicine_id
        INNER JOIN pharmacies as p ON s.pharmacy_id = p.id
        INNER JOIN  region as reg ON p.region_id = reg.id
        INNER JOIN  district as dis ON p.district_id = dis.id 
        WHERE m.name like ? and s.quantity > 0 ;`;

    pool.query(query, [`%${search}%`], (err, results) => {
      if (err) {
        console.error(err);
        res.status(404).send(err);
      } else {
        res.render("medicine", { results });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
