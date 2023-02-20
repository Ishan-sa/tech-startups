// import companies from "../../data/data.json";
import Image from "next/image";
import MyCard from "components/Card/Card";

export default function Companies({ data }) {
  console.log("data", data);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* {data.map((item, index) => {
          return (
            <div key={index}>
              <MyCard
                src={`/images/images/${item.id}.jpg`}
                title={item.company_name}
                description={item.headline}
                avatarSrc={`/images/images/${item.id}.jpg`}
              />
            </div>
          );
        })} */}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://locahost:3000/api/companies");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
