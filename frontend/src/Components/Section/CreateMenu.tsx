import * as React from "react";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { useState } from "react";
import axios from "axios";
import { FormType } from "../../Types/MenuTypes";
import { toast } from "sonner";

const backendUrl = 'https://deepnetsoft.timetake.shop';

const CreateMenu = () => {
  const [formData, setFormData] = useState<FormType>({
    menu: "",
    description: "",
    itemName: "",
    price: "",
    itemsDescription: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { menu, description, itemName, price, itemsDescription } = formData;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${backendUrl}/create-menu`, {
        menu,
        description,
        itemName,
        price,
        itemsDescription,
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        setFormData({
          menu: "",
          description: "",
          itemName: "",
          price: "",
          itemsDescription: "",
        });
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="bg-[#0796EF] text-white">
          Create
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Create Entry</DrawerTitle>
            <DrawerDescription>Fill out the form below.</DrawerDescription>
          </DrawerHeader>
          <form className="p-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="menu"
                name="menu"
                className="w-full rounded border px-3 py-2"
                value={menu}
                onChange={handleChange}
                placeholder="Menu"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="description"
                name="description"
                className="w-full rounded border px-3 py-2"
                value={description}
                onChange={handleChange}
                placeholder="Menu description"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="itemName"
                name="itemName"
                className="w-full rounded border px-3 py-2"
                value={itemName}
                onChange={handleChange}
                placeholder="Items"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                id="price"
                name="price"
                className="w-full rounded border px-3 py-2"
                placeholder="Price"
                value={price}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <textarea
                id="itemsDescription"
                name="itemsDescription"
                className="w-full rounded border px-3 py-2"
                value={itemsDescription}
                onChange={handleChange}
                placeholder="Items description"
              />
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
