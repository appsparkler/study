Generate Storybook version 8 stories for this component:

import React from "react";
import PokemonCard from "../../pokemonCard/pokemonCard";
import AppTooltip from "../../../hooks/tooltip/tooltip";
import backIcon from "../../../assets/icons/back-icon.png";
import closeIcon from "../../../assets/icons/close-icon.png";
import rightIcon from "../../../assets/icons/right-icon.png";
import { numberFormation } from "../../../services/common.service";
import { getPokemonDescription } from "../../../constants/pokemon.types";
import { IPokemon } from "../../../models/interfaces/pokemon";
import "./detailsHeader.scss";
import "../../../styles/common.scss";
import { noop } from "rxjs";
import { IPokemonSpecies } from "../../../models/interfaces/IPokemonSpeciesData";

const pokemonDescriptions = getPokemonDescription();

const DetailsHeader = ({
  data,
  speciesData,
  ...props
}: {
  data: IPokemon;
  speciesData: IPokemonSpecies;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  backClick: React.MouseEventHandler<HTMLDivElement>;
  closeClick: React.MouseEventHandler<HTMLDivElement>;
  forwordClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const getPokemonDescriptions = () => {
    if (speciesData && speciesData.flavor_text_entries) {
      return getPokemonDescription(speciesData.flavor_text_entries);
    } else {
      return "";
    }
  };

  return (
    <>
      <div className="details-header-container">
        <div className="header-wrap">
          <div>
            <PokemonCard
              className="disabled-click"
              key={data.id}
              data={data}
              onClick={noop}
            />
          </div>
          <div className="header-sub-wrap pl-3">
            <div className="title-wrap">
              <div>
                <h3 className="text-caps">{data.name}</h3>
              </div>
              <div className="horizontal-line"></div>
              <div>
                <h3>{numberFormation(data.id)}</h3>
              </div>
              <div className="horizontal-line"></div>
              <div>
                <div className="icon-wrap">
                  <img
                    src={backIcon}
                    alt="back icon to go backword"
                    onClick={props.backClick}
                    onKeyDown={console.log}
                    role="presentation"
                  ></img>
                  <img
                    src={closeIcon}
                    alt="close icon to go backword"
                    onClick={props.closeClick}
                    onKeyDown={console.log}
                    role="presentation"
                  ></img>
                  <img
                    src={rightIcon}
                    alt="forword icon to go backword"
                    onClick={props.forwordClick}
                    onKeyDown={console.log}
                    role="presentation"
                  ></img>
                </div>
              </div>
            </div>
            <div className="text-description">
              <div className="text-dot">
                {pokemonDescriptions && (
                  <span>{pokemonDescriptions.substring(0, 363)} </span>
                )}
              </div>
              <div className="text-dot">... </div>
              {pokemonDescriptions && pokemonDescriptions.length > 363 && (
                <AppTooltip
                  placement="bottom"
                  className="load-more"
                  tooltipClass="tooltip-popover"
                  name="read more"
                  data={getPokemonDescriptions()}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsHeader;


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