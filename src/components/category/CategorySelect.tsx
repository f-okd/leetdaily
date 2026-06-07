import { useState, useRef, useEffect } from "react";
import { Category } from "../../problems/__data__/Problems";

interface ICategorySelect {
  onChange: (e: Category) => void;
}

const CategorySelect = ({ onChange }: ICategorySelect) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState<keyof typeof Category>("ALL");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (key: keyof typeof Category) => {
    setSelectedKey(key);
    onChange(Category[key]);
    setIsOpen(false);
  };

  return (
    <div className="form-group" ref={dropdownRef}>
      <p data-testid="category_select_label" className="form-label">
        <svg
          className="form-label-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        Choose a category:
      </p>
      <div className="custom-dropdown-wrapper">
        <button
          type="button"
          data-testid="category_select"
          className="custom-dropdown-trigger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedKey.replace(/_/g, " ")}</span>
          <div className={`custom-dropdown-arrow ${isOpen ? "open" : ""}`}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </button>

        {isOpen && (
          <div className="custom-dropdown-menu">
            {Object.keys(Category).map((key) => {
              const formattedName = key.replace(/_/g, " ");
              const isSelected = selectedKey === key;
              return (
                <button
                  type="button"
                  key={key}
                  data-testid={key.replace(/_/g, " ")}
                  className={`custom-dropdown-item ${isSelected ? "selected" : ""}`}
                  onClick={() => handleSelect(key as keyof typeof Category)}
                >
                  <span>{formattedName}</span>
                  {isSelected && (
                    <svg
                      className="custom-dropdown-item-check"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategorySelect;
