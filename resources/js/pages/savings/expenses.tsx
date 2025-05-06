import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import InputGroupButton from '@/components/ui/input-group-button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Expenses',
        href: '/savings/expenses',
    },
];

export default function Expenses() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full max-w-md flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <Card className="rounded-xl text-center">
                        <CardHeader className="p-4">
                            <CardTitle className="text-xl">
                                Expenses Categories
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="px-10 py-8">
                            
                            <div className="grid gap-2">
                                <InputGroupButton></InputGroupButton>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
