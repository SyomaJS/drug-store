const pool = require("../config/connect");

exports.getFilter = (req, res) => {
  res.render("filter");
};

exports.getFilterData = (req, res) => {
  try {


    const { name, price, region, district } = req.body;
    const query = `select m.name , m.price , p.phone, p.pharmname , s.quantity ,p.address, m.manufacturer from medicines as m
        INNER JOIN stock as s ON  m.id = s.medicine_id
        INNER JOIN pharmacies as p ON s.pharmacy_id = p.id
        INNER JOIN  region as reg ON p.region_id = reg.id
        INNER JOIN  district as dis ON p.district_id = dis.id 
        WHERE m.name like ? and s.quantity > 0 and dis.disname = ? and
        reg.regname = ? and m.price < ?;`;
    pool.query(
      query,
      [`%${name}%`, district, region, price],
      (error, results) => {
        if (error) {
          console.log(error);
        } else {
          console.log(results);
          res.render("medicine", { results });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};
