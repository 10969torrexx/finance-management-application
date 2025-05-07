import React, { useState } from "react";
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import InputGroupButton from '@/components/ui/input-group-button';
import Heading from '@/components/heading'
import { Dialog } from "@radix-ui/react-dialog";
import CategoriesList from "@/components/categories-list";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { toast } from "react-toastify";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Expenses',
        href: '/savings/expenses',
    },
];

export default function Expenses() {
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState<string[]>([]);

    const handleInputValue = (value: string) => {
        setInputValue(value);
    }

    const handleAdd = () => {
        if (inputValue.trim() === "") return;

        //TODO: check if expense is already added
        if (items.includes(inputValue)) {
            setInputValue("");
            toast.error("Expense already added");
            return;
        }

        setItems([...items, inputValue]);
        setInputValue("");
    };

    const handleRemoveItem = (index: number) => { 
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }

    return (
        <div className="flex min-h-svh flex-col items-center gap-6 p-6 md:p-10">
            <Heading title="Expenses Categories" description="Please categorize your expenses" />
            <div className="w-full h-full">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <CategoriesList 
                            key={index} 
                            title={item} isDeletable
                            onButtonClick={() => handleRemoveItem(index)}
                        />
                    ))
                ) : (
                    <CategoriesList className="italic" title="Categories goes here" isDisabled />
                )}
            </div>
            <div className="mt-auto pt-2 w-full">
                <InputGroupButton
                    value={inputValue}
                    onInputChange={handleInputValue}
                    onButtonClick={handleAdd}
                    icon={faPlus}
                />
            </div>
        </div>
    );
}
