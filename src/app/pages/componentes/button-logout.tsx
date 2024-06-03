'use client'

//react/next
import { signOut } from 'next-auth/react'
import React, { useState } from 'react'

//pages
import Loading from './loading'

const Button_Logout = () => {
    const [loading, setLoading] = useState<boolean>(false)

    const handleLogin = async () => {
        setLoading(true)
        try {
            await signOut()
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <button onClick={handleLogin}
                className="w-full px-4 py-2 font-medium text-white bg-[var(--main)] rounded-md hover:scale-95 duration-200 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
                Logout
            </button>
            {
                loading && <Loading />
            }
        </>
    )
}

export default Button_Logout