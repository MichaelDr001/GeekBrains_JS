import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import React from "react";

const Chats = ({ name }) => {
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemAvatar><Avatar></Avatar></ListItemAvatar>
                <ListItemText primary = {name} />
            </ListItemButton>
        </ListItem>
    )
}




export default Chats