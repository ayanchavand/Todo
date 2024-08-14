import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


  
export default function TodoForm({addTodo}) {
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input !== ''){
            console.log(input)
            addTodo(input)
            setInput('')
        }
        
    }
    return (
      <Box component="form"
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
        onSubmit={handleSubmit}
      >
        <TextField fullWidth label="Da faq you wanna DO?" id="fullWidth" value={input} onChange={(e) => {setInput(e.target.value)}}/>
        <Button variant="contained" type="submit">Submit</Button>
      </Box>
    );
}