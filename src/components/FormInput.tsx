'use client';

type Props = {
  label: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.HTMLProps<HTMLInputElement>;

const FormInput = ({
  label,
  type = 'text',
  onChange,
  ...otherProps
}: Props) => {
  return (
    <div>
      <label className="text-grey-900 font-medium text-sm">{label}</label>
      <input
        type={type}
        onChange={onChange}
        className="w-full text-sm font-medium outline-none border border-grey-300 placeholder:text-grey-500 placeholder:font-normal placeholder:text-sm focus:border-primary-200 rounded-lg p-4 my-3"
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
