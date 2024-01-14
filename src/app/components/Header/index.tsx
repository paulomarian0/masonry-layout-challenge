import { HomeIcon, NotifyIcon, ProfileIcon } from "@/app/icons";
import Search from "../Search";

export const Header = () => (
  <header className="bg-[#FFF] [box-shadow:0px_4px_8px_0px_rgba(103,_102,_102,_0.25)] h-16">
    <div className="flex items-center justify-end px-4 h-full gap-9">
      <Search />
      <HomeIcon />
      <NotifyIcon />
      <ProfileIcon />
    </div>
  </header>
);
