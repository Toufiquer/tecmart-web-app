/*
|-----------------------------------------
| setting up DropdownItem for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NUMSTR = number | string;

const DropdownItem = ({
  title,
  label,
  data,
}: {
  title: string;
  label?: string;
  data: { id: NUMSTR; name: string; link?: string }[];
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="cursor-pointer rounded border px-2">{title}</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {label !== "" && (
          <>
            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        {data.map((curr) => (
          <DropdownMenuItem
            className={`border-t-0 ${curr.name.toLocaleLowerCase() === "remove" && "mt-2 border-t text-red-500"}`}
            key={curr.id}
          >
            {curr.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownItem;
DropdownItem.defaultProps = {
  label: "",
};
