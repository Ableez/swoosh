import { CheckCircle2 } from "lucide-react";
import React from "react";

type DesignOptionSelectorProps = {
  currDesignOption: {
    name: string;
    description: string;
    value: string;
  } | null;
  setCurrDesignOption: React.Dispatch<
    React.SetStateAction<{
      name: string;
      description: string;
      value: string;
    }>
  >;
};

const designOptions = [
  {
    name: "Design for me",
    description: "We will make the perfect design for you.",
    value: "design-for-me",
  },
  {
    name: "I have my design",
    description: "You will be required to upload your design",
    value: "I-have-my-design",
  },
];

const DesignOptionSelector = ({
  currDesignOption,
  setCurrDesignOption,
}: DesignOptionSelectorProps) => (
  <div className="grid w-full place-items-start gap-2 border-t border-black/10">
    <div className="grid w-full grid-flow-row place-items-start">
      {designOptions.map((opt, idx) => {
        return (
          <div
            key={idx}
            onClick={() => {
              setCurrDesignOption(opt);
            }}
            className={`grid w-full cursor-pointer grid-flow-col place-items-center justify-between border-b px-4 align-middle text-sm font-medium ring-neutral-100 duration-300 hover:bg-neutral-200/70 ${currDesignOption?.value === opt.value && "hover:bg-neutral-200/70"}`}
          >
            <div className="grid h-[4.2rem] place-items-center">
              <h4>{opt.name}</h4>
            </div>

            {currDesignOption?.value === opt.value ? (
              <div className="grid h-full w-full place-items-center">
                <CheckCircle2 width={22} />
              </div>
            ) : (
              <div className="h-7 w-7 rounded-full border-2" />
            )}
          </div>
        );
      })}
    </div>
  </div>
);

export default DesignOptionSelector;
