'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

// Replace this with your actual words list or data source
import { words } from '@/lib/data'

const Searchbar: React.FC = () => {
    const [activeSearch, setActiveSearch] = useState<string[]>([]);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value;

        if (searchTerm === '') {
            setActiveSearch([]);
            return;
        }

        // Filter words based on the input and limit results to 8
        setActiveSearch(words.filter((w) => w.includes(searchTerm)).slice(0, 8));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Optional: Add functionality for handling form submission if needed
    };

    return (
        <form className="w-[500px] h-[400]" onSubmit={handleSubmit}>
            <div className="relative">
                <input
                    type="search"
                    placeholder="   Tugas Apa Yang Ingin Kamu Cari           |             Lokasi"
                    className="w-full p-4 rounded-xl bg-slate-800 text-white"
                    onChange={handleSearch}
                />
                <button
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-600 rounded-xl"
                >
                    <AiOutlineSearch />
                </button>
            </div>

            {activeSearch.length > 0 && (
                <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                    {activeSearch.map((s, index) => (
                        <span key={index}>{s}</span>
                    ))}
                </div>
            )}
        </form>
    );
};

export default Searchbar;
