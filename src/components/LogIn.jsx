import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";

// LogInコンポーネントの定義
const LogIn = () => {
    // ステートの定義
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    // ログインフォームの送信処理
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // signInWithEmailAndPassword関数を使用してユーザーをログイン
            await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
            console.log("[Succeeded] Sign in");
        } catch (error) {
            setError(
                "ログインに失敗しました。正しいメールアドレスとパスワードを入力してください。"
            );
            setError(null);
            console.error(error);
        }
    };

    // コンポーネントのマウント時に実行される処理
    useEffect(() => {
        // onAuthStateChanged関数を使用して認証の状態が変化したときにイベントを購読
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // 認証の状態が変化したときにユーザーステートを更新
            setUser(currentUser);
        });

        // クリーンアップ関数としてunsubscribeを返すことでイベントリスナーの解除を行う
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <>
            {user ? (
                // ユーザーがログインしている場合、Navigateコンポーネントを使用して指定のURLにリダイレクト
                <Navigate to="/home" replace />
            ) : (
                <>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1, mx: "auto", maxWidth: 600 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            autoComplete="email"
                            autoFocus
                            value={signInEmail}
                            onChange={(event) =>
                                setSignInEmail(event.target.value)
                            }
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            value={signInPassword}
                            onChange={(event) =>
                                setSignInPassword(event.target.value)
                            }
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 4, mx: "auto" }}
                        >
                            Log In
                        </Button>
                    </Box>
                    {/* エラーメッセージがある場合は表示 */}
                    {error && (
                        <Alert severity="error" sx={{ mt: 2 }}>
                            {error}
                        </Alert>
                    )}
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        新規ユーザ登録は<Link to="/signup">こちら</Link>
                    </Typography>
                </>
            )}
        </>
    );
};

// LogInコンポーネントをエクスポート
export default LogIn;
