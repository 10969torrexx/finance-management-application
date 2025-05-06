import React from "react";
export default function InputGroupButton() {
    return (
        <div className="flex mb-3">
            <input
                type="text"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                className="border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-l-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
            <button
                type="button"
                id="button-addon2"
                className="h-9 rounded-r-md border border-l-0 border-primary-300 bg-primary px-4 text-sm font-bold text-white transition-colors duration-150 hover:bg-primary/90 active:bg-primary/80 focus:outline-none"
            >
                Click
            </button>
        </div>
    );
}