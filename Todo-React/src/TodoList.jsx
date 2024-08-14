import React from "react";
import { List, ListItem, ListItemText, Checkbox, Box } from '@mui/material';

export default function TodoList({todos}){
    return (
        <List>            
          {todos.map((todo, index) => (
            <TodoItem index={index} todo={todo} />
          ))}
        </List>
      );
}

const TodoItem = ({index, todo}) => {
    return(
        <>  
            <Box sx={{border: '2px solid grey'}}>
                <ListItem key={index}>
                    <Checkbox />
                    <ListItemText primary={todo} />      
                </ListItem>
            </Box>
        </>
    )
}