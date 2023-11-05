import SearchIcon from "../SearchIcon";

function SearchInput() {
  return (
    <div className={`relative w-[520px]`}>
      <input
        type="text"
        placeholder="Search course name"
        className="w-80 py-3 pl-6 focus:outline-none rounded-lg shadow-[0px_10px_50px_0px_rgba(48,98,144,0.08)] w-[100%]"
      />
      <button className="cursor-pointer absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none text-sm px-4">
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchInput;
