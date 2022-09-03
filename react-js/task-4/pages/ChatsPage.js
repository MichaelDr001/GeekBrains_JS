import React, { useState } from "react";

const ChatsPage = () => {
    const [chats] = useState ([
        {
            id: 1,
            name: 'Michael'
        },
        {
            id: 2,
            name: 'Diana'
        }
    ])

    return (
        <div>
            {chats.map((chat) => {
                return(
                    <div key={chat.id}>
                        <h3>{chat.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default ChatsPage