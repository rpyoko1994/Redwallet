import React from "react";

function PrivacyPolitic() {
  return (
    <div>
      <nav className="border-b-1 border-gray-50 p-6">
        <button
          onClick={() => window.history.back()}
          className="text-white font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      </nav>
      <div>
        <h2 className="text-white pl-6 pt-4 text-4xl"> Privacy Policy</h2>
      </div>
      <div className="p-3 bg-gray-900 rounded-2xl m-4 opacity-70">
        <h2 className="text-gray-500  font-bold">
          {" "}
          Last update: 12 October 2022
        </h2>
      </div>

      <div className="px-3  m-4">
        <p className="text-gray-500 text-sm font-bold">
          The protection and confidentiality of your personal information is
          very important to us. Therefore, Financial Company with the website
          financial.com and the Financial mobile application (hereinafter
          referred to as “Financial”) set the privacy policy as follows:
        </p>
      </div>
      <div className="pt-1 px-4  m-4">
        <h2 className="text-white pb-2">Our Commitment</h2>
        <p className="text-gray-500 text-sm font-bold">
          We collect and use your personal information in accordance with the
          relevant provisions of the personal data protection law. This privacy
          policy describes the collection, use, storage and protection of your
          personal information. This applies to applications, all websites,
          sites and related services of the Financial regardless of how you
          access or use it.
        </p>
      </div>
      <div className="pt-1 px-4  m-4">
        <h2 className="text-white pb-2">Scope and Approval</h2>
        <p className="text-gray-500 text-sm font-bold">
          You accept this privacy policy when you register, access, or use our
          products, services, content, features, technology or functions offered
          on the application, all websites, sites and related services
          (collectively called “Financial Services”). We can upload policy
          changes on this page periodically, the revised version will take
          effect on the effective date of publication. You are responsible for
          reviewing this privacy policy as often as possible.
        </p>
        <p className="text-gray-500 text-sm font-bold pt-2">
          For the purposes of this privacy policy, we use the term “personal
          information” to describe information that can be associated with a
          particular individual and can be used to identify that individual.
          This privacy policy does not apply to information that is made
          anonymous so that it cannot identify certain users.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolitic;
