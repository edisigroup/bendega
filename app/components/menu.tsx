"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookOpen } from "lucide-react";

export function Menu() {
  return (
    <Dialog>
      <DialogTrigger className="fixed bottom-4 right-4 bg-[#c96c45] rounded-full flex items-center text-white z-50 p-4 cursor-pointer shadow-2xl hover:-translate-y-1 transition duration-200">
        <BookOpen className="size-8" />
      </DialogTrigger>

      <DialogContent className="bg-white max-w-4xl w-full h-auto">
        <DialogHeader>
          <DialogTitle>Daftar Menu</DialogTitle>
          <DialogDescription>
            Nikmati pilihan makanan cita rasa Indonesia terbaik disini.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full h-full grid gap-0">
          <iframe
            src="/pdf/bendega-menu.pdf"
            className="w-full h-[70vh] border-[#c96c45] p-4 rounded"
            title="PDF Preview"
          />
        </div>
        <DialogFooter>
          <a href="/pdf/menu.pdf" download>
            <Button type="submit" className="bg-[#c96c45] text-white">
              Unduh Menu
            </Button>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
