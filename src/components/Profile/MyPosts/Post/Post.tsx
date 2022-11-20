import React from 'react';

type PostPropType = {
    title: string;
}

export const Post = (props: PostPropType) => {
    return (
        <div>
            <span>{props.title}</span>
        </div>
    );
};
