import React from 'react'

//pages
import Menu_Left from '../home/components/menu-left'
import Messages from '../home/components/messages'
import Profile_Single from './components-profile/profile.single'

interface Id {
    profileId: string
}

const Profile_Home = async ({ profileId }: Id) => {

    return (
        <main className="flex items-center justify-between md:max-w-6xl mx-auto scrollbar-none">
            <div className="w-full">
                <div className="hidden md:block">
                    <Menu_Left />
                </div>
                <Profile_Single profileId={profileId} />
                <div className="hidden md:block">
                    <Messages />
                </div>
            </div>
        </main>
    )
}

export default Profile_Home