import React, { useState, useEffect } from "react";
import { getJoke } from "../service/axios.joke";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const ChuckNorris = () => {
  const [Joke, SetJoke] = useState("");
  const [Likes, SetLikes] = useState(0);
  const [Dislikes, SetDislikes] = useState(0);

  useEffect(() => {
    obtainJoke();
  }, []);

  const obtainJoke = () => {
    getJoke()
      .then((response) => {
        if (response.status === 200) {
          SetJoke(response.data.value);
        }
      })
      .catch((error) => {
        alert("Somethin went wrong: " + error);
      });
  };

  const countLikes = (setCounter, counter) => {
    setCounter(counter + 1);
    obtainJoke();
  };

  return (
    <div>
      <Container sx={{ width: "500px", height: "400px" }} maxWidth="sm">
        <h1>ChuckNorris Random Jokes</h1>
        <Box sx={{ height: "150px" }}>{Joke}</Box>
        <br />
        <Button sx={{ mr: 2 }} variant="outlined" onClick={obtainJoke}>
          Get Joke
        </Button>
        <IconButton
          aria-label="like"
          onClick={() => countLikes(SetLikes, Likes)}
        >
          <ThumbUpIcon /> {Likes}
        </IconButton>
        <IconButton
          aria-label="dislike"
          onClick={() => countLikes(SetDislikes, Dislikes)}
        >
          <ThumbDownIcon /> {Dislikes}
        </IconButton>
      </Container>
    </div>
  );
};

export default ChuckNorris;
