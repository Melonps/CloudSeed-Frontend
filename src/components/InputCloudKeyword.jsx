import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

const InputCloudKeyword = ({ words, setWords }) => {
    const [inputWord, setInputWord] = useState("");

    const addWord = () => {
        const trimmedWord = inputWord.trim();
        if (trimmedWord !== "") {
            setWords((prevWords) => [...prevWords, trimmedWord]);
            setInputWord("");
        }
    };

    const removeWord = (index) => {
        setWords((prevWords) => prevWords.filter((_, i) => i !== index));
    };

    const handleInputChange = (e) => {
        setInputWord(e.target.value);
    };

    return (
        <div>
            <Typography variant="h5">Input Cloud Keyword</Typography>
            <TextField
                margin="normal"
                required
                fullWidth
                id="text"
                label="Word"
                autoComplete="text"
                autoFocus
                value={inputWord}
                onChange={handleInputChange}
            />
            <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 4 }}
                onClick={addWord}
            >
                Add Word
            </Button>
            <Typography variant="h5">Cloud Keyword List</Typography>
            {words.length > 0 ? (
                <ul>
                    {words.map((word, index) => (
                        <li key={index}>
                            <Typography variant="body2" sx={{ mt: 2 }}>
                                {word}
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
            ) : (
                <Typography variant="body2">No keywords added.</Typography>
            )}
        </div>
    );
};

export default InputCloudKeyword;
