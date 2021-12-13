import { useState, useEffect, createRef } from "react";
import { useAddress } from "src/hooks/web3Context";
import { useStore, useDispatch } from "react-redux";
import { setReferral } from "../../slices/AppSlice";
import { abi as ReferralABI } from "../../abi/Referral.json";
import { ethers, utils } from "ethers";
import { useWeb3Context } from "src/hooks/web3Context";
import { addresses } from "../../constants";

import {
  Grid,
  Paper,
  Fade,
  Backdrop,
  Box,
  Link,
  SvgIcon,
  Typography,
  Button,
  IconButton,
  Snackbar,
  TextField,
  FormControl,
} from "@material-ui/core";
import { ReactComponent as XIcon } from "../../assets/icons/x.svg";
import { NavLink } from "react-router-dom";
import { FileCopy, Close as CloseIcon } from "@material-ui/icons";
import copy from "copy-to-clipboard";
import coinsBgImg from "../../assets/images/coins-bg.png";

import DataTable from "./DataTable";

import "./style.scss";

const zeroAdrress = "0x0000000000000000000000000000000000000000";

export default function Referral() {
  const { provider, address, connected, web3, chainID } = useWeb3Context();
  const [loading, setLoading] = useState(false);

  // const address = useAddress();

  const dispatch = useDispatch();

  var {
    app: { referral: referralStorage },
  } = useStore().getState();

  const hostAddress = "http://localhost:3000";

  const [open, setOpen] = useState(false);
  const openCopy = () => {
    setOpen(true);
  };
  var [currentReferral, setCurrentReferral] = useState(referralStorage);
  var [referralCode, setReferralCode] = useState(currentReferral ?? "");
  const [myRewardsNumber, setMyRewardsNumber] = useState(0);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (connected) {
      if (currentReferral) getMyRewards(currentReferral);
    }
  }, [connected]);

  // methods

  const getMyRewards = async code => {
    setLoading(true);
    const signer = provider.getSigner();
    const referralContract = new ethers.Contract(addresses[chainID].REFERRAL, ReferralABI, signer);

    const code32String = utils.formatBytes32String(code);

    let addressByCode = await referralContract.referrals(code32String);
    console.log("addressByCode", addressByCode);
    if (addressByCode === zeroAdrress) {
      setMyRewardsNumber(0);
      setCurrentReferral("");
      setLoading(false);
    } else {
      const myRewards = await referralContract.rewards(code32String);
      const amount = parseFloat(utils.formatUnits(myRewards, 9));
      setMyRewardsNumber(amount);
      setLoading(false);
    }
  };

  const createReferralCode = async code => {
    setLoading(true);
    const signer = provider.getSigner();
    const referralContract = new ethers.Contract(addresses[chainID].REFERRAL, ReferralABI, signer);

    const code32String = utils.formatBytes32String(code);
    console.log("code32String", code32String);
    try {
      const tx = await referralContract.createReferral(address, code32String);
      await tx.wait();
      console.log("done!");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const claimRewards = async code => {
    const signer = provider.getSigner();
    const referralContract = new ethers.Contract(addresses[chainID].REFERRAL, ReferralABI, signer);
    //
    const code32String = utils.formatBytes32String(code);
    try {
      const tx = await referralContract.claimRewards(code32String);
      await tx.wait();
    } catch (error) {
      console.error(error);
    }
  };

  const submitReferral = async () => {
    try {
      if (currentReferral) {
        // load my reward
        await getMyRewards(currentReferral);
      } else {
        // create new
        await createReferralCode(referralCode);
        // if success
        setMyRewardsNumber(0);
        dispatch(setReferral(referralCode));
        setCurrentReferral(referralCode);
      }
    } catch (error) {}
  };

  const copyActionToast = (
    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
      <CloseIcon fontSize="small" style={{ color: "#000" }} />
    </IconButton>
  );

  return (
    <Fade in={true} mountOnEnter unmountOnExit>
      <Grid container className="referral-view" id="bond-view">
        <Backdrop open={true}>
          <Fade in={true}>
            <Paper className="ohm-card ohm-modal">
              <Box sx={{ pb: 3 }} display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h2">Referral</Typography>
                <Link component={NavLink} to="/bonds" className="cancel-bond">
                  <SvgIcon color="secondary" component={XIcon} />
                </Link>
              </Box>
              <Grid className="referral-grid-view" container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box className="card" sx={{ mb: 1 }}>
                    <Box display="flex" alignItems="center">
                      <Box sx={{ mr: 1 }} flex="1" alignItems="center">
                        {currentReferral ? (
                          <Box display="flex" alignItems="center" justifyContent="space-between">
                            <Box sx={{ mr: 3 }}>
                              <Typography variant="body1">Your Code</Typography>
                              <Typography variant="body2" color="textSecondary" style={{ wordBreak: "break-all" }}>
                                {`${hostAddress}/#/bonds?ref=${currentReferral}`}
                              </Typography>
                            </Box>

                            <Button
                              variant="text"
                              color="primary"
                              onClick={() => {
                                copy(`${hostAddress}/#/bonds?ref=${currentReferral}`);
                                openCopy();
                              }}
                            >
                              <FileCopy />
                            </Button>
                          </Box>
                        ) : (
                          <Box display="flex" justifyContent="space-between">
                            <Box flex="1" sx={{ mr: 1 }}>
                              <FormControl fullWidth>
                                <TextField
                                  placeholder="Enter Your Code"
                                  value={referralCode}
                                  onChange={e => setReferralCode(e.target.value)}
                                  variant="outlined"
                                  label="Your Code"
                                />
                              </FormControl>
                            </Box>
                            {loading ? (
                              <Button style={{ width: "100px" }} loading variant="contained" color="primary">
                                Loading
                              </Button>
                            ) : (
                              <Button
                                style={{ width: "100px" }}
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                  submitReferral();
                                }}
                              >
                                {currentReferral ? "Sync" : "Create"}
                              </Button>
                            )}
                          </Box>
                        )}
                      </Box>
                    </Box>

                    <Snackbar
                      open={open}
                      autoHideDuration={3000}
                      onClose={handleClose}
                      message="Copied to clipboard!"
                      action={copyActionToast}
                    />
                  </Box>

                  <Box sx={{ py: 2, px: 1 }} display="flex" justifyContent="space-between">
                    <Typography>Your Rewards</Typography>
                    <Typography>
                      <strong>0 MUSH</strong>
                    </Typography>
                  </Box>
                  <Box sx={{ pb: 2 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        // createReferral();
                      }}
                    >
                      Claim Rewards
                    </Button>
                  </Box>

                  <Box sx={{ mt: 3 }} flex="1" className="card" display="flex" flexDirection="column">
                    <Box>
                      <Typography component="p" className="card-header">
                        Referral History
                      </Typography>
                    </Box>
                    <Box sx={{ py: 5 }} display="flex" justifyContent="center" alignItems="center" flex="1">
                      <Typography color="textSecondary">Coming soon!</Typography>
                    </Box>
                    {/* <DataTable height={200} /> */}
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" flexDirection="column" height="100%">
                    <Box flex="1" className="card" display="flex" flexDirection="column">
                      <Box>
                        <Typography component="p" className="card-header">
                          Top Referral
                        </Typography>
                      </Box>
                      <Box sx={{ py: 5 }} flex="1" display="flex" justifyContent="center" alignItems="center">
                        <Typography color="textSecondary">Coming soon!</Typography>
                      </Box>
                      {/* <DataTable height="100%" /> */}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Fade>
        </Backdrop>
      </Grid>
    </Fade>
  );
}
