'use client'

import { useSession } from "next-auth/react";

const ClientPage = () => {

    const { data: session } = useSession();

    if (!session || !session.user) {
        return <p className="flex min-h-screen flex-col items-center justify-between p-24">Você precisa está autenticado</p>;
    }
    return (

        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Component client autenticado</h1>
        </div>

    );
};

export default ClientPage;

