import React, {FC} from 'react';

type PropsType = {
    // id: number
    // title: string
    // isDone: boolean
    tasks: ArrayProps[]
    children?: React.ReactNode
}

type ArrayProps = {
    id: number
    title: string
    isDone: boolean
}

export const SuperTodoList: FC<PropsType> = (props) => {
    const {tasks, children, ...otherProps} = props
    const mapped = tasks.map((el) => {
        return (
            <li key={el.id}>
                <span>{el.id}</span>
                <span>{el.title}</span>
                <input type='checkbox' checked={el.isDone}/>
            </li>
        )
    })
    return (
        <div>
            <ul>
                {mapped}
            </ul>
            <hr/>
            {children}
            <hr/>
        </div>
    );
};

