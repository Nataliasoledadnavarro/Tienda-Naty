import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../img/D_NQ_682340-MLA49741544009_042022-OO.webp";
import banner2 from "../img/D_NQ_689771-MLA49805531493_042022-OO.webp";
import banner3 from "../img/D_NQ_756685-MLA49771401400_042022-OO.webp";
import banner4 from "../img/D_NQ_778878-MLA49774814146_042022-OO.webp";
import banner5 from "../img/D_NQ_825721-MLA49805151978_042022-OO.webp";
import banner6 from "../img/D_NQ_967094-MLA49783916425_042022-OO.webp";
import banner7 from "../img/D_NQ_980498-MLA49613671241_042022-OO.webp";
import { styled } from "@mui/material/styles";
import CardPromo from "./CardPromo";
import {
  BsFillCreditCard2BackFill as TarjetaCredito,
  BsFillCreditCard2FrontFill as TarjetaDebito,
} from "react-icons/bs";
import { FaHandHoldingUsd as Cuotas } from "react-icons/fa";
import { GiMoneyStack as Efectivo } from "react-icons/gi";
import { AiOutlinePlus as Mas } from "react-icons/ai";
import Divider from "@mui/material/Divider";

const Home = () => {
  const imagenes = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
  ];
  const tamañoPantalla = window.innerWidth;

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const Img = styled("img")({
    display: "block",
    width: "100%",
    height: "100%",
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <Slider {...settings}>
          {imagenes.map((banner, index) => (
            <Box key={index}>
              <Img src={banner} alt="banner de ofertas"></Img>
            </Box>
          ))}
        </Slider>
      </Grid>
      <Container
        sx={{
          mt: 6,
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            boxShadow: 3,
            height: "100px",
            bgcolor: "white",
          }}
        >
          <CardPromo
            titulo="Tarjeta de crédito"
            link="Ver promociones bancarias"
            icono={<TarjetaCredito />}
            key={1}
          />
          {tamañoPantalla > 500 && (
            <CardPromo
              titulo="Tarjeta de débito"
              link="Ver más"
              icono={<TarjetaDebito />}
              key={2}
            />
          )}
          {tamañoPantalla > 700 && (
            <CardPromo
              titulo="Cuotas sin tarjeta"
              link="Conocé Mercado Crédito"
              icono={<Cuotas />}
              key={3}
            />
          )}
          {tamañoPantalla > 900 && (
            <CardPromo
              titulo="Efectivo"
              link="Ver más"
              icono={<Efectivo />}
              key={4}
            />
          )}
          <Divider orientation="vertical" flexItem />
          <CardPromo titulo="" link="" icono={<Mas />} Key={4} />
        </Grid>
      </Container>
    </Grid>
  );
};

export default Home;
