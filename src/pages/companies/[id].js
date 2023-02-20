import axios from "axios";

export const getStaticPaths = async () => {
  const res = await axios.get("http://localhost:3000/api/companies");
  const data = await res.json();

  const paths = data.map((company) => {
    return {
      params: { id: company.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios.get(`http://localhost:3000/api/companies/${id}`);
  const data = await res.json();

  // const company = data.find((company) => company.id === id);

  return {
    props: { company: data },
  };
};

export default function Details({ company }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1>
          {company.id} {company.company_name}
        </h1>
      </div>
    </>
  );
}
