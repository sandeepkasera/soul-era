"use client"
import axios from "axios";
import {toast} from "react-hot-toast"
import {useRouter} from "next/navigation"
import Card from "@/app/components/card";
import productlist from "@/app/assets/data/productlist.json";
import { FaSignOutAlt, FaUser } from 'react-icons/fa';

export default function ProfilePage({params}: any) {
    const router = useRouter()
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout Successfully')
            router.push('/login')
        } catch (error: any) {
            console.log(error.message)
           toast.error(error.message)
        }
    }
    return (
        <div className="grid">
            <div className="relative">
                <div className="absolute right-2">
                <p>Hi {params.user}</p>
                <button
                    onClick={logout}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                >   
                    <FaSignOutAlt className="h-5 w-5 mr-2" />
                    Logout
                </button>
                </div>
            </div>
            
            <div className="card-list flex-row flex-wrap space-x-4 object-cover sm:flex md:flex justify-center gap-4 mt-4">
            {productlist.map((product) => (
            <Card
                key={product.id}
                id={product.id}
                brand={product.brand}
                name={product.name}
                size={product.size}
                price={product.price}
                image={product.imageUrl}
            />
            ))}
      </div>
        </div>
    )
}