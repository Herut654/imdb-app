import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    // display: 'flex',
    // justifyContent: 'center'
  },
  card: {
    // margin: "auto",
    // marginTop: "10px",
    // padding: "15px",
    // minWidth: "200px",
    // maxWidth: "300px",
    // borderRadius: "10px",
    // boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.30)",
  },
  cityName: {
    // fontWeight: 400,
    // fontSize: "2.1em",
  },
 
  icon: {
    paddingLeft: "10px",
  },
  weatherStatus: {
    fontSize: "16px",
    color: "rgb(170, 170, 170)",
  },
  weatherTemp: {
    fontWeight: 100,
    fontSize: "2.9em",
  },
  media: {
    paddingTop: '100%',
  },
}));

export default useStyles