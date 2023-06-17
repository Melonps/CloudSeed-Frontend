import { useState } from "react";
import axios from "axios";

const CreateAccount = () => {
    const [userId, setUserId] = useState("");
    const APIKEY = import.meta.env.VITE_API_KEY;
    const DOMAIN = import.meta.env.VITE_DOMAIN;
    const url = ``;

    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
    };

    const handleRegistration = () => {
        // APIへのデータ追加処理
        const data = {
            // 例: 'userId': userId
        };

        axios
            .post(url, data, {
                headers: {
                    "X-Cybozu-API-Token": APIKEY,
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                console.log("データがkintoneに追加されました。", response);
            })
            .catch((error) => {
                console.error("kintoneへのデータ追加に失敗しました。", error);
            });
    };

    return (
        <div>
            <input type="text" value={userId} onChange={handleUserIdChange} />
            <button onClick={handleRegistration}>登録</button>
        </div>
    );
};

export default CreateAccount;
