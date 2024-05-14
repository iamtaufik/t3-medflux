interface IProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  percentage?: string;
  linkName?: string;
  dataAos?:
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "zoom-in"
    | "zoom-out"
    | "flip-up"
    | "flip-down"
    | "flip-left"
    | "flip-right"
    | "slide-up"
    | "slide-down"
    | "slide-left"
    | "slide-right";
  onClick?: () => void;
}

const Label = ({
  title,
  value,
  icon,
  percentage,
  linkName,
  onClick,
  dataAos,
}: IProps) => {
  return (
    <div
      onClick={onClick}
      data-aos={dataAos}
      className="min-h-max w-full cursor-pointer rounded-3xl border p-4 transition-colors duration-300 hover:border-primary hover:bg-primary hover:bg-opacity-10 md:w-1/3 md:px-8 md:py-6"
    >
      <div className="mb-4 flex items-center gap-4 whitespace-nowrap">
        {icon}
        <h2 className="text-lg font-medium text-black">{title}</h2>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-3xl font-semibold">{value}</p>
          {!value.includes("Rp.") && (
            <p className="text-base font-light">Products</p>
          )}
        </div>
        {percentage ? (
          <div className="flex items-center gap-1 rounded-xl bg-[#0A9D4C] bg-opacity-10 px-2 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4  text-[#0A9D4C]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
            <p className="font-semibold text-[#0A9D4C]"> {percentage}</p>
          </div>
        ) : (
          linkName && (
            <div>
              <div className="flex items-center gap-2">
                {linkName}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Label;
