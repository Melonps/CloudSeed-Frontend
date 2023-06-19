import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

const AddComment = ({ words, setWords }) => {
    const [inputWord, setInputWord] = useState("");
    const [inputComment, setInputComment] = useState("");

    const addWord = () => {
        if (inputWord.trim() !== "") {
            const newWord = {
                word: inputWord.trim(),
                comment: inputComment.trim(),
            };
            setWords((prevWords) => [...prevWords, newWord]);
            setInputWord("");
            setInputComment("");
        }
    };

    const removeWord = (index) => {
        setWords((prevWords) => prevWords.filter((_, i) => i !== index));
    };

    const handleInputChangeWord = (e) => {
        setInputWord(e.target.value);
    };

    const handleInputChangeComment = (e) => {
        setInputComment(e.target.value);
    };

    return (
        <div>
            <Typography variant="h5">Input Cloud Keyword</Typography>
            <TextField
                margin="normal"
                required
                fullWidth
                id="word"
                label="Word"
                autoComplete="word"
                autoFocus
                value={inputWord}
                onChange={handleInputChangeWord}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="comment"
                label="Comment"
                autoComplete="comment"
                autoFocus
                value={inputComment}
                onChange={handleInputChangeComment}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 4 }}
                onClick={addWord}
            >
                Add Word
            </Button>
            <Typography variant="h5">Cloud Keyword List</Typography>
            <ul>
                {words.map((word, index) => (
                    <li key={index}>
                        <Typography
                            component="body1"
                            variant="h5"
                            sx={{ mt: 1 }}
                        >
                            {word.word} ： {word.comment}
                            <Button
                                onClick={() => removeWord(index)}
                                color="secondary"
                            >
                                Remove
                            </Button>
                        </Typography>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddComment;
