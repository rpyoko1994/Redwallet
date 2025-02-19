import React from "react";

function TermAndConditions() {
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
        <h2 className="text-white pl-6 pt-4 text-4xl">
          {" "}
          Terms & Conditions
        </h2>
      </div>
      <div className="p-3 bg-gray-900 rounded-2xl m-4 opacity-70">
        <h2 className="text-gray-500  font-bold">
          {" "}
          Last update: 12 October 2022
        </h2>
      </div>

      <div className="p-3  m-4">
        <p className="text-gray-500 text-sm font-bold">
          {" "}
          General terms and conditions (hereinafter referred to as{" "}
          <span class="font-bold text-white">“TC”</span>) Financial Company (
          <span class="font-bold text-white">“Financial”</span>) are terms and
          conditions regarding the use of services, products, technology,
          service features provided by Financial including but not limited to
          the use of applications, all associated websites, Application
          Programming Interface (API), and all related services (collectively
          called <span class="font-bold text-white">“Financial Services”</span>
          ).{" "}
        </p>
      </div>
      <div className="pt-1 px-4  m-4">
        <p className="text-gray-500 text-sm font-bold">
          {" "}
          Before using Financial Services, it is recommended that you read
          carefully the entire contents of this TC as well as other documents
          mentioned in it. By registering as a user, you declare that you have
          READ, UNDERSTOOD, COMPREHENDED, OBSERVED, AGREED AND ACCEPTED all
          terms and conditions contained in this TC which become effective and
          legally binding.{" "}
        </p>
      </div>
      <div className="pt-1 px-4  m-4">
        <p className="text-gray-500 text-sm font-bold">
          {" "}
          Financial can upload changes / replace TC on this page periodically.
          The revised version will take into effect on the effective date of
          publication. You are responsible for reviewing this TC from time to
          time. If you do not agree with the changes / replacements of this TC,
          you must immediately stop using Financial Services. Financial shall
          not be held liable for your failure to review and agree with the
          modification and / or replacement of this TC.{" "}
        </p>
      </div>
    </div>
  );
}

export default TermAndConditions;
