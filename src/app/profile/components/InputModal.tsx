"use client";

type Props = {
  id: string;
  defaultValue: string;
  labelText: string;
};

const InputModal = ({ id, defaultValue, labelText }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="pl-3 pb-2 text-sm tracking-[7px]">{labelText}</label>
      <input
        type="text"
        id={id}
        name={id}
        defaultValue={defaultValue}
        placeholder={labelText}
        className="px-6 py-3 bg-accent rounded-full input-modal-shadow placeholder-info-content/30"
      />
    </div>
  );
};

export default InputModal;
