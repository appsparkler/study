Generate the Typescript Interface for the following components and include it in the code.


```tsx
import { getPokcolor } from "../../../constants/pokemon.types";
import "./colorfulTags.scss";
import PropTypes from "prop-types";

const ColorfulTag = ({ text, className, type }) => {
  return (
    <div>
      <div className={className}>
        <span
          style={{
            background: getPokcolor(type),
          }}
          className="colorful-tag"
        >
          {text}
        </span>
      </div>
    </div>
  );
};
ColorfulTag.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.any,
};

export default ColorfulTag;

```


Do not show description, reasoning or any additional test for the fixes.  Only share the code snippet.
