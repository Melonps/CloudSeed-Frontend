import { useState, useEffect } from "react";
import { TextField, Button, Typography } from "@mui/material";

import axios from 'axios'

const AddComment = () => {
    const [words, setWords] = useState([]); // wordsとsetWordsの宣言を追加
    const [inputWord, setInputWord] = useState("");
    const [inputComment, setInputComment] = useState("");
    const [fetchedData, setFetchedData] = useState([]); // フェッチしたコメントを保存するステート

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/kintone/comment')
                console.log(response.data.response)
                setFetchedData(response.data.response)
                // setFetchedComments(response.data.records);
                console.log(fetchedData[0]) // response.data.recordsに適切なデータ構造が存在すると仮定
            } catch (error) {
                console.error(error);
            }
        };

        fetchComments();
    }, []); 
    
    useEffect(() => {
        if (fetchedData) {
            fetchedData.forEach(record => {
                console.log(`Keyword: ${record.keyword.value}, Comment: ${record.comment.value}`);
            });
        }
    }, [fetchedData]);

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

    const RegistarAll = async () => {
        const headers = {
            'Content-Type': 'application/json',
        }
        
        const postData = {
            "records": words.map(word => ({
                "keyword": { value: word.word },
                "comment": { value: word.comment }
            }))
        }
        
        
        try {
            const response = await axios.post('http://127.0.0.1:5000/kintone/comment', postData, {
                headers: headers,
            }).then(response => console.log(response.text))
            window.location.reload()
        } catch (error) {
            console.error(error)
        }
    
    }
    return (
        <div>
            <Typography variant="h5">検索キーワードとコメントを追加</Typography>
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
                キーワードとコメントを追加する
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
                追加したキーワード、コメントを記録する
            </Button>
            <Typography variant="h5">今までのコメント</Typography>
            <ul>
                {fetchedData && fetchedData.map((comment, index) => (
                    <li key={index}>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            <p>キーワード: {comment.keyword.value}</p> 
                            <p>コメント： {comment.comment.value}</p>
                        </Typography>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default AddComment;
