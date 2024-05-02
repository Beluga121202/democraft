import React from 'react';

import { ToolbarSection } from '../../editor/Toolbar/ToolbarSection';
import { ToolbarItem } from '../../editor/Toolbar/ToolbarItem';
import { ToolbarRadio } from '../../editor/Toolbar/ToolbarRadio';

export const ButtonSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Colors"
        props={['background', 'color']}
        summary={({ background, color }: any) => {
          return (
            <div className="flex flex-row-reverse">
              <div
                style={{
                  background:
                    background && `rgba(${Object.values(background)})`,
                }}
                className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-black"
              >
                <p
                  style={{
                    color: color && `rgba(${Object.values(color)})`,
                  }}
                  className="text-white w-full text-center"
                >
                  T
                </p>
              </div>
            </div>
          );
        }}
      >
        <ToolbarItem
          full={true}
          propKey="background"
          type="bg"
          onChange={undefined}
          index={undefined}
          label="Background"/>
        <ToolbarItem full={true} propKey="color" type="color" label="Text" onChange={undefined} index={undefined} />
      </ToolbarSection>
      <ToolbarSection
        title="Margin"
        props={['margin']}
        summary={({ margin }: any) => {
          return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${
            margin[3] || 0
          }px`;
        }}
      >
        <ToolbarItem propKey="margin" index={0} type="slider" label="Top" onChange={undefined} />
        <ToolbarItem propKey="margin" index={1} type="slider" label="Right" onChange={undefined} />
        <ToolbarItem propKey="margin" index={2} type="slider" label="Bottom" onChange={undefined} />
        <ToolbarItem propKey="margin" index={3} type="slider" label="Left" onChange={undefined} />
      </ToolbarSection>
      <ToolbarSection title="Decoration">
        <ToolbarItem propKey="buttonStyle" type="radio" label="Style" onChange={undefined} index={undefined}>
          <ToolbarRadio value="full" label="Full" />
          <ToolbarRadio value="outline" label="Outline" />
        </ToolbarItem>
      </ToolbarSection>
    </React.Fragment>
  );
};
