import { makeStyles } from "@material-ui/core/styles";



 const useStyles =  makeStyles((theme) => ({
 buttonCardDelete: {
 padding: "0px",
  marginTop: '15px',
  marginBottom: '15px',
  '&:hover': {
    color: '#ff0000',
    backgroundColor: 'rgba(255,0,0,.1)',
  },
 },
edit: {
  margin: "0",
  padding:"0px",
}

}));

export default useStyles;