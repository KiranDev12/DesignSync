"use client";
import { api } from "@/convex/_generated/api";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { useApiMutation } from "@/hooks/use-api-mutation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { ConfirmModel } from "./confirm-model";
import { Button } from "./ui/button";
import { useRenameModal } from "@/store/use-rename";
interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export const Actions = ({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionsProps) => {
  const { mutate, pending } = useApiMutation(api.board.remove);
  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success("Link copied"))
      .catch(() => toast.error("Failed to copy link"));
  };

  const onDelete = () => {
    mutate({ id })
      .then(() => toast.success("Board deleted successfully"))
      .catch(() => toast.error("Failed to delete board"));
  };

  const { onOpen } = useRenameModal();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={sideOffset}
        className="w-60"
      >
        <DropdownMenuItem className="p-3 cursor-pointer" onClick={onCopyLink}>
          <Link2 className="h-4 w-4 mr-2" />
          Copy board link
        </DropdownMenuItem>
        <DropdownMenuItem
          className="p-3 cursor-pointer"
          onClick={() => onOpen(id, title)}
        >
          <Pencil className="h-4 w-4 mr-2" />
          Rename board
        </DropdownMenuItem>
        <ConfirmModel
          header="Delete board?"
          description="This will delete the board and all of its content"
          disabled={pending}
          onConfirm={onDelete}
        >
          <Button
            variant="ghost"
            className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </ConfirmModel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
