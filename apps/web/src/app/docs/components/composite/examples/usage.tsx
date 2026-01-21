"use client";

import { Button } from "jamsrui/button";
import { Composite } from "jamsrui/composite";
import { CompositeItem } from "jamsrui/composite";

const CompositeButton = (props) => {
  // const { index } = useCompositeItem({});
  return <Button {...props}>hiiii </Button>;
};

export const CompositeUsage = () => {
  return (
    <Composite>
      <div className="flex flex-col gap-4">
        <CompositeItem>
          <CompositeButton />
        </CompositeItem>
        <CompositeItem>
          <CompositeButton />
        </CompositeItem>
        <CompositeItem>
          <CompositeButton />
        </CompositeItem>
        <CompositeItem>
          <CompositeButton />
        </CompositeItem>
        <CompositeItem>
          <CompositeButton />
        </CompositeItem>
        <CompositeItem>
          <CompositeButton />
        </CompositeItem>
      </div>
    </Composite>
  );
};
