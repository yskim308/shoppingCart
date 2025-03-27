interface AlertProps {
  message: string;
  show: boolean;
}

export default function Alert({ message, show }: AlertProps) {
  return (
    <div
      className={`fixed z-40 left-1/2 -translate-x-1/2 ease-in-out duration-200 ${show ? "translate-0" : "-translate-y-full"}`}
    >
      <div className="p-5 bg-green-50 font-medium rounded-3xl mt-10">
        {message}
      </div>
    </div>
  );
}
