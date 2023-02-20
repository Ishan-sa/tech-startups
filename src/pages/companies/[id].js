import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await axios.get("http://localhost:3000/api/companies");
  const data = await res.data;

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
  const data = await res.data;

  // const company = data.find((company) => company.id === id);

  return {
    props: { company: data },
  };
};

export default function Details({ company }) {
  return (
    <>
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="flex flex-wrap justify-between items-center flex-col gap-[2rem]">
          <div className="w-full">
            <div className="bg-white shadow rounded-lg overflow-hidden flex">
              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-medium text-gray-900">
                    {company.company_name}
                  </h2>
                  <Image
                    src={
                      `/images/images/${company.id}.jpg` ||
                      "https://via.placeholder.com/600x400"
                    }
                    alt="Placeholder image"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
                <p className="text-sm text-gray-700">{company.headline}</p>
                <div className="flex flex-wrap">
                  {company.tags.map((tag) => (
                    <span className="mr-2 mb-2 py-1 px-2 rounded-lg bg-[#cbffe4] text-[#26503a] text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600">
                    <span className="mr-2">{company.employees} employees</span>
                    <span className="mr-2">&bull;</span>
                    <span className="mr-2">
                      {company.industries.join(", ")}
                    </span>
                  </div>
                </div>
                <Link
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#26503a] hover:text-[#3c805d]"
                >
                  Visit website &rarr;
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-[2rem]">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-lg font-medium text-gray-900 mb-2">
                  About {company.company_name}
                </h2>
                <p className="text-sm text-gray-700">{company.about}</p>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-lg font-medium text-gray-900 mb-2">
                  Job openings at {company.company_name}
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(company.jobs).map(([jobTitle, jobCount]) => (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-base font-medium text-gray-900">
                        {jobTitle}
                      </h3>
                      <p className="text-sm text-gray-700">
                        {jobCount} openings
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
