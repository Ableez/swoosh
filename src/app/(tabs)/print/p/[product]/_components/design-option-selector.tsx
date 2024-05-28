import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { SmilePlus } from "lucide-react";

type DesignOptionSelectorProps = {
  designOptions: { value: string; image: string }[];
  designOption: string;
  setDesignOption: (option: string) => void;
};

const DesignOptionSelector = ({
  designOptions,
  designOption,
  setDesignOption,
}: DesignOptionSelectorProps) => (
  <div className="grid w-full place-items-start gap-2 p-8 px-4 text-lg font-semibold">
    <h4 className="mb-4 text-sm font-medium">Design</h4>
    <RadioGroup
      className="grid w-full grid-flow-row place-items-start gap-4"
      defaultValue={designOption}
      onValueChange={setDesignOption}
    >
      {designOptions.map((option, idx) => (
        <Label
          key={idx}
          htmlFor={`option${idx}`}
          className="w-full rounded-2xl ring-2 ring-transparent transition-all hover:ring-neutral-200 data-[state=checked]:ring-neutral-700"
        >
          <div className="flex place-items-center justify-start gap-4 p-2 align-middle">
            <RadioGroupItem
              className="data-[state=checked]:border-2 data-[state=unchecked]:border-2 data-[state=checked]:border-neutral-700 data-[state=unchecked]:border-neutral-700"
              value={option.value}
              id={`option${idx}`}
            />
            <h4 className="text-sm font-medium">{option.value}</h4>
          </div>
        </Label>
      ))}
      <Label
        htmlFor={"optionCustom"}
        className="w-full rounded-2xl ring-2 ring-transparent transition-all hover:ring-neutral-200 data-[state=checked]:ring-neutral-700"
      >
        <div className="flex place-items-center justify-start gap-4 p-2 align-middle">
          <RadioGroupItem
            className="data-[state=checked]:border-2 data-[state=unchecked]:border-2 data-[state=checked]:border-neutral-700 data-[state=unchecked]:border-neutral-700"
            value="Custom design"
            id={"optionCustom"}
          />
          <div className="grid grid-flow-col place-items-center justify-start gap-2">
            <h4 className="text-sm font-medium">Custom design</h4>
            <SmilePlus width={18} />
          </div>
        </div>
      </Label>
    </RadioGroup>
  </div>
);

export default DesignOptionSelector;
