import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  Slide,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Countdown from "react-countdown";
import {
  MarketCap,
  OHMPrice,
  WSOHMPrice,
  CircSupply,
  BackingPerOHM,
  CurrentIndex,
  StakingRaito,
  StakingTVL,
  POL,
} from "../TreasuryDashboard/components/Metric/Metric";
import "./style.scss";
import dashboardImg from "../../assets/images/dashboard-img.png";

function Home() {
  var endDate = new Date("12/21/2021 20:00:00"); // MM/DD/YYYY  HH:mm:ss
  var milisecondBetweenTwoDate = Math.abs(endDate.getTime() - new Date().getTime());
  const totalTimeCountdown = milisecondBetweenTwoDate;

  const Completionist = () => <span>Time ended!</span>;

  const rendererCountDown = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <Typography variant="h2" className="count-down-container" color="textPrimary">
          {Number(days) > 0 ? <span>{days.toString().padStart(2, "0")} D : </span> : null}
          <span>{hours.toString().padStart(2, "0")} H : </span>
          <span>{minutes.toString().padStart(2, "0")} M : </span>
          <span>{seconds.toString().padStart(2, "0")} S</span>
        </Typography>
      );
    }
  };

  return (
    <div id="home-view">
      <Container>
        <Box>
          <Grid container spacing={4}>
            <Grid item className="left-side" xs={12} sm={6}>
              <Box>
                <Box className="heading">
                  <Typography variant="h2">An OHM Fork That’s Just Better</Typography>
                </Box>
                <Box>
                  <Box sx={{ pt: 3, pb: 1 }}>
                    <Typography variant="h6" color="textSecondary">
                      FAQ
                    </Typography>
                  </Box>

                  <Accordion defaultExpanded={true}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel4a-header"
                    >
                      <Typography component="p">
                        What is the relationship between <strong>OHM</strong> and <strong>MUSH</strong>?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography component="p">
                        MUSH is a 'spoon' (a fork which develops into its own unique system, and prefers cooperation
                        over competition) of OHM built on the Binance Smart Chain network, allowing it to utilise the speed,
                        security, and scalability that Binance Smart Chain offers.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography component="p">
                        Is <strong>$MUSH</strong> a stablecoin?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography component="p">
                        $MUSH is not a stable coin. It utilises fractional treasury reserves to extract intrinsic value.
                        MushDAO, becoming an algorithmic reserve currency, will therefore provide free floating value.
                        More information can be found on the Mathematical Basis of the DAO page.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel2a-header"
                    >
                      <Typography component="p">How does this all work?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography component="p">
                        MushDAO sells bonds to investors at a discount to market prices. The profit from these bonds
                        backs our token with real value and is used to mint new MUSH tokens using real value, allowing us
                        to offer high APYs which incentivises long-term staking.
                        <br />
                        <br />
                        Over time, the Protocol uses it's bonds to gain an increasing share of its own liquidity and
                        expand it. This means that the Protocol can guarantee the backing of tokens.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel3a-header"
                    >
                      <Typography component="p">
                        What is <strong>APY</strong>?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography component="p">
                        APY refers to Annual Percentage Yield. It utilises a real rate of return through compounding
                        interest. If you have a $100 investment with an APY of 1000%, then 365 days later your
                        investment will be $1100.
                        <br />
                        <br />
                        For an illustrative example, look at the graph below. This graph assumes that a user stakes 10
                        MUSH tokens and gains a reliable 1% daily return.
                        <br />
                        <br />
                        As you can see, APY returns become exponential over time because rewards are compounding, so a
                        long-term staking strategy can be very profitable.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel4a-header"
                    >
                      <Typography component="p">
                        Are high <strong>APYs</strong> sustainable?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography component="p">
                        APY relies on the sale of DAI bonds in order to mint new MUSH tokens. If sufficient bonds are
                        sold, then high APY rates are sustainable. If the protocol aims for 10,000% APY, and 10,000 MUSH
                        tokens are staked, 200 MUSH tokens need to be minted daily in order to achieve the APY; (Roughly
                        2% growth a day). If there are at least 200 MUSH tokens brought into the protocol from bond
                        sales, the APY is sustainable.
                        <br />
                        <br />
                        The APY can be high due to compounding interest. Funds are auto staked everyday to generate
                        exponential growth.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>
            </Grid>
            <Grid item className="right-side" xs={12} sm={6}>
              <Box className="grid-view">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box>
                      <Box sx={{ pb: 2 }}>
                        <Slide
                          direction="down"
                          mountOnEnter
                          unmountOnExit
                          in={true}
                          timeout={500}
                          style={{ transformOrigin: "0 0 0" }}
                        >
                          <Box className="game-countdown">
                            <Typography variant="h5">LET THE GAMES BEGIN</Typography>
                            <Countdown date={Date.now() + totalTimeCountdown} renderer={rendererCountDown} />
                          </Box>
                        </Slide>
                      </Box>
                      <Box sx={{ pt: 2 }}>
                        <Box className="actions" display="flex" justifyContent="center">
                          <Button size="large" variant="contained" color="secondary">
                            Buy
                          </Button>
                          <Button size="large" variant="contained" color="secondary">
                            Bond
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MarketCap />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <OHMPrice />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <WSOHMPrice />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CircSupply />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <BackingPerOHM />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CurrentIndex />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StakingRaito />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StakingTVL />
                  </Grid>
                  <Grid item xs={12}>
                    <POL />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <img className="dashboard-img" src={dashboardImg} alt="" />
    </div>
  );
}

export default Home;
