import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";

const CreateMenu = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    calories: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="bg-[#0796EF] text-white ">Create</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm ">
          <DrawerHeader>
            <DrawerTitle>Create Entry</DrawerTitle>
            <DrawerDescription>Fill out the form below.</DrawerDescription>
          </DrawerHeader>
          <form className="p-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded border px-3 py-2"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Menu"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="email"
                name="email"
                className="w-full rounded border px-3 py-2"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Menu description"
              ></textarea>
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded border px-3 py-2"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Items"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                id="calories"
                name="calories"
                className="w-full rounded border px-3 py-2"
                placeholder="Price"
                value={formData.calories}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                id="email"
                name="email"
                className="w-full rounded border px-3 py-2"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="items description"
              ></textarea>
            </div>
            <DrawerFooter>
              <Button type="submit">Create</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateMenu;
