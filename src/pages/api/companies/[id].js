import companies from "../../../../data/data.json";

export default function handler(req, res) {
  const {
    query: { id },
  } = req;

  const company = companies.find((c) => c.id === parseInt(id));

  if (company) {
    res.status(200).json(company);
  } else {
    res.status(404).send("Company not found");
  }
}
