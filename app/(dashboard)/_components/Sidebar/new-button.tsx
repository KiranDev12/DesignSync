///Custom button for creating an organization
"use client";

import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { Hint } from "@/components/ui/hint";
export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* Using asChild in DialogTrigger allows you to customize the trigger
        element more freely. When you use asChild, the element inside
        DialogTrigger becomes the child of the trigger, rather than the trigger
        itself being replaced by that element. This gives you more flexibility
        in styling and adding additional elements around the trigger. */}

        <div className="aspect-square">
          <Hint
            label="Create Organization"
            side="right"
            align="start"
            sideOffset={18}
          >
            <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 m-0 bg-transparent border-none max-w-[480px]">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};
