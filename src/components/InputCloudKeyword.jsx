import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

const InputCloudKeyword = () => {
    const [wordList, setWordList] = useState([]);
    const [inputWord, setInputWord] = useState("");

    const handleInputChange = (e) => {
        setInputWord(e.target.value);
    };

    const handleAddWord = () => {
        if (inputWord.trim() !== "") {
            setWordList([...wordList, inputWord]);
            setInputWord("");
        }
    };

    return (
        <div>
            <Typography variant="h5">Registar KeyWord</Typography>
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
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 4, mx: "auto" }}
                onClick={handleAddWord}
            >
                Add Word
            </Button>
            <Typography variant="h5">KeyWord List</Typography>
            <Typography>{wordList.join(" ")}</Typography>
        </div>
    );
};

export default InputCloudKeyword;
