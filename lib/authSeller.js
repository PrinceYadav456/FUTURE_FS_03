import { clerkClient } from '@clerk/nextjs/server';  /*this import the clerk from server  */
import { NextResponse } from 'next/server';

const authSeller = async (userId) => {
    try {

        const client = await clerkClient()
        const user = await client.users.getUser(userId)

        if (user.publicMetadata.role === 'seller') {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}

export default authSeller;