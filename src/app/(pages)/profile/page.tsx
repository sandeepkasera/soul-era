"use client"
import axios from "axios";
import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function ProfilePage({ params }: any) {

    const router = useRouter();

    function getCookie(name: string): string | undefined {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            const part = parts.pop();
            if (part) {
                return part.split(';').shift();
            }
        }
        return undefined;
    }

    useEffect(() => {
        const user = getCookie('shit_user');
        if (user) {
            router.push(`/profile/${user}`);
        } else {
            router.push('/login');
        }
    });

    return null;
}
