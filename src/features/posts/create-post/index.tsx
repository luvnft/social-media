"use client";

import { Button } from "@/shared/shadcn/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/shadcn/components/ui/dialog";
import { useEffect, useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { ShareButton } from "@/features/posts/share-button";

export const CreatePost = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string>();

  // useEffect(() => {
  //   if (!uploadedImage) return;

  //   let objectUrl = URL.createObjectURL(uploadedImage);
  //   setPreviewImage(objectUrl);
  //   URL.revokeObjectURL(objectUrl);
  // }, [uploadedImage]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          className={
            "group justify-start hover:bg-hover flex items-center gap-3 py-6 px-3 font-normal"
          }
        >
          <BsPlusSquare
            className={
              "w-6 h-6 group-hover:scale-110 transition ease-linear duration-100"
            }
          />
          Create
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Create new post
          </DialogTitle>
        </DialogHeader>
        {!uploadedImage ? (
          <div className="text-center flex flex-col gap-6">
            <p className="text-2xl">Drag photos here</p>
            <form>
              <input
                type="file"
                id="uploadImage"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setUploadedImage(e.target.files[0]);
                  }
                }}
              />
              {/* TODO: Replace label with button */}
              <label
                htmlFor="uploadImage"
                className="py-3 px-5 bg-slate-900 text-white rounded-sm hover:bg-slate-800 cursor-pointer text-lg"
              >
                Select from computer
              </label>
            </form>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {/* TODO: change src */}
            <img src={URL.createObjectURL(uploadedImage)} alt="" />
            <div className="flex gap-2">
              <Button
                className="flex-1 bg-rose-500 text-white"
                onClick={() => {
                  setUploadedImage(null);
                  setPreviewImage(undefined);
                }}
              >
                Remove
              </Button>
              <ShareButton />
            </div>
          </div>
          // <div>Your image here</div>
        )}
      </DialogContent>
    </Dialog>
  );
};
