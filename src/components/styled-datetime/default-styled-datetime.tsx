export const DefaultStyledDatetime = (props: TDefaultStyledDatetimeProps) => {
  const { datetime } = props;

  // parse datetime string to Date object
  const date = new Date(datetime || "");
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  // make hours and minutes always 2 digits
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);

  // make each span look nicer
  return (
    <div className="rounded flex flex-col items-center">
      <span className="text-sm">{year}</span>

      <span className="whitespace-nowrap text-xs">
        {month}-{day}
      </span>

      <span className="whitespace-nowrap text-xs">
        {hours}:{minutes}
      </span>
    </div>
  );
};

type TDefaultStyledDatetimeProps = {
  datetime?: string;
};
