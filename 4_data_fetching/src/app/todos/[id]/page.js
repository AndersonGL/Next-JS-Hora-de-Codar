import db from "@/db";
import { notFound } from "next/navigation";



const TodoShow = async ({params}) => {
const resolvedParams = await params;
const rawId = resolvedParams?.id;

if (!rawId) {
    notFound();
}

let id;

try {
    id = BigInt(rawId);
} catch {
    notFound();
}

const todo = await db.todo.findUnique({
    where: { id }
});

if (!todo) {
    notFound();
}


return (
    <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{todo.titulo}</h1>
        <p className="text-gray-600 mb-2">{todo.descricao}</p>
        <p className="text-sm text-gray-500">Status: {todo.status}</p>
    </main>
);
};



export default TodoShow;         




