Generate the Typescript Interface for the following components and include it in the code.

import { forwardRef, ReactNode } from "react";
import { Whisper, Popover } from "rsuite";

// eslint-disable-next-line react/display-name
const DefaultPopover = forwardRef<
  HTMLDivElement,
  {
    content: ReactNode;
    className: string;
  }
>(({ content, className, ...props }, ref) => {
  return (
    <Popover ref={ref} {...props} className={className} arrow={false}>
      <p>{content}</p>
    </Popover>
  );
});


const AppTooltip = ({ placement, data, className, name, tooltipClass }) => (
  <Whisper
    trigger="click"
    placement={placement}
    controlId={`control-id-${placement}`}
    speaker={<DefaultPopover content={data} className={tooltipClass} />}
  >
    <div className={className}>{name}</div>
  </Whisper>
);

export default AppTooltip;

Do not show description, reasoning or any additional test for the fixes.  Only share the code snippet.
