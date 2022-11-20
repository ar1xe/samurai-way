import React from 'react';
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={styles.posts_wrapper}>
            <h3>My posts</h3>
            <div><h5>New post</h5>
                <div>
                    <textarea name="" id="" cols={30} rows={5}>type text tour new post</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div>
                    <Post title="First post"/>
                    <Post title="Hello!"/>
                    <Post title="WA?"/>
                    <Post title="How are you?"/>
                </div>
            </div>
        </div>
    );
};

