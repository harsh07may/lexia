import { Button } from "@/components/ui/button";

/**
 * Custom button library Using Shadcn.ui.
 */
export default function ButtonsPage() {
  return (
    <div className="flex max-w-[200px] flex-col space-y-5 p-4">
      <Button>Default</Button>
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"primaryOutline"}>Primary Outline</Button>

      <Button variant={"secondary"}>Default Outline</Button>
      <Button variant={"secondaryOutline"}>Primary Outline</Button>

      <Button variant={"danger"}>Danger</Button>
      <Button variant={"dangerOutline"}>Danger Outline</Button>

      <Button variant={"super"}>Super</Button>
      <Button variant={"superOutline"}>Super Outline</Button>

      <Button variant={"ghost"}>Super Outline</Button>

      <Button variant={"sidebar"}>Sidebar</Button>
      <Button variant={"sidebarOutline"}>Sidebar Outline</Button>
    </div>
  );
}
