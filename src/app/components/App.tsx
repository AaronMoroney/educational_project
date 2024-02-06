import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import ThemeSwitchControl  from "../../features/theme/components/ThemeSwitchControl"
import Todos  from "../../features/todo/components/Todos"

function App() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Container maxWidth="sm" sx={{ py: 2 }}>
        <Box sx={{ bgcolor: "background.paper", pt: 2, px: 4 }}>
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="flex-end" >
              <ThemeSwitchControl/>
            </Stack >
            <Container maxWidth="sm">
              <Todos /> 
            </Container>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default App;