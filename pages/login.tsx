import { Box, Button, TextField, Typography } from "@mui/joy";
import React from "react";
import styles from "../styles/Login.module.css";

function login() {
  return (
    <main className={styles.main}>
      <div className={styles.leftContainer}>
        <img
          className={styles.image}
          src="https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
        />
      </div>
      <div className={styles.rightContainer}>
        <Box
          sx={{
            py: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "wrap",
            paddingTop: "30vh",
          }}
        >
          <Typography>Login</Typography>
          <TextField label="Username" placeholder="Username" color="primary" required />
          <TextField
            label="Password"
            placeholder="Password"
            color="primary" 
            required
            type="password"
          />
          <Button variant="outlined">Login</Button>
        </Box>
      </div>
    </main>
  );
}

export default login;
