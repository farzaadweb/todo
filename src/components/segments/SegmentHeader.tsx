export default function Segmentheader(props: any) {
  return (
    <div
      className={`${props.align === "left" ? "flex" : "flex justify-center"}`}
    >
      <div
        className={`w-fit h-fit relative flex flex-col ${
          props.align === "left" ? "" : "items-center"
        }`}
      >
        <span className="text-xl lg:text-2xl font-semibold">
          {props.children}
        </span>
        <div
          className={`border-[3px] lg:border-[4.5px] w-20 rounded-lg mt-2 ${
            props.underline === false ? "hidden" : "block"
          } ${props.underlineColor ? `border-green-600` : "border-blue-500 "} `}
        ></div>
      </div>
    </div>
  );
}
