I use jest and react-testing library for testing my React Typescript components.  

Generate testcases for the following component(s):

```tsx
import "./search.filter.scss";
import { Input, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";

const SearchFilter = ({
  placeholder,
  inputClass,
  onChangeHandler,
  ...props
}: {
  placeholder?: string;
  inputClass?: string;
  label: string;
  onChangeHandler?: (event: any) => void;
}) => {
  return (
    <>
      <div className="search-container">
        <div className="flex-col">
          <div className="search-label">
            <span>{props.label}</span>
          </div>
          <InputGroup {...props} inside className="mb-1">
            <Input
              placeholder={placeholder}
              className={inputClass}
              size="lg"
              onChange={onChangeHandler}
            />
            <InputGroup.Button>
              <SearchIcon />
            </InputGroup.Button>
          </InputGroup>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;

```


Do not show description, reasoning or any additional test for the fixes.  Only share the code snippet.