import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BoxLanguage from "../../atoms/BoxLanguage";
import BoxProfile from "../../atoms/BoxProfile";
import SearchInput from "../../atoms/SearchInput";
import { IoMenu } from "react-icons/io5";
import { projectsData } from "../../../../utils/ProjectsData";
import { listSkills } from "../../../../utils/Constans";

const listNavbar = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
];

type SearchResult = {
  type: "project" | "skill" | "page";
  name: string;
  path: string;
  icon?: string;
};

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search function
  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    // Search in projects
    projectsData.forEach((project) => {
      if (project.name.toLowerCase().includes(lowerQuery) ||
          project.tech.toLowerCase().includes(lowerQuery)) {
        results.push({
          type: "project",
          name: project.name,
          path: `/projects?highlight=${project.id}`,
        });
      }
    });

    // Search in skills
    listSkills.forEach((skill) => {
      if (skill.name.toLowerCase().includes(lowerQuery)) {
        results.push({
          type: "skill",
          name: skill.name,
          path: "/skills",
          icon: skill.icon,
        });
      }
    });

    // Search in pages
    listNavbar.forEach((page) => {
      if (page.name.toLowerCase().includes(lowerQuery)) {
        results.push({
          type: "page",
          name: page.name,
          path: page.path,
        });
      }
    });

    setSearchResults(results.slice(0, 6));
    setShowResults(true);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    handleSearch(value);
  };

  const handleResultClick = (result: SearchResult) => {
    navigate(result.path);
    setSearch("");
    setShowResults(false);
    setSearchResults([]);
  };

  return (
    <>
      <header className="absolute top-4 right-4 z-50 mt-2 flex h-12 w-(--my-width-nav) items-center justify-between bg-transparent px-4">
        <section className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-6 rounded-full bg-(--bg-primary-cray)">
            <p className="font-barlow ml-3 text-sm font-semibold text-(--text-color-black)">
              Menu
            </p>
            <button
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-(--bg-secondary-cray) opacity-85 hover:opacity-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IoMenu className="text-(--text-color-black) text-xl" />
            </button>
          </div>
          <BoxLanguage />
        </section>

        <section className="flex items-center justify-between gap-2 max-md:hidden">
          {/* Search with dropdown results */}
          <div ref={searchRef} className="relative">
            <SearchInput
              value={search}
              onChange={handleSearchChange}
              onSearch={() => handleSearch(search)}
            />
            {/* Search Results Dropdown */}
            {showResults && searchResults.length > 0 && (
              <div className="absolute top-12 left-0 w-full min-w-[280px] rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden z-50">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-amber-50 transition-colors"
                    onClick={() => handleResultClick(result)}
                  >
                    {result.icon ? (
                      <img src={result.icon} alt="" className="w-6 h-6 object-contain" />
                    ) : (
                      <span className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold text-white ${
                        result.type === "project" ? "bg-amber-500" : 
                        result.type === "skill" ? "bg-blue-500" : "bg-gray-500"
                      }`}>
                        {result.type === "project" ? "P" : result.type === "skill" ? "S" : "N"}
                      </span>
                    )}
                    <div>
                      <p className="text-sm font-medium text-gray-800">{result.name}</p>
                      <p className="text-xs text-gray-500 capitalize">{result.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {showResults && search && searchResults.length === 0 && (
              <div className="absolute top-12 left-0 w-full min-w-[280px] rounded-xl bg-white shadow-xl border border-gray-100 p-4 z-50">
                <p className="text-sm text-gray-500 text-center">No results found for "{search}"</p>
              </div>
            )}
          </div>

          {/* Profile - display only */}
          <BoxProfile
            name="Ilham Bustomi"
            onClick={() => {}}
            picture="/images/ilham-bustomi-profile.JPG"
          />
        </section>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 mx-auto flex h-[100vh] w-full items-center justify-between bg-black/50 px-4 ${isOpen ? "z-50 overflow-hidden opacity-100" : "-z-1 opacity-0"}`}
        onClick={() => setIsOpen(!isOpen)}
      ></div>

      {/* Mobile Sidebar */}
      <aside
        className={`${
          isOpen ? "z-50 -translate-x-0" : "-z-1 translate-x-100"
        } fixed top-0 right-0 h-[100vh] w-64 bg-(--bg-secondary-cray) transition-transform duration-300`}
      >
        <div className="flex h-full flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fa-solid fa-xmark text-(--text-color-black)"></i>
          </button>

          {listNavbar.map((item, index) => (
            <p
              key={index}
              className="w-full cursor-pointer px-4 py-2 text-lg font-semibold text-(--text-color-black) opacity-80 transition duration-300 ease-in-out hover:bg-(--bg-primary-cray) hover:opacity-100"
              onClick={() => { navigate(item.path); setIsOpen(false); }}
            >
              {item.name}
            </p>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Navbar;