//importação para estilização
import { Box, Container, Grid2, styled, Typography } from "@mui/material";
//Importação do local onde a imagem esta armazenada
import Avatar from "../../../../assets/images/avatar.jpg";
//Importação de Icone pelo Material UI
import DownloadIcon from "@mui/icons-material/FileDownload";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
//Importação de estilização do Button
import StyledButton from "../../../../components/StyledButton/StyledButton";
//Importação de estilização do tema e da animação do background
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  //css para a section hero
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      // >=mobile
      paddingTop: "0",
    },
  }));

  //css para a imagem
  const StyledImg = styled("img")(({ theme }) => ({
    width: "60%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.secondary.dark}`,
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 5 }}>
              <Box position="relative">
                <Box position="absolute" width={"100%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 7 }}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
                Hugo Gatti
              </Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">
                Desenvolvedor FullStack
              </Typography>
              <Grid2 container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid2 size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                  <StyledButton onClick={() => console.log("Download")}>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                  <StyledButton onClick={() => console.log("Contato")}>
                    <MailOutlineIcon />
                    <Typography>Contato</Typography>
                  </StyledButton>
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
