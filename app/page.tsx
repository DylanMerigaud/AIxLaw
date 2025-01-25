import Header from "@/app/components/header";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import Image from "next/image";
import React from "react";
import ChatSection from "./components/chat-section";
import icon from "./icons/android-chrome-512x512.png";

const NEW = true;

const Nav = () => (
  <div className="navbar bg-base-100 border-b">
    <div className="flex-1">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost btn-md drawer-button lg:hidden h-auto"
      >
        <PanelLeftOpen />
      </label>
      <a className="btn btn-ghost text-xl">
        <Image src={icon} alt="Flaudit" width={32} height={32} />
        Flaudit
      </a>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control"></div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          {/* <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li> */}
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const options = [
  "Litigation",
  "Intellectual Property",
  "GDPR",
  "Human Resources",
  "Tax and Financial Aspects",
] as const;

const history = {
  Today: [
    "Overview of PCA Case No, 2014",
    "Latest ICC arbitration rules",
    "Application of VCLT Articles 31",
    "Characterizing License revocation",
    "Oucome of Force Majeure Claim",
    "Application of DCF Method by A",
  ],
  "Last week": [
    "State Immunity and Arbitration",
    "Case Background and Legal Iss",
    "Latest ICC arbitration rules",
    "Evolution of Fair and Equitable",
    "Main Legal Issues in Antaris Sol",
    "Oucome of Force Majeure Clain",
    "Application of DCF Method byA",
  ],
};

function Drawer({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer lg:drawer-open flex-1 min-h-fit">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center h-full p-4">
        {children}
      </div>
      <div className="drawer-side lg:h-[calc(100dvh-4rem)] max-w-full">
        <div className="bg-base-200 h-full overflow-auto flex flex-col">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="btn btn-ghost btn-md drawer-overlay lg:hidden m-2"
          >
            <PanelLeftClose />
          </label>
          <div className="flex-1">
            <div className="text-2xl font-bold p-4">History</div>
            {(["Today", "Last week"] as const).map((k) => (
              <React.Fragment key={k}>
                <div className="text-lg px-4">Last Week</div>
                <ul className="menu text-base-content w-80 p-4">
                  {history[k].map((item) => (
                    <li key={item}>
                      <a>{item}...</a>
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
          </div>
          <div className="p-4 flex">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">
                  Choose a category to search in
                </span>
              </div>
              <select className="select select-bordered flex-1">
                {options.map((option) => (
                  <option
                    key={option}
                    selected={option === "Intellectual Property"}
                  >
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  if (NEW) {
    return (
      <main className="w-full h-full bg flex flex-col">
        <Nav />
        <Drawer>
          <ChatSection />
        </Drawer>
      </main>
    );
  }

  return (
    <main className="h-screen w-screen flex justify-center items-center background-gradient">
      <div className="space-y-2 lg:space-y-10 w-[90%] lg:w-[60rem]">
        <Header />
        <div className="h-[65vh] flex">
          <ChatSection />
        </div>
      </div>
    </main>
  );
}
