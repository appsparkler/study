Generate Storybook version 8 stories for this component:

import { forwardRef, ReactNode } from "react";
import { Whisper, Popover } from "rsuite";
import { TypeAttributes } from "rsuite/esm/@types/common";

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

interface AppTooltipProps {
  placement: TypeAttributes.Placement;
  data: ReactNode;
  className: string;
  name: string;
  tooltipClass: string;
}
const AppTooltip = ({
  placement,
  data,
  className,
  name,
  tooltipClass,
}: AppTooltipProps) => (
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


Here is an example of stories for a Button component.

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};


Do not show description, reasoning or any additional test for the fixes.  Only share the code snippet.