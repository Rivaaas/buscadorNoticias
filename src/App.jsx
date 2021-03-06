import { Container, Grid, Typography } from "@mui/material";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import { NoticiasProvider } from "./context/NoticiasProvider";

function App() {
  return (
    <NoticiasProvider>
      <div>
        <Container>
          <header>
            <Typography align="center" marginY={5} component="h1" variant="h4">
              Buscador de noticias
            </Typography>
          </header>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={6} xs={12} lg={4}>
              <Formulario />
            </Grid>
          </Grid>

          <ListadoNoticias/>
        </Container>
      </div>
    </NoticiasProvider>
  );
}

export default App;
