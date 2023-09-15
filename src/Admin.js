import React, { useState } from 'react';
import axios from 'axios';
//const URL = 'http://localhost:8000';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

function Admin() {
  // State variables to store the form data
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [summary, setSummary] = useState('');
  const [date, setDate] = useState('');
  const [url, setUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can use the form data as needed here, for example, sending it to a server or performing some action.
    console.log('Submitted Data:');
    console.log('Title:', title);
    console.log('Writer:', writer);
    console.log('Summary:', summary);
    console.log('Date:', date);
    console.log('URL:', url);
    console.log('Image URL:', imageUrl);

    const sendingdata = {
        Title: title,
        Writer: writer,
        Summary: summary,
        Date : date,
        URL : url,
        image_url : imageUrl
      };


      if(title && writer && summary && date && url && imageUrl){
        axios.post("http://localhost:8000/register", sendingdata)
        .then( res => {
            alert('data sent')
            //history.push("/login")
        })
    } else {
        alert("invlid input")
    }


    // Clear the form fields after submission
    setTitle('');
    setWriter('');
    setSummary('');
    setDate('');
    setUrl('');
    setImageUrl('');
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h4">News Form</Typography>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Writer"
          variant="outlined"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
          required
        />
        <TextField
          label="Summary"
          variant="outlined"
          multiline
          rows={4}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
        />
        <TextField
          label="Date"
          type="date"
          variant="outlined"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <TextField
          label="URL"
          type="url"
          variant="outlined"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <TextField
          label="Image URL"
          type="url"
          variant="outlined"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default Admin;
