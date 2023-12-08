type Props = {
  name: string;
  role: string;
  payment: number;
  paid: boolean;
};

const Role = ({ name, role, payment, paid }: Props) => {
  return (
    <>
      {/* display when using tablet or laptop */}
      <div className="font-bold space-y-5 max-md:hidden">
        <div className="text-5xl">{name}</div>
        <div className="text-3xl">{role}</div>
      </div>
      {/* display when using mobile */}
      <div className="md:hidden">
        <div className="h-max flex space-x-4">
          <div className="space-y-3">
            <div className="text-xs tracking-[5px]">當前身份</div>
            <div className="text-2xl text-warning">{role}</div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="h-max flex">
              應繳金額
              <div className="pl-2 text-warning font-bold">{payment}</div>
            </div>
            <div className="h-max flex">
              已繳金額
              <div className="pl-2 text-warning font-bold">
                {paid ? payment : 0}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px mt-4 bg-white" />
      </div>
    </>
  );
};

export default Role;
