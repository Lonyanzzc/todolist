import { postGetAllAction } from "./controller/PostGetAllAction";
import { postSaveAction } from "./controller/PostSaveAction";
import { postRemoveAction } from "./controller/PostRemoveAction";

/**
 * All application routes.
 */
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
    }
];