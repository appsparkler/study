I am a Senior React Developer and use Jest and React Testing Library for web and app development.
Generate test cases for this method:

```ts
import { CheckPicker } from "rsuite";
import "./multiSelectdropDown.scss";
import { FormControlChangeEventHandler } from "../../../models/interfaces/handlers";
import { LabelValueObject } from "../../../models/interfaces/LabelValueObject";

interface AppMultiSelectDropDownProps {
  label: string;
  onChangeHandler: FormControlChangeEventHandler;
  data: Array<LabelValueObject>;
  placeholder?: string;
  isOpen?: boolean;
  onOpenHandler?: () => void;
  onCloseHandler?: () => void;
  onCleanHandler?: (event: React.SyntheticEvent) => void;
}

const AppMultiSelectDropDown = ({
  label,
  data,
  onChangeHandler,
  ...props
}: AppMultiSelectDropDownProps) => (
  <>
    <div className="multiselect-dropdown-wrapper">
      <div className="dropdown-label">
        <span>{label}</span>
      </div>
      <div
        className={`${
          props.isOpen ? "is-dropdown-open" : ""
        } check-picker-wrap`}
      >
        <CheckPicker
          block
          placeholder={props.placeholder}
          onChange={onChangeHandler}
          size="lg"
          onOpen={props.onOpenHandler}
          onClose={props.onCloseHandler}
          onClean={props.onCleanHandler}
          data={data}
          searchable={false}
          style={{ width: 224 }}
        />
      </div>
    </div>
  </>
);

export default AppMultiSelectDropDown;
```

Do not show description, reasoning or any additional test for the fixes.  Only share the code snippet.
```
