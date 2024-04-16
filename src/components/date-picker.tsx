import type { ControllerRenderProps } from "react-hook-form";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type DatePickerProps = {
  field:
    | ControllerRenderProps<
        {
          message: string;
          name: string;
          phone: string;
          email: string;
          destinations: string;
          date_start: Date | undefined;
          date_end: Date | undefined;
        },
        "date_end"
      >
    | ControllerRenderProps<
        {
          message: string;
          name: string;
          phone: string;
          email: string;
          destinations: string;
          date_start: Date | undefined;
          date_end: Date | undefined;
        },
        "date_start"
      >;
};

const DatePicker = ({ field }: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn("justify-start text-left font-normal", !field.value && "text-muted-foreground")}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {field.value ? format(field.value, "PPP") : <span>--/--/--</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" showOutsideDays={false} selected={field.value} onSelect={field.onChange} initialFocus />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
