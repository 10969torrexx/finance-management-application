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

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Expenses',
        href: '/savings/expenses',
    },
];

export default function Expenses() {
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState<string[]>([]);

    const handleAdd = () => {
        if (inputValue.trim() === "") return;
        setItems([...items, inputValue]);
        setInputValue("");
    };
    return (
        <div className="bg-white flex min-h-svh flex-col items-center gap-6 p-6 md:p-10">
            <Heading title="Expenses Categories" description="Please categorize your expenses" />
            <div className="w-full h-full">
                <CategoriesList title="Category One" isDisabled />
                <CategoriesList title="Category One" isDeletable/>
            </div>
        </div>
    );
}
