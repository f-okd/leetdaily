import { Category } from '../../Problems';

interface ICategorySelect {
  onChange: (e: Category) => void;
}

const CategorySelect = ({ onChange }: ICategorySelect) => {
  return (
    <section>
      <p data-testid="category_select_label">Choose a category:</p>
      <select
        data-testid="category_select"
        defaultValue={Category.ALL}
        onChange={(e) => {
          const val = (e.currentTarget.value as Category) ?? Category.ALL;
          onChange(val);
        }}
      >
        {Object.keys(Category).map((key) => (
          <option
            data-testid={key.replace(/_/g, ' ')}
            key={key}
            value={Category[key as keyof typeof Category]}
          >
            {key.replace(/_/g, ' ')}
          </option>
        ))}
      </select>
    </section>
  );
};

export default CategorySelect;
