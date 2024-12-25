"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login Success", response.data);
            router.push(`/profile/${response.data.user}`)
        } catch (error: any) {
            console.log("Login Failed", error.message);
            setError(error)

        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user])
    return (
        <section className="flex items-center justify-center w-full xs:h-80vh">
            <form
                className="xs:p-10	w-full max-w-350 flex flex-col justify-between items-center border border-solid border-[#2E2E2E] bg-[#0A0A0A] rounded-md"
                onSubmit={onLogin}
            >
                {error && (
                    <div className="text-[#FF6166] flex items-center justify-center gap-2">
                        <svg
                            data-testid="geist-icon"
                            height="16"
                            strokeLinejoin="round"
                            viewBox="0 0 16 16"
                            width="16"
                            style={{ color: "currentColor" }}
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.30761 1.5L1.5 5.30761L1.5 10.6924L5.30761 14.5H10.6924L14.5 10.6924V5.30761L10.6924 1.5H5.30761ZM5.10051 0C4.83529 0 4.58094 0.105357 4.3934 0.292893L0.292893 4.3934C0.105357 4.58094 0 4.83529 0 5.10051V10.8995C0 11.1647 0.105357 11.4191 0.292894 11.6066L4.3934 15.7071C4.58094 15.8946 4.83529 16 5.10051 16H10.8995C11.1647 16 11.4191 15.8946 11.6066 15.7071L15.7071 11.6066C15.8946 11.4191 16 11.1647 16 10.8995V5.10051C16 4.83529 15.8946 4.58093 15.7071 4.3934L11.6066 0.292893C11.4191 0.105357 11.1647 0 10.8995 0H5.10051ZM8.75 3.75V4.5V8L8.75 8.75H7.25V8V4.5V3.75H8.75ZM8 12C8.55229 12 9 11.5523 9 11C9 10.4477 8.55229 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        <div className="text-sm">{error}</div>
                    </div>
                )}
                <div className="flex flex-col items-center justify-center min-h-[calc(100vh-9.6rem)] py-2">
                    <h1 className="w-full mb-3 text-2xl font-bold">{loading ? "Processing" : "Login"}</h1>
                    <div className="my-2">
                        <label htmlFor="email" className="w-full">Email: </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full text-[#A1A1A1] h-8 border border-solid border-[#2E2E2E] py-1 px-2.5 rounded bg-black text-13 mb-3"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            required
                            placeholder="Email"
                        />
                        <label htmlFor="password" className="w-full">Password:</label><br />
                        <input
                            id="password"
                            type="password"
                            className="w-full text-[#A1A1A1] h-8 border border-solid border-[#2E2E2E] py-1 px-2.5 rounded bg-black text-13"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            required
                            placeholder="Password"
                        />
                    </div>
                    <div className="">
                        <button
                            type="submit"
                            className="flex text-[#A1A1A1] items-center justify-center transition my-2 duration-150 py-2 px-2 bg-black border border-solid rounded border-[#2E2E2E] ease hover:bg-[#1F1F1F]"
                        >
                            Login Here
                        </button>
                        <Link href="/signup" >Visit Signup Page</Link>
                    </div>
                </div>
            </form>
        </section>
    )
}