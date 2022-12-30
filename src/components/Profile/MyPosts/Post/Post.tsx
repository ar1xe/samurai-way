import React from 'react';

type PostPropType = {
    message: string;
    likesCount?: number
}

export const Post = (props: PostPropType) => {
    return (
        <div>
            <span>{props.message}</span>
            <span>{props.likesCount}</span>
        </div>
    );
};
