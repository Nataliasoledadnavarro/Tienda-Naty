import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../img/D_NQ_616919-MLA49612752598_042022-OO.webp";
import banner2 from "../img/D_NQ_619381-MLA49609927853_042022-OO.webp";
import banner3 from "../img/D_NQ_620081-MLA49613189312_042022-OO.webp";
import banner4 from "../img/D_NQ_916500-MLA49613032017_042022-OO.webp";
import banner5 from "../img/D_NQ_923898-MLA49591001534_042022-OO.webp";
import banner6 from "../img/D_NQ_942274-MLA49633371395_042022-OO.webp";
import banner7 from "../img/D_NQ_980498-MLA49613671241_042022-OO.webp";
import { styled } from "@mui/material/styles";

const Home = () => {
  const settings = {
    className: "carousel",
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
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <Slider {...settings}>
          <Box>
            <Img src={banner1}></Img>
          </Box>
          <Box>
            <Img src={banner2}></Img>
          </Box>
          <Box>
            <Img src={banner3}></Img>
          </Box>
          <Box>
            <Img src={banner4}></Img>
          </Box>
          <Box>
            <Img src={banner5}></Img>
          </Box>
          <Box>
            <Img src={banner6}></Img>
          </Box>
          <Box>
            <Img src={banner7}></Img>
          </Box>
        </Slider>
      </Grid>
    </Grid>
  );
};

export default Home;
