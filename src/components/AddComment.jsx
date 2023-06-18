import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

const AddComment = () => {
    const [words, setWords] = useState([]); // wordsとsetWordsの宣言を追加
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

    const RegistarAll = () => {
        // 関数名をRegistarAllに修正
        if (inputWord.trim() !== "") {
            const newWord = {
                word: inputWord.trim(),
                comment: inputComment.trim(),
            };
            fetch("http://localhost:3001/words", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newWord),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Success:", data);
                    setWords((prevWords) => [...prevWords, newWord]); // setWordsの位置を修正
                    setInputWord("");
                    setInputComment("");
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
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
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            {word.word} - {word.comment}
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
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 4 }}
                onClick={RegistarAll} // 関数名を修正
            >
                Register all
            </Button>
        </div>
    );
};

export default AddComment;
