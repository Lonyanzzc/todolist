import { postGetAllAction } from "./controller/PostGetAllAction";
import { postSaveAction } from "./controller/PostSaveAction";
import { postRemoveAction } from "./controller/PostRemoveAction";
import { postChangeAction } from "./controller/postChangeAction";

export const AppRoutes = [
    {
        path: "/posts",
        method: "get",
        action: postGetAllAction
    },
    {
        path: "/posts",
        method: "post",
        action: postSaveAction
    },
    {
        path: "/posts",
        method: "delete",
        action: postRemoveAction
    },
    {
        path: "/change",
        method: "post",
        action: postChangeAction
    },
];