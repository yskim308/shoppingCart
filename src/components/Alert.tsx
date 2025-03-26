interface AlertProps {
  message: string;
  show: boolean;
}

export default function Alert({ message, show }: AlertProps) {
  return (
    <div
      className={`fixed z-40 left-1/2 -translate-x-1/2 p-10 bg-green-300 ease-in-out duration-200 ${show ? "translate-0" : "-translate-y-full"}`}
    >
      <p>{message}</p>
    </div>
  );
}
