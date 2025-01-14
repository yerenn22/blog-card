import { FC, SVGProps } from "react";

interface ArrowIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  fill?: string;
}

export const ArrowIcon: FC<ArrowIconProps> = ({
  size = 20,
  fill = "currentColor",
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.9763 9.16658L9.50625 4.69657L10.6848 3.51807L17.1666 9.99992L10.6848 16.4817L9.50625 15.3032L13.9763 10.8332H3.83325V9.16658H13.9763Z"
        fill={fill}
      />
    </svg>
  );
};
