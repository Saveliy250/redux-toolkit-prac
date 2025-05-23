import React from 'react';
import {postAPI} from "../services/postService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {

    const {data: posts} = postAPI.useFetchAllPostsQuery(100)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    return (
        <div>
            <div className={'post__list'}>
                <button onClick={handleCreate}></button>
                {posts && posts.map(post => (
                    <PostItem update={handleUpdate} remove={handleRemove} post={post} key={post.id} />
                ))}
            </div>
        </div>
    );
};

export default PostContainer;