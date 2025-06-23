"use client";

import React from "react";
import Link from "next/link";
import classnames from "classnames";
import {usePathname, useRouter} from "next/navigation";

const Dashboard = () => {

    const currentPath = usePathname();
    const router = useRouter();

    const links = [
        { label: "Find the pets", href: "/pets" },
        { label: "Find the parks", href: "/parks" },
        { label: "Find the vets", href: "/vets" },
    ];


    return (
        <>
            <div className="p-6 col-start-3 row-start-2 flex max-w-lg flex-col space-y-6 font-bold dark:bg-white/10">
                This is the handy dandy pet app to demonstrate organization in a next js app!
            </div>
            <ul className="flex -top-px -bot space-x-6 mb-4">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={classnames(
                                "top-2 px-4 py-2 rounded-md font-semibold transition-colors shadow-sm",
                                {
                                    "bg-blue-600 text-white hover:bg-blue-700":
                                        link.href === currentPath,
                                    "bg-zinc-100 text-zinc-700 hover:bg-zinc-200":
                                        link.href !== currentPath,
                                }
                            )}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>


        </>
    );
};

export default Dashboard;
