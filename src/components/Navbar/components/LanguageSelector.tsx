import { useState, useRef, useEffect } from "react";
import ArrowIcon from "../../../components/common/Icons/ArrowIcon.tsx";
import SpanishFlag from "./Icons/SpanishFlag";
import EnglishFlag from "./Icons/EnglishFlag";
import { LanguageSelectorProps } from "../../../types/languageSelectorProps.ts";

const LanguageSelector = ({ lang, toggle }: LanguageSelectorProps) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setOpen((prev) => !prev);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <div className="flex w-24 items-center justify-center">
        {lang === "es" ? <SpanishFlag /> : <EnglishFlag />}
        <button
          type="button"
          onClick={toggleDropdown}
          className="flex w-14 items-center justify-center gap-2 rounded-md bg-white hover:bg-white text-primary text-sm focus:outline-none"
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span className="text-base font-medium w-1/3">{lang}</span>
          <ArrowIcon />
        </button>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <ul
          role="listbox"
          className="absolute right-2 w-14 bg-white border border-b-gray-300 rounded-b-md shadow-lg focus:outline-none z-10"
          tabIndex={-1}
        >
          <li
            key={lang}
            role="option"
            tabIndex={0}
            onClick={() => {
              toggle(), toggleDropdown();
            }}
            className={`cursor-pointer px-3 py-1 flex justify-center items-center gap-2 text-base hover:bg-primary rounded-b-md hover:text-white text-primary`}
          >
            <span>{lang === "es" ? "en" : "es"}</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
