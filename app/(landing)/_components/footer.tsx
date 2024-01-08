import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="px-4 h-[10vh] max-w-5xl mx-auto flex items-center justify-between">
      <Button
        variant="ghost"
        size="sm"
        className="underline text-muted-foreground text-sm"
      >
        Privacy Policy
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="underline text-muted-foreground text-sm"
      >
        Terms & Condition
      </Button>
    </div>
  );
};
