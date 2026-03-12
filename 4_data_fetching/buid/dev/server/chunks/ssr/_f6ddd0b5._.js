module.exports = [
"[project]/src/db.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$better$2d$sqlite3$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-better-sqlite3/dist/index.mjs [app-rsc] (ecmascript)");
;
;
const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$better$2d$sqlite3$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaBetterSqlite3"]({
    url: "file:./dev.db"
});
const db = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
    adapter
});
const __TURBOPACK__default__export__ = db;
}),
"[project]/src/actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"409af8cf08fc4dd0c32a4f1531012daf065c449638":"toggleTodoStatus","40a54bf0e6d26758edcc7bb7a358c31437ca30fa31":"findTodoById","40e3fe0d34ba5cea38a40369aa5e6317253c64ec2e":"deleteTodo","6077acc3e3d1a457c6de6a375e0d1d6d07d52a90dc":"addTodo","60ea9c916c6361cee93200d1f681b222210dfc99eb":"updateTodo"},"",""] */ __turbopack_context__.s([
    "addTodo",
    ()=>addTodo,
    "deleteTodo",
    ()=>deleteTodo,
    "findTodoById",
    ()=>findTodoById,
    "toggleTodoStatus",
    ()=>toggleTodoStatus,
    "updateTodo",
    ()=>updateTodo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function addTodo(_formState, formData) {
    const titulo = formData.get("titulo")?.toString().trim() ?? "";
    const descricao = formData.get("descricao")?.toString().trim() ?? "";
    if (!titulo) {
        return {
            errors: "O titulo e obrigatorio.",
            fields: {
                titulo,
                descricao
            }
        };
    }
    if (titulo.length < 5) {
        return {
            errors: "O titulo deve conter no minimo 5 caracteres.",
            fields: {
                titulo,
                descricao
            }
        };
    }
    if (descricao.length < 10) {
        return {
            errors: "A descricao deve conter no minimo 10 caracteres.",
            fields: {
                titulo,
                descricao
            }
        };
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].todo.create({
            data: {
                titulo,
                descricao,
                status: "pendente"
            }
        });
    } catch  {
        return {
            errors: "Ocorreu um erro ao criar a tarefa. Tente novamente.",
            fields: {
                titulo,
                descricao
            }
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
}
async function deleteTodo(formData) {
    const id = BigInt(formData.get("id"));
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].todo.delete({
        where: {
            id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
}
async function findTodoById(id) {
    const todo = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].todo.findUnique({
        where: {
            id
        }
    });
    return todo;
}
const updateTodo = async (_formState, formData)=>{
    const titulo = formData.get("titulo")?.toString().trim() ?? "";
    const descricao = formData.get("descricao")?.toString().trim() ?? "";
    const id = BigInt(formData.get("id"));
    if (!titulo) {
        return {
            errors: "O titulo e obrigatorio.",
            fields: {
                titulo,
                descricao
            }
        };
    }
    if (titulo.length < 5) {
        return {
            errors: "O titulo deve conter no minimo 5 caracteres.",
            fields: {
                titulo,
                descricao
            }
        };
    }
    if (descricao.length < 10) {
        return {
            errors: "A descricao deve conter no minimo 10 caracteres.",
            fields: {
                titulo,
                descricao
            }
        };
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].todo.update({
            where: {
                id
            },
            data: {
                titulo,
                descricao
            }
        });
    } catch  {
        return {
            errors: "Ocorreu um erro ao atualizar a tarefa. Tente novamente.",
            fields: {
                titulo,
                descricao
            }
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
};
async function toggleTodoStatus(formData) {
    const id = BigInt(formData.get("id"));
    const todo = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].todo.findUnique({
        where: {
            id
        }
    });
    if (!todo) {
        return;
    }
    const novoStatus = todo.status === "pendente" ? "concluida" : "pendente";
    console.log(TodoEdit, todo.status, novoStatus);
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].todo.update({
        where: {
            id
        },
        data: {
            status: novoStatus
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    addTodo,
    deleteTodo,
    findTodoById,
    updateTodo,
    toggleTodoStatus
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addTodo, "6077acc3e3d1a457c6de6a375e0d1d6d07d52a90dc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTodo, "40e3fe0d34ba5cea38a40369aa5e6317253c64ec2e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(findTodoById, "40a54bf0e6d26758edcc7bb7a358c31437ca30fa31", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateTodo, "60ea9c916c6361cee93200d1f681b222210dfc99eb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleTodoStatus, "409af8cf08fc4dd0c32a4f1531012daf065c449638", null);
}),
"[project]/.next-internal/server/app/todos/create/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions.js [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/todos/create/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "6077acc3e3d1a457c6de6a375e0d1d6d07d52a90dc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addTodo"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$todos$2f$create$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/todos/create/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_f6ddd0b5._.js.map