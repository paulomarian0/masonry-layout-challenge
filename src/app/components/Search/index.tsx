import { SearchIcon } from "@/app/icons";

export default function Search() {
  return (
    <form>
      <div className="relative">
        <div className=" absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          disabled
          type="search"
          className="
            xxs:w-20
            sm:w-auto
            w-full
            bg-slate-200
            rounded-2xl
            h-9
          "
        />
      </div>
    </form>
  );
}
