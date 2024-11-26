import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          padding: "2rem",
          maxWidth: "400px",
          margin: "auto",
          marginTop: "10vh",
          border: "1px solid #eee",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          borderRadius: "4px",
        }}
      >
        <Stack spacing={3} useFlexGap>
          <TextField
            required
            type="email"
            label="Email"
            placeholder="your@email.com"
            variant="outlined"
            fullWidth
            autoFocus
            id="email"
            name="email"
            autoComplete="email"
          />
          <TextField
            required
            type="password"
            label="Password"
            name="password"
            placeholder="******"
            id="password"
            autoComplete="current-password"
            fullWidth
            variant="outlined"
          />
          <Button>Hello</Button>
        </Stack>
      </Box>
    </>
  );
}

export default App;
